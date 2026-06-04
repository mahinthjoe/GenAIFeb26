# LLM rerank & summarization prompt templates

Use these prompts to generate LLM prompts for re-ranking candidate resumes and summarizing candidate fit.

1) Rerank template

System: You are an expert recruiter assistant. Given a job query and candidate snippets, return a JSON array of candidates sorted by relevance.

User (format):

```
{
  "query": "<job description or query>",
  "candidates": [
    { "id": "<resumeId>", "snippet": "<text snippet>", "metadata": { ... } },
    ...
  ],
  "topK": 8
}
```

Assistant should return:

```
{
  "query": "...",
  "ranked": [
    { "id": "...", "score": 0-100, "reason": "short explanation" },
    ...
  ]
}
```

Notes: Provide stable, reproducible scoring guidance (normalize lengths, penalize poor matches). Keep responses strictly JSON.

2) Summarization template

User (format): `{ "query": "...", "candidate": {"id":"...","snippet":"..."}, "style":"short"|"detailed", "maxTokens": 200 }`

Assistant: Return `{ "id":"...","summary":"...", "fitScore":0-100 }`.

Include a brief example for a candidate showing how to highlight matching skills and gaps.
