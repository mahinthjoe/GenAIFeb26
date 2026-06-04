# Endpoint implementation prompt — single endpoint or route

Use this prompt to ask Copilot side chat to implement or edit a specific endpoint in the Resume Search RAG app.

Template:

"Implement `POST /v1/search/bm25` in `src/routes/search.ts` and `SearchService.bm25Search` in `src/services/searchService.ts`.

Requirements:

- Input body: `{ query: string, topK?: number, filters?: object }`.
- Validate input and return `400` on invalid requests.
- Use `ResumeRepository` interface for BM25 queries; provide a mock implementation if repository missing.
- Log component timings in the request-level structured logger with `bm25Ms`.
- Return `200` with `{ query, topK, results: [{ resumeId, score, snippet, metadata }] }`.
- Add unit tests using `supertest` and jest (or vitest) verifying success and validation error.

If any referenced file is missing, create a minimal stub that follows the project's DI pattern.

When asking for code edits include: the file path to edit and a one-line summary of the behavior to implement."
