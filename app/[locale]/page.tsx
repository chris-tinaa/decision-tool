"use client"

import { useTranslations } from "next-intl"
import {
  Dices,
  BarChart2,
  ListChecks,
  GitBranch,
  Scale,
  LayoutGrid,
  DollarSign,
  Map,
} from "lucide-react"
import { ToolCard } from "@/components/tool-card"


export default function Home() {
  const t = useTranslations()

  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("home.title")}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  {t("home.subtitle")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-3">
              <ToolCard
                title={t("tools.decisionMatrix.title")}
                description={t("tools.decisionMatrix.description")}
                link="/decision-matrix"
                icon={BarChart2}
              />
              {/* 
              <ToolCard
                title={t("tools.decisionTree.title")}
                description={t("tools.decisionTree.description")}
                link="/decision-tree"
                icon={GitBranch}
              /> */}

              <ToolCard
                title={t("tools.prosCons.title")}
                description={t("tools.prosCons.description")}
                link="/pros-cons"
                icon={Scale}
              />

              <ToolCard
                title={t("tools.randomDecision.title")}
                description={t("tools.randomDecision.description")}
                link="/random-decision"
                icon={Dices}
              />

              <ToolCard
                title={t("tools.weightedRandom.title")}
                description={t("tools.weightedRandom.description")}
                link="/weighted-random"
                icon={ListChecks}
              />

              <ToolCard
                title={t("tools.eisenhowerMatrix.title")}
                description={t("tools.eisenhowerMatrix.description")}
                link="/eisenhower-matrix"
                icon={LayoutGrid}
              />

              <ToolCard
                title={t("tools.swotAnalysis.title")}
                description={t("tools.swotAnalysis.description")}
                link="/swot-analysis"
                preview={
                  <div className="flex h-16 w-16 flex-col flex-wrap overflow-hidden rounded bg-gray-100 dark:bg-gray-800">
                    <div className="flex-1 flex items-center justify-center bg-green-200 dark:bg-green-900">
                      S
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-red-200 dark:bg-red-900">
                      W
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-blue-200 dark:bg-blue-900">
                      O
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-yellow-200 dark:bg-yellow-900">
                      T
                    </div>
                  </div>
                }
              />

              {/* <ToolCard
                title={t("tools.costBenefit.title")}
                description={t("tools.costBenefit.description")}
                link="/cost-benefit"
                icon={DollarSign}
              /> */}

              {/* <ToolCard
                title={t("tools.scenarioPlanning.title")}
                description={t("tools.scenarioPlanning.description")}
                link="/scenario-planning"
                icon={Map}
              /> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          {/* Existing footer text */}
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            {t("home.footer")}
          </p>

          <a
            href="https://buymeacoffee.com/chrislinlig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium 
                 transition-colors bg-pink-300 hover:bg-pink-400 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
          >
            <span className="text-xl">☕</span>
            Buy me a coffee
          </a>
        </div>
      </footer>
    </>
  )
}
