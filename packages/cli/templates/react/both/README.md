# Hanui Both Template

A complete monorepo template combining both Portal and Admin applications using Turborepo and pnpm workspaces.

## Project Structure

```
my-project/
├── apps/
│   ├── portal/        # React + Vite (port 3000)
│   └── admin/         # React + Vite (port 3001)
├── packages/          # Future: shared packages
├── package.json       # Monorepo root configuration
├── pnpm-workspace.yaml
├── turbo.json
├── .gitignore
└── README.md
```

## Features

### Portal App (@hanui-workspace/portal)

- User-facing portal application
- React + Vite + TypeScript
- React Router for navigation
- Hanui Design System components
- Runs on port 3000
- Includes P0 pages: Home, About, Service List, Service Detail

### Admin App (@hanui-workspace/admin)

- Admin dashboard application
- React + Vite + TypeScript
- React Router for navigation
- Hanui Design System components
- Recharts for data visualization
- Runs on port 3001
- Includes P0 pages: Dashboard, Users, Settings

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run both apps concurrently
pnpm dev

# Run only portal (port 3000)
pnpm dev:portal

# Run only admin (port 3001)
pnpm dev:admin
```

### Build

```bash
# Build all apps
pnpm build

# Lint all apps
pnpm lint
```

## Access Applications

After running `pnpm dev`:

- Portal: http://localhost:3000
- Admin: http://localhost:3001

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: TypeScript
- **Routing**: React Router v6
- **UI Components**: @hanui/react
- **Charts**: Recharts (Admin only)
- **Monorepo**: Turborepo + pnpm workspaces
- **Linting**: ESLint

## Monorepo Architecture

This template uses:

- **pnpm workspaces** for dependency management
- **Turborepo** for task orchestration and caching

### Why Turborepo?

- Fast, incremental builds
- Smart caching
- Parallel task execution
- Easy to scale with more apps/packages

## Future Enhancements

- Add `packages/shared` for common utilities
- Add shared UI component library
- Add shared configuration packages
- Add testing setup
- Add CI/CD configurations

## Scripts Reference

| Script            | Description                      |
| ----------------- | -------------------------------- |
| `pnpm dev`        | Run all apps in development mode |
| `pnpm dev:portal` | Run only the portal app          |
| `pnpm dev:admin`  | Run only the admin app           |
| `pnpm build`      | Build all apps for production    |
| `pnpm lint`       | Lint all apps                    |

## Learn More

- [Hanui Design System](https://github.com/hanui)
- [Turborepo Documentation](https://turbo.build/repo)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
