# Assignment 1

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
