# Microfrontend Template

Project template for microfrontends. See [documentation](https://georgwittberger.github.io/microfrontend-template/).

## Getting Started

Make sure you have installed the following build tools:

- [pnpm](https://pnpm.io/) - see [installation guide](https://pnpm.io/installation)
- [Turborepo](https://turbo.build/repo) - see [installation guide](https://turbo.build/repo/docs/installing)

Install project dependencies for all workspaces:

```bash
pnpm install
```

Either start all applications in development mode or production mode:

```bash
# Development mode (rebuilds automatically on code changes)
turbo dev:composed

# Production mode (builds once but faster page load)
turbo start
```

Open host applications with your browser:

- <http://localhost:3000> - Next.js-based modern host application
- <http://localhost:3100> - Express-based legacy host application

## License

[MIT](https://opensource.org/license/mit/)
