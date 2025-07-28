import { prompts } from "@/lib/prompts"
import { Tools } from "@/lib/toolsConfig"
import { type NextRequest, NextResponse } from "next/server"

export const maxDuration = 60 // 60 seconds timeout

export type RequestBody = {
  decisionContext: string
  method: Tools
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Not available" }, { status: 500 })
  }

  const body: RequestBody = await request.json()
  const { decisionContext, method } = body
  const systemInstructions = prompts[method]
  const userInstructions = `Decision Context: ${decisionContext}.`

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemInstructions },
          { role: "user", content: userInstructions }
        ],
        stream: false
      })
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error calling API" },
        { status: res.status }
      )
    }

    const data = await res.json()
    const aiResponse = data.choices?.[0]?.message?.content ?? "";

    let result;
    try {
      result = JSON.parse(aiResponse);
    } catch (err) {
      return NextResponse.json(
        { error: "Could not parse AI response as JSON", raw: aiResponse },
        { status: 200 }
      );
    }
    return NextResponse.json({ result })
  } catch (error) {
    console.error("AI processing error:", error)
    return NextResponse.json({ error: "Failed to process AI request" }, { status: 500 })
  }
}
