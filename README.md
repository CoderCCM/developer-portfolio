# Connor Magnuson's Developer Portfolio

A personal portfolio website showcasing Connor Magnuson's experience, skills, projects, research, education, media appearances, and contact information.

**Live site:** [connormagnuson.com](https://connormagnuson.com)

## Features

- Responsive portfolio homepage with dedicated sections for experience, skills, projects, education, research, and media
- Animated hero, about, and contact sections
- Project and research cards with links for available demos or resources
- Contact form backed by a Next.js API route and Nodemailer
- Playwright visual tests for desktop and mobile layouts

## Tech Stack

- **Framework:** Next.js 16 and React 19
- **Styling:** Tailwind CSS 4 and Sass
- **Contact:** Nodemailer and Gmail SMTP
- **Testing:** Playwright
- **Deployment:** Docker or Vercel

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the project root. The application uses the following variables:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Recommended | Base URL used by the client contact form, such as `http://localhost:3000` |
| `EMAIL_ADDRESS_LOGIN` | For contact email | Gmail account used by Nodemailer |
| `EMAIL_ADDRESS_TO` | For contact email | Inbox that receives portfolio messages |
| `GMAIL_PASSKEY` | For contact email | Gmail app password for `EMAIL_ADDRESS_LOGIN` |

> For Gmail, use an app password rather than the account's normal password. The current contact route expects `EMAIL_ADDRESS_LOGIN` for the SMTP login and `EMAIL_ADDRESS_TO` for the recipient.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

## Visual Testing

Playwright compares screenshots for the homepage and blog page at desktop and mobile viewport sizes.

```bash
npm run build
npx playwright install chromium
npm start
npx playwright test
```

Update intentional visual changes with:

```bash
npx playwright test --update-snapshots
```

## Docker

Development container:

```bash
docker compose up dev
```

The site is served at [http://localhost:3000](http://localhost:3000).

Production container:

```bash
docker compose up --build prod
```

The production service is mapped to [http://localhost:3005](http://localhost:3005).

## Project Structure

```text
app/                  Next.js routes, layouts, sections, and API handlers
  api/contact/        Contact-form email endpoint
  api/google/         Server-side reCAPTCHA verification endpoint
  components/         Homepage and shared UI components
  css/                Global and component styles
public/               Images, resume, papers, PDFs, and static demos
utils/data/           Portfolio content data
utils/                Validation and presentation helpers
tests/                Playwright visual tests and screenshots
```

Portfolio content is primarily data-driven. Update files in `utils/data/` and static assets in `public/` to customize the site.