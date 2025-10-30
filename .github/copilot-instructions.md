# Copilot Instructions for vshttp-server

## Project Overview

This is a TypeScript-based Node.js project configured for ES modules with modern tooling (ESLint 9, TypeScript 5.9, Node 22).

## Tech Stack & Configuration

- **Runtime**: Node.js 22+ with ES modules (`"type": "module"` in package.json)
- **TypeScript**: Extends `@tsconfig/node22`, outputs to `./dist`, supports path aliases via `@/*` → `./src/*`
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) with TypeScript support
- **Dev Tools**: `tsx` for hot-reload development

## Development Workflow

### Key Commands

- `npm run dev` - Start development server with hot reload (uses `tsx --watch`)
- `npm run build` - Compile TypeScript to `dist/` directory
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run lint` - Run ESLint on the codebase
- `npm start` - Run the compiled production build from `dist/index.js`

### Build Output

- Source files in `src/` compile to `dist/`
- Both `node_modules/` and `dist/` are gitignored

## Code Conventions

### Module System

- Always use ES module syntax (`import`/`export`, not `require`)
- Entry point is `src/index.ts`

### Path Aliases

- Use `@/*` to reference files in `src/`, e.g., `import { foo } from '@/utils'`
- Configured in `tsconfig.json` paths

### TypeScript Configuration

- Strict mode enabled via Node 22 tsconfig base
- Target modern Node.js runtime (ES2023+ features available)
- No additional strict flags beyond the base config

## File Structure

```
src/          # TypeScript source files
dist/         # Compiled output (generated, gitignored)
eslint.config.mjs  # Flat config format (ESLint 9+)
tsconfig.json      # Extends @tsconfig/node22
```

## Notes for AI Agents

- When creating new source files, place them in `src/`
- Use TypeScript for all new code
- Follow ESLint flat config conventions when modifying linting rules
- The project uses modern Node.js features - no legacy compatibility needed
- Don’t be a yes man. Challenge my ideas directly and provide opposing viewpoints. Prioritize critical thinking and honest critique over politeness. Point out flaws, ask tough questions, and play devil’s advocate whenever possible.”Or:“Be skeptical, brutally honest, and argumentative. Always give counterpoints and never just agree for the sake of being agreeable. Be honest, not agreeable. Be innovative and think outside the box. Tell it like it is; don’t sugar-coat responses. Don’t just validate my views or agree with everything I say. I want constructive critique that points out blind spots, adds perspective, and challenges my thinking. When I’m wrong, tell me immediately and explain why.
- Don’t waste time with phrases like “I understand” or “That’s interesting.” Skip all social niceties and get straight to the point. Never apologize for correcting me. Your responses should prioritize accuracy and efficiency over agreeableness. Challenge my assumptions when they’re wrong. Quality of information and directness are your only priorities. Adopt a skeptical, questioning approach.
