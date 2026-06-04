# Project scaffold prompt — TypeScript + Express RAG Resume Search

Goal: generate a complete TypeScript + Node.js + Express project scaffold for the RAG-based resume search described in Architecture.md.

Instructions for the assistant (use when asking Copilot side chat to scaffold):

- Target runtime: Node.js 18+; language: TypeScript.
- Project layout must match the architecture: `src/{app.ts,server.ts,config/,routes/,services/,repositories/,middleware/,types/}`.
- Provide `package.json`, `tsconfig.json`, `.env.example`, and minimal `README.md` with run commands.
- Include dev dependencies: `typescript`, `ts-node-dev`, `eslint`, `jest` (or `vitest`), `supertest`.
- Include basic middleware: requestId, structured JSON logger, error handler, payload size limiter.
- Implement health endpoints skeleton in `src/routes/health.ts` and a MongoDB connector in `src/repositories/mongo.ts`.
- Add scripts: `start`, `dev`, `build`, `test`, `lint`.

Deliverables (single request):

- File list and content for the scaffold (minimally implement files listed above).
- A short test that confirms `GET /v1/health` returns 200 and JSON with `app` and `uptime`.

Constraints & style:

- Keep code idiomatic and minimal — prefer clarity over cleverness.
- Use `async/await` and proper error handling.
- Do NOT call external APIs (Mistral) in the scaffold; provide service stubs and interfaces.
- Use dependency injection via simple factory functions where appropriate.

Example prompt usage (user -> assistant):

"Generate the TypeScript Express project scaffold for the Resume Search RAG app. Use the scaffold prompt rules and include package.json, tsconfig, and a working health endpoint with a basic test."
