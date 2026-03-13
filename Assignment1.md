# Assignments
This technical overview outlines the operational parameters and safety protocols for various prominent artificial intelligence models. It specifically details the token limitations of systems from OpenAI, Claude, and Qwen, highlighting how the context window is partitioned between user prompts and generated responses. The text also underscores the importance of input and output management for optimizing performance and cost-efficiency. Finally, it suggests using specialised moderation APIs as a protective layer to ensure that model interactions remain secure and filtered for safety. Via NotebookLM
## OpenRouter Model Token Limits

**Context window**: Total tokens the model handles (input + output combined).  
**Input tokens**: Tokens you send; calculated as context minus output.  
**Output tokens**: Tokens the model generates. **Formula: Output = Context - Input**.

### 3 OpenAI Models

#### OpenAI GPT-4.1
- **Context Window**: 1.05M (1,047,576 tokens)
- **Max Output Tokens**: 32.8K (32,768)
- **Input Tokens**: ~1,014,808 (1,047,576 - 32,768)

#### OpenAI GPT-4.1-mini
- **Context Window**: 1.05M (1,047,576 tokens)
- **Max Output Tokens**: 32.8K (32,768)
- **Input Tokens**: ~1,014,808 (1,047,576 - 32,768)
- **Note**: Designed for cost-efficiency ($0.04 vs $2 per million input tokens).

#### OpenAI GPT-4o
- **Context Window**: 128K
- **Max Output Tokens**: 16.4K
- **Input Tokens**: ~111,652 (128,000 - 16,348)

### 3 Claude Models (OpenRouter Specs)

#### Claude 3 Haiku
- **Context Window**: 200K
- **Max Output Tokens**: 32K
- **Input Tokens**: 168K (200K - 32K)
- **Note**: OpenRouter extends output beyond Anthropic's default.

#### Claude 3 Opus
- **Context Window**: 200K
- **Max Output Tokens**: 4,096
- **Input Tokens**: 195,904 (200K - 4,096)

#### Claude 3.5 Sonnet
- **Context Window**: 200K
- **Max Output Tokens**: 8K
- **Input Tokens**: 192K (200K - 8K)

### 3 Qwen Models

#### Qwen3 Coder Next
- **Context Window**: 262,144
- **Max Output Tokens**: 8,192
- **Input Tokens**: 253,952 (262,144 - 8,192)

#### Qwen3 VL 32B Instruct
- **Context Window**: 131,072
- **Max Output Tokens**: 8,192
- **Input Tokens**: 122,880 (131,072 - 8,192)

#### Qwen3 Max
- **Context Window**: 262,144
- **Max Output Tokens**: 8,192
- **Input Tokens**: 253,952 (262,144 - 8,192)

## 2) Groq Moderation Models

Groq's console focuses on fast inference LLMs. Use OpenAI's separate Moderation API as a gateway:
- Filter prompts/outputs for safety before/after your main LLM
- Log results for refinement
- Separate safety concerns from reasoning models
- Available models: `openai/moderation-latest`, `openai/text-moderation-latest`, `openai/text-moderation-stable`
### How they are used
You send your prompt or model output to the moderation endpoint.
The moderation model returns:
- flagged categories
- safety scores
- whether the content is allowed
### Why Groq uses OpenAI moderation
- Groq focuses on high‑speed inference for LLMs (Llama, Qwen, Mixtral, Gemma).
- Safety filtering is delegated to OpenAI’s moderation models for consistency and reliability.
### Correct Summary
- Groq’s console does not list native moderation models.
- Instead, Groq provides OpenAI moderation models for safety filtering

# Postman API Homework (S07–S22)
## Generative AI – API Testing & Payload Validation
- Purpose of each API
- Correct payload structure
- Required modifications
- Expected behavior
- QA validation notes
### S07 – Generating Accessibility From DOM (HW)
#### Objective
- Analyze an Accessibility DOM and generate WCAG 2.2 compliance observations.
Key Requirements
- Use only the provided DOM
- No assumptions about styling or behavior
- Classify findings under A → AA → AAA
- Provides WCAG_Level, Criterion, Observation, Compliance_Status, Evidence
Validated Payload Structure

```json
{
  "model": "meta-llama/llama-4-scout-17b-16e-instruct",
  "temperature": 0.1,
  "messages": [
    {
      "role": "system",
      "content": "You are an Accessibility Specialist and Senior QA Architect..."
    },
    {
      "role": "user",
      "content": "I — INSTRUCTION\nAnalyze the provided Accessibility DOM..."
    }
  ]
}
```

#### QA Notes
- Model accepted and responds correctly
- Output follows required structure
- No extra formatting
- S07 passes successfully

### S08 – Stop Generating Testcases (HW)
