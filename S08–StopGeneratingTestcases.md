# S08 – Stop Generating Testcases
## Objective 
### Use the Stop parameter to halt generation at the correct point
#### stop: [":6"] Never appears in the output so Entire body text is executed, It is an Ineffective Stop Sequence
##### What is the stop Parameter?
In LLM (Large Language Model) APIs like Groq or OpenAI, the stop parameter is a list of string sequences. It tells the model to immediately cease generation if it produces any of those specific sequences. This is useful for controlling output length or preventing the model from generating unnecessary text (like hallucinating a user response in a chat scenario).
```
{
  "model": "meta-llama/llama-4-scout-17b-16e-instruct",
     "stop" : [":6"],
  "messages": [
    {
         "role": "system",
         "content": "You are a Senior QA Analyst experienced in converting Agile user stories into high-quality, review-ready test cases."
    },
    {
      "role": "user",
      "content": "I — INSTRUCTION\nConvert the provided User Stories and Acceptance Criteria into detailed, testable Test Cases.\n\nMANDATORY RULES:\n1) Derive test cases ONLY from the given user stories and acceptance criteria.\n2) Do NOT add assumptions or new requirements.\n3) Cover positive, negative, and validation scenarios.\n4) Write test cases from an end-user perspective.\n5) Do NOT include implementation or technical details.\n\nC — CONTEXT\nThese test cases will be used by QA teams for manual and automation testing in an enterprise healthcare application.\n\nP — PERSONA\nYou are a Senior QA Analyst experienced in converting Agile user stories into high-quality, review-ready test cases.\n\nO — OUTPUT\nReturn test cases in the following structured format:\n- TC_ID:1\n- Title\n- Preconditions\n- Test Steps\n- Test Data\n- Expected Result Type\n Positive Negative Edge\n\nRules:\n- Each test case must be clear and independent\n- Use business-readable language only\n- One scenario per test case\n\nUSER STORY:\nAs a user, I want to record doctor activities and doctor notes so that the related functionality works as expected.\n\nACCEPTANCE CRITERIA:\nGiven the system is operational,\nWhen the user performs the intended action,\nThen the system should respond accurately and meet functional expectations. with 10 testcases"
    }
  ]
}
```
#### The Premature Stop Sequence
Payload: "stop": ["id"] 
If we change the stop : ["id"] as we have to Modify the payload as per the requirement where necessary.

Intent: The user changed the stop sequence to the letters "id".
Result: The output was cut off abruptly:
```javascript
Here are the test cases derived from the prov"
```
Why: The model was trying to write the word "provided".
It generated "prov".
The next characters would have been "id".
Because "id" matches the stop sequence exactly, the API stopped generation immediately before outputting those characters.
Confirmation: The response JSON confirms this with "finish_reason": "stop".
```
{
    "id": "chatcmpl-0133a6e2-ed3b-4a13-b54f-2e3a8936191b",
    "object": "chat.completion",
    "created": 1773223738,
    "model": "meta-llama/llama-4-scout-17b-16e-instruct",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Here are the test cases derived from the prov"
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "queue_time": 0.257818321,
        "prompt_tokens": 302,
        "prompt_time": 0.009547518,
        "completion_tokens": 1389,
        "completion_time": 3.367197664,
        "total_tokens": 1691,
        "total_time": 3.376745182
    },
    "usage_breakdown": null,
    "system_fingerprint": "fp_37da608fc1",
    "x_groq": {
        "id": "req_01kke5xvpzeq0stsg5rfcrczef",
        "seed": 1726434558
    },
    "service_tier": "on_demand"
}
```
#### script stops with a reason "finish_reason": "stop" upon encountering "id" in the output.
