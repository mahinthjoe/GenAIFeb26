# Debugging and test-driven prompts for Copilot side chat

Use this when you need help debugging failing tests, runtime errors, or lint failures.

Template steps to include in your prompt to Copilot:

1. Reproduce: Provide failing command output (test runner stack trace or server error). Wrap logs in triple backticks.
2. Localize: Ask Copilot to point to the most likely file and line range causing the issue.
3. Minimal fix: Request a minimal, focused patch that fixes the root cause and adds/update a unit test that demonstrates the fix.
4. Verify: Ask for the commands to run tests and linters.

Example prompt:

"Tests fail with this stack trace: ```<paste trace>```. Find the bug and produce a minimal patch to `src/services/searchService.ts` that fixes it and add a test `tests/searchService.test.ts` proving the fix. Provide only the patch."

Rules for assistant responses:

- Return patches as file diffs suitable for apply_patch (or list exact file edits).
- Keep changes minimal; do not refactor unrelated code.
- Add a single unit test per fix demonstrating the regression and the fix.
