---
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you try out the project template locally please make sure that you have installed the following build tools.

- [pnpm](https://pnpm.io/) to manage workspaces and dependencies. See [installation guide](https://pnpm.io/installation)
- [Turborepo](https://turbo.build/repo) to run tasks for workspaces in the monorepo. See [installation guide](https://turbo.build/repo/docs/installing)

:::info

You can use NPM or Yarn as well and also avoid Turborepo but it requires some manual work.

:::

## Clone Repository

Clone the GitHub repository to a local folder on your machine.

<https://github.com/georgwittberger/microfrontend-template>

## Install Dependencies

Open a terminal in the local repository and install the project dependencies.

```bash
pnpm install
```

:::info

You can use NPM or Yarn as well but it will generate their specific lockfiles during installation.

:::

## Start Applications

Open a terminal in the local repository and start the applications. Choose between development mode and production mode.

- **Development mode** rebuilds automatically when code changes but page loads are slower. Use this if you want adjust code.
- **Production mode** builds only once and page loads are faster. Use this if you only want to demonstrate the concept.

```bash
# Development mode
turbo dev:composed

# Production mode
turbo start
```

:::info

Without Turborepo you have to run the following NPM scripts manually.

Development mode:

- Inside folder `apps/service-mfe` run `pnpm dev:composed`
- Inside folder `apps/host-nextjs` run `pnpm dev:composed`
- Inside folder `apps/host-express` run `pnpm start`

Production mode:

- Inside folder `apps/service-mfe` run `pnpm build` and then `pnpm start`
- Inside folder `apps/host-nextjs` run `pnpm build` and then `pnpm start`
- Inside folder `apps/host-express` run `pnpm start`

:::

## Open Applications

Visit the host applications with your browser.

- Modern application using Next.js: <http://localhost:3000>
- Legacy application using Express: <http://localhost:3100>
