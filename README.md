To make this your own do the following

1. create a Google form and create a spreadsheet from the form

2. The form must have these variables in row 1, do NOT make these in Google forms, only in Google sheets
<img width="1123" height="69" alt="image" src="https://github.com/user-attachments/assets/a8e40937-ae39-492f-8020-7dcd98bbac80" />
link to the sheet to copy: https://docs.google.com/spreadsheets/d/1uEv7XxCZSaWlbBMiE0kKRyZrOnXh4pPy3gvi-oAnwnY/edit?usp=sharing

3. change the end of the elksheet link
<img width="783" height="221" alt="Screenshot 2026-08-11 11 02 49 AM" src="https://github.com/user-attachments/assets/3020b540-e8a8-49bf-8839-706f2c3567ef" />

(email redaction) 
1. create the Google apps script
<img width="783" height="333" alt="image" src="https://github.com/user-attachments/assets/3aac30de-9882-4a4e-bee9-3f67e55fa2ac" />

2. create a trigger
<img width="1046" height="185" alt="image" src="https://github.com/user-attachments/assets/88c34e50-450f-40d5-9e0a-a547d18a893f" />

(profane filter)
1. go to E2 (under flagged bool)
2. put the following function
`=ARRAYFORMULA(
  IF(B2:B101<>"",
     IF(REGEXMATCH(LOWER(B2:B1001), TEXTJOIN("|", TRUE, LOWER('PROFANE WORDS'!A$1:A))), TRUE, FALSE),
     "")
)
`
