## Design principles

- Don't overengineer: readibility beats cleverness and overoptimization
- Consistency across codebase: if there is an existing pattern, follow it even if an alternative seems marginally better.
- Clear separation of concerns
- Design for scalability and maintainability: avoid premature performance optimizations.
- When multiple valid solutions exist, choose the simplest one

## Code quality and structure

- Small and focused functions (single responsibility)
- Avoid deep nesting
- Clear naming over short naming
- One concept per file/module

## Naming conventions

- Kebab-case for file names
- PascalCase for component names
- camelCase for variable and function names
- Use `as const` objects instead of enums; use UPPERCASE for keys

## Comments & Documentation

- Comment only non-obvious decisions
- Comments should explain "why", not "what"
- Use comments for section names in JSX/TSX markup

## Error handling & validation

- Handle errors explicitly; never silently ignore failures
- Validate external input at system boundaries (API, forms, webhooks)
- Do not catch errors unless they can be meaningfully handled
- Error messages should include enough context to debug
- Do not use try/catch unless you know exactly what exception you are handling

## Other do's

- If unsure, ask before implementing
- State assumptions clearly
- Propose alternatives when trade-offs exist
- Every time you created or changed the any UI, use impeccable skill to polish and fix it

## Other dont's

- DO NOT use default exports — always use named exports

- DO NOT make improvements or changes unless asked by the user to do so
- DO NOT propose future enhancements unless explicity asked by the user
- DO NOT critique the implementation or identify problems irrelevant to the current task at hand
- DO NOT introduce new libraries without justification (some operations can be handled by utility functions)
- DO NOT modify unrelated code or files
- DO NOT ever use emojis
- DO NOT use any for types
- DO NOT put your name in commit message ("Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
  " etc.)
- NEWER COMMIT THIS FILE!!!! NEVER EVER!

## Folder structure

Feature-based architecture. The backend lives alongside this frontend at `../Server` (the vendored Candlelight server — see the repo-root `CLAUDE.md`). Features are isolated and self-contained but can import from `shared/`.

```
src/
  main.tsx                   # App entry point
  index.css                  # Global styles

  app/                       # App-level setup (not feature-specific)
    routes.tsx               # Route definitions (TanStack Router)
    store.ts                 # Redux store setup
    query-client.ts          # TanStack Query client config
    query-provider.tsx       # TanStack Query provider
    pages/                   # Page-level components wired to routes
      <feature>/
        <feature>.page.tsx

  features/                  # Feature modules (isolated)
    <feature>/
      components/            # UI components scoped to this feature
      hooks/                 # Feature-specific hooks
      schemas/               # Zod schemas for this feature
      store.ts               # Redux slice (if needed)
      types.ts               # Types scoped to this feature

  shared/                    # Cross-feature shared code
    constants/               # App-wide constants
    hooks/                   # Shared custom hooks (e.g. API hooks)
      api/                   # Generic TanStack Query wrappers
    layout/                  # App shell, sidebar, header
      components/
    schemas/                 # Shared Zod schemas
    types/                   # Shared TypeScript types
    utils/                   # Shared utility functions

  config/                    # Infrastructure config (axios, env, etc.)
  assets/                    # Static assets (images, svgs)
```

### Rules

- Features must not import from other features directly
- Shared code lives in `shared/` and can be imported by any feature
- Page components in `app/pages/` are thin — they compose feature components
- Each folder with multiple exports should have an `index.ts` barrel file
