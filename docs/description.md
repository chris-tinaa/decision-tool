# Decision Maker App

A comprehensive decision-making toolkit built with [Next.js](https://nextjs.org), featuring multiple frameworks and interactive tools to help users make better choices. This documentation covers the architecture, features, usage, and customization of the project.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Decision Tools](#decision-tools)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Internationalization (i18n)](#internationalization-i18n)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
This app provides a suite of decision-making frameworks, including cost-benefit analysis, decision matrix, decision tree, Eisenhower matrix, pros & cons, random decision, scenario planning, SWOT analysis, and weighted random selection. It is designed for personal, professional, and educational use.

## Features
- Multiple decision-making frameworks
- Responsive design (mobile & desktop)
- Language switching (i18n support)
- AI-powered suggestions (via `/api/ai`)
- Shareable results
- Modern UI with Tailwind CSS
- Customizable tool configuration

## Project Structure
```
├── app/
│   ├── [locale]/
│   │   ├── cost-benefit/
│   │   ├── decision-matrix/
│   │   ├── decision-tree/
│   │   ├── eisenhower-matrix/
│   │   ├── pros-cons/
│   │   ├── random-decision/
│   │   ├── scenario-planning/
│   │   ├── swot-analysis/
│   │   └── weighted-random/
│   ├── api/
│   │   ├── ai/
│   │   └── token/
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── ui/
│   ├── confirmation-dialog.tsx
│   ├── language-switcher.tsx
│   ├── loading-overlay.tsx
│   ├── page-header.tsx
│   ├── see-result-button.tsx
│   ├── share-url-button.tsx
│   └── tool-card.tsx
├── hooks/
├── i18n/
├── lib/
├── messages/
├── public/
├── docs/
├── ...config files
```

## Decision Tools
Each tool is implemented as a separate page/component under `app/[locale]/`. Tools include:
- **Cost-Benefit Analysis**
- **Decision Matrix**
- **Decision Tree**
- **Eisenhower Matrix**
- **Pros & Cons**
- **Random Decision**
- **Scenario Planning**
- **SWOT Analysis**
- **Weighted Random**

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd decision-maker
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn, pnpm, bun
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development
- Edit main pages in `app/[locale]/[tool]/page.tsx`.
- UI components are in `components/` and `components/ui/`.
- Custom hooks in `hooks/`.
- Tool configuration in `lib/toolsConfig.ts` and types in `lib/toolsConfigType.ts`.
- Internationalization handled via `i18n/` and `messages/`.
- API routes in `app/api/`.

## Internationalization (i18n)
- Language files: `messages/en.json`, `messages/id.json`, etc.
- Language switcher: `components/language-switcher.tsx`.
- Locale-based routing: `app/[locale]/`.

## Customization
- Add new tools by creating a new folder under `app/[locale]/` and updating `lib/toolsConfig.ts`.
- Customize UI via Tailwind CSS in `app/globals.css` and `tailwind.config.js`.
- Update translations in `messages/`.

## Deployment
- Recommended: [Vercel](https://vercel.com/)
- See Next.js deployment docs: https://nextjs.org/docs/app/building-your-application/deploying

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License
Specify your license here (e.g., MIT, Apache-2.0).

---

For more details, see the inline documentation in source files and the [Next.js Documentation](https://nextjs.org/docs).
