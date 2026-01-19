# Project Setup Guide

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **bun** package manager

## Quick Start Commands

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install
# OR if using bun:
bun install

# 4. Start the development server
npm run dev
# OR if using bun:
bun run dev
```

The app will be available at `http://localhost:8080`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Technology Stack

- **React** ^18.3.1 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** ^12.26.1 - Animation library
- **shadcn/ui** - UI component library
- **React Router DOM** ^6.30.1 - Client-side routing
- **Supabase** ^2.90.1 - Backend services
- **TanStack React Query** ^5.83.0 - Data fetching & caching
- **Lucide React** ^0.462.0 - Icon library
- **Recharts** ^2.15.4 - Charting library
- **Zod** ^3.25.76 - Schema validation
- **React Hook Form** ^7.61.1 - Form handling

## Environment Variables

Create a `.env` file in the root directory (if not exists):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # React components
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Third-party integrations
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── supabase/
│   ├── functions/       # Edge functions
│   └── config.toml      # Supabase configuration
└── package.json         # Dependencies and scripts
```

## Troubleshooting

### Port already in use
If port 8080 is busy, Vite will automatically try the next available port.

### Node version issues
Ensure you're using Node.js v18+:
```bash
node --version
```

### Clear cache and reinstall
```bash
rm -rf node_modules
rm package-lock.json
npm install
```
