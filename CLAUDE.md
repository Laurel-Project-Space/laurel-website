# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve     # Start dev server
npm run build     # Production build
npm run lint      # Run ESLint
npm run test:unit # Run unit tests (Mocha + Chai)
npm run test:e2e  # Run e2e tests (Cypress)
```

## Architecture

This is a Vue 3 + TypeScript website for Laurel, an art gallery/exhibition space. It uses Vue CLI with class-based components.

### Key Patterns

**Class-based Vue components**: Uses `vue-class-component` with decorators:
```typescript
import { Options, Vue } from 'vue-class-component';

@Options({ components: { ... } })
export default class MyComponent extends Vue {
  get someData() { return this.store.getters.someData; }
}
```

**Repository pattern for data**: Interfaces defined in `src/repository/Repository.ts` with CMS implementations that fetch from a remote API. Repositories are injected into the Vuex store at app initialization.

**Store access**: Components access the Vuex store via `this.store` (typed as `Store<State>` via global property).

### Structure

- `src/views/` - Page components (Home, Events, Event, About)
- `src/components/` - Reusable UI components
- `src/repository/` - Data access layer with repository interfaces and CMS implementations
- `src/types/` - TypeScript interfaces (Event, Link, Info, Image, Metadata)
- `src/store/` - Vuex store with state for links, events, and infos

### Routes

- `/` and `/exhibitions` - Events list
- `/exhibitions/:slug` - Single event (slug generated via `slugify`)
- `/about` - About page
