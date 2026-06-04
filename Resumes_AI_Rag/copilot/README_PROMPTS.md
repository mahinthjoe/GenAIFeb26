# Resume Search — Copilot Prompts (quick start)

Files created:

- `copilot/prompts/scaffold.prompt.md` — scaffold the TypeScript Express project.
- `copilot/prompts/endpoint.prompt.md` — template to request endpoint implementations.
- `copilot/prompts/llm_rerank.prompt.md` — templates for LLM reranking & summarization prompts.
- `copilot/prompts/debugging.prompt.md` — template for debugging and TDD workflows.
- `copilot/copilot_instructions.md` — usage instructions for the Copilot side chat.

Quick usage:

1. Open `copilot/copilot_instructions.md` and choose the relevant prompt template.
2. Paste the template into the Copilot side chat and fill in file paths / example inputs.
3. Ask for a patch (diff) and apply with `apply_patch`.

Want me to generate the initial scaffold now? Reply: "Scaffold project" and I will create the TypeScript project skeleton and tests.
