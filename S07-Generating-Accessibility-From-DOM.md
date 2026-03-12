# S07 – Generating Accessibility From DOM (HW)
## Before touching temperature, messages, or instructions, a QA engineer always checks the model exists on 
### Groq:Your model is real, and it is officially listed under Groq’s Preview Models.
## Here is the exact entry from Groq’s supported model list: Llama 4 Scout 17B 16E
Model ID:
Speed: \~750 tokens/sec
Pricing: $0.11 input / $0.34 output per 1M tokens
Rate Limits: 300K TPM, 1K RPM
Context Window: 131,072 tokens
Max Completion Tokens: 8,192
Max File Size: 20 MB
This confirms your training institute gave you a valid Groq model, not a placeholder.
### Objective
- Analyze an Accessibility DOM and generate WCAG 2.2 compliance observations.
Key Requirements
- No assumptions about styling or behavior
- Classify findings under A → AA → AAA
- Provides WCAG\_Level, Criterion, Observation, Compliance\_Status, Evidence
### Validated Payload Structure
* Parameters
* Headers
* Correct JSON
* Correct API usage
* Correct reasoning
* Correct testing workflow
```javascript
{
  "model": "meta-llama/llama-4-scout-17b-16e-instruct",
    "temperature": 0.1,

  "messages": [
    {
      "role": "system",
      "content": "You are an Accessibility Specialist and Senior QA Architect. Your task is to analyze Accessibility DOM structures and provide WCAG 2.2 compliance observations. You must base your analysis strictly on the provided Accessibility DOM. Do not assume UI behavior or add missing elements."
    },
    {
      "role": "user",
      "content": "I — INSTRUCTION\nAnalyze the provided Accessibility DOM and identify accessibility observations against WCAG 2.2 standards.\n\nMANDATORY RULES:\n1) Use ONLY the given Accessibility DOM.\n2) Do NOT assume visual styling, color contrast, or keyboard behavior unless explicitly present in the DOM,Strictly Give only the Findings no extra text or markdown.\n3) Classify findings under WCAG Level A, AA, and AAA.\n4) Clearly state whether each observation is Compliant, Potential Risk, or Non-Compliant.\n5) Do NOT suggest implementation fixes.\n\nC — CONTEXT\nThis analysis will be used for accessibility compliance reviews and audit preparation.\n\nP — PERSONA\nYou are a Senior Accessibility Auditor with expertise in WCAG 2.2 A, AA, and AAA standards [STRICTLY] with A,AA and AAA observation in same order.\n\nO — OUTPUT\nReturn observations in the following structure:\n- WCAG_Level (A / AA / AAA)\n- WCAG_Criterion\n- Observation\n- Compliance_Status (Compliant / Potential Risk / Non-Compliant)\n- Evidence (from Accessibility DOM)\n\nACCESSIBILITY DOM:\n\nIgnored\n  Ignored\n    generic\n      generic\n        generic\n          image\n            url: http://leaftaps.com/opentaps_images/opentaps_logo.png\n\nheading \"Leaftaps Login\"\n  StaticText \"Leaftaps Login\"\n    InlineTextBox \"Leaftaps Login\"\n\nparagraph\n  LabelText\n    StaticText \"Username\"\n      InlineTextBox \"Username\"\n  textbox \"Username\"\n    focusable: true\n    settable: true\n    multiline: false\n    readonly: false\n    required: false\n\nparagraph\n  LabelText\n    StaticText \"Password\"\n      InlineTextBox \"Password\"\n  textbox \"Password\"\n    focusable: true\n    settable: true\n    multiline: false\n    readonly: false\n    required: false\n\nparagraph\n  button \"Login\"\n    focusable: true\n    StaticText \"Login\"\n      InlineTextBox \"Login\"\n\nStaticText \"Welcome to Leaftaps Application - TestLeaf environment for automation engineering learning.\"\n  InlineTextBox \"Welcome to Leaftaps Application - TestLeaf environment for automation engineering learning.\""
    }
  ]
}

```

### QA Notes
Added Testing Scripts
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains findings", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.choices[0].message.content).to.be.a('string');
});
```
![]("S07-success.jpg") 

- Model accepted and responds correctly
- Output follows required structure
- S07 passes successfully







