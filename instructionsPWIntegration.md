
Ask mode:
Read the Entire workspace and understand how I implemented the selenium Java

and which are all files will be impacted if  want to add playwright typescript






Agent mode:

Read the Entire workspace and understand how I implemented the selenium Java

I want to add the playwright typescript

1.Go to prompt.js and add 3 new templates

• PLAYWRIGHT_TYPESCRIPT_PAGE_ONLY
• PLAYWRIGHT_TYPESCRIPT_WITH_STEPS  
• (Potentially CUCUMBER_WITH_PLAYWRIGHT_TS_STEPS)

2.Go to chat.js and add 


Add isTypeScriptPlaywright() helper method (line ~598)
Modify getPromptKeys() (line ~551) to handle ts/playwright combinations
Update validation in addUnsupportedLanguageMessage() (line ~618)
Update loader text generation (line ~458) to recognize Playwright

3.Go to panel.html

update the logic to handle playwright typescript same like selenium java