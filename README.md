# GenAIFeb26
## Repository Created for sharing Code with TestLeaf Course on GenAI February'26
Quote:Anything that can be said can be said clearly. Ludwig Wittgenstein
### Assignment 1

1) From open router ai - https://openrouter.ai/models Context window,input token and output token?
* Context window = how many tokens the model can handle at once (input + output combined).
* Input tokens = the tokens you send to the model.When you open any model page on OpenRouter (including GPT‑4.1), you will notice something important Input Tokens is not Listed you calculate it using the model’s published limits.
* Output tokens = the tokens the model generates in response.
**Output Tokens = Context Window - Input Tokens**

### OpenAI — GPT‑4.1
#### Context Window: 1.05M
#### Max Output Tokens: 32.8K
#### Input Tokens:
• 	Up to the full context window minus output
 OpenRouter Shows Rounded Display so 1.05M - 32.8K Resolves to Exact context Window Shown Below
• 	So effectively: ~1,014,808 tokens (1,047,576 – 32,768)

### OpenAI GPT‑4.1‑mini
#### Context Window: 1.05M
#### Max Output Tokens: 32.8K
#### Input Tokens:
• 	So effectively: ~1,014,808 tokens (1,047,576 – 32,768)
*   GPT4.1 and GPT4.1-Mini are designed for different use cases and prices $2 vs $0.04 respectively

### OpenAI GPT4o
#### Context Window: 128k
#### Max Output Tokens: 16.4k 
#### Input Tokens:
* Effectively 128,000-16,348 = 111,616 Tokens

### Claude 3 Haiku — (OpenRouter Model Specs)
#### Context Window: 200k
#### Max Output Tokens: 32k  
#### Input Tokens: =168,000=200,000-32,000
* OpenRouter extends the output limit for Claude models to 32K, even though Anthropic’s default is lower. This is why my assignment uses the OpenRouter values.

### Claude 3 Opus
#### Context Window: 200k
#### Max Output Tokens: 4096 tokens 
#### Input Tokens: 195,904 Tokens = 200,000 -4096

### Claude 3.5 Sonnet
#### Context Window: 200,000
#### Max Output Tokens:8,000  
#### Input Tokens:168,000=200,000-8,000

###  Qwen3 Coder Next
#### Context Window: 262,144
#### Max Output Tokens:8,192  
#### Input Tokens:253,932=262,144 - 8,192

### Qwen3 VL 32B Instruct
#### Context Window: 131,072 
#### Max Output Tokens:8,192 (OpenRouter uses this output cap for Qwen3 VL models)
#### Input Tokens: 122,880 = 131,072 - 8,192

###  Qwen3 Max
#### Context Window: 262,144
#### Max Output Tokens:8,192  
#### Input Tokens:253,932=262,144 - 8,192

3) Check for the Moderation models in groq (https://console.groq.com/)
- openai/moderation-latest
- openai/text-moderation-latest
- openai/text-moderation-stable


