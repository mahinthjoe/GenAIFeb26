# Copilot Side Chat Instructions — Resume Search RAG

Where to find prompts: `copilot/prompts/` contains targeted prompt templates. Use them as the body of your request when talking to Copilot side chat.

How to request work:

- For scaffolding: paste `scaffold.prompt.md` as the instruction and ask to `Generate`.
- For implementing endpoints: use `endpoint.prompt.md` and specify the target file path to edit.
- For LLM prompt generation: use `llm_rerank.prompt.md` and provide example candidates.
- For debugging: paste failing logs and `debugging.prompt.md` template.

Best practices:

- Be explicit: include file paths and small reproductions (stack traces, sample requests).
- Prefer small incremental edits and run tests locally between edits.
- When asking for code, request the minimal patch (diff) rather than full-file rewrites.

Checklist before asking for code:

- Confirm current branch is clean and tests run locally.
- Provide `Architecture.md` reference and mention required behavior clearly.
