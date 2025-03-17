# Nikka's Portfolio

A GitHub-themed personal portfolio website built with Next.js and Tailwind CSS.

## Overview

This project is a personal portfolio website that mimics the GitHub interface. It showcases my skills, education, projects, and contact information in a familiar GitHub-style layout.

## Features

- GitHub UI clone with dark theme
- Responsive design
- Dynamic section navigation
- GitHub contribution graph integration
- Programming language statistics
- Project showcase
- Education timeline
- Contact information

## env.local
GITHUB_TOKEN=your_github_personal_access_token

(the read:user token to get the contributions and languages used)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- GitHub API integration

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/avnixm/nikka-portfolio.git
cd nikka-portfolio
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
