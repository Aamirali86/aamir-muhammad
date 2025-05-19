
# Setting Up Google Sheets Integration

To connect your contact form to Google Sheets, follow these steps:

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet
2. Name your spreadsheet (e.g., "Portfolio Contact Form Submissions")
3. Add the following headers in the first row:
   - Timestamp
   - Name
   - Email
   - Subject
   - Message

## 2. Set Up Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Replace the default code with the following:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the script (click the disk icon or press Ctrl+S)
4. Click on "Deploy" > "New deployment"
5. Select type: "Web app"
6. Set the following options:
   - Execute as: "Me"
   - Who has access: "Anyone"
7. Click "Deploy"
8. Copy the Web app URL that is generated

## 3. Update Your Contact Component

1. Open `src/components/Contact.tsx`
2. Replace `YOUR_GOOGLE_SCRIPT_WEB_APP_URL` with the URL you copied in step 8 above

## Important Notes

- Your form is now configured to submit data to Google Sheets
- The Google Apps Script Web App URL is sensitive, don't share it publicly
- For security reasons, you might want to add captcha or other verification methods
- You can modify the Google Apps Script to add additional functionality like email notifications
- The "no-cors" mode is used to handle cross-origin requests, which means you won't get detailed error information

## Troubleshooting

If submissions are not appearing in your Google Sheet:
1. Check the console for any JavaScript errors
2. Verify your Web App URL is correctly entered in the Contact component
3. Make sure your Google Sheet has the correct column headers
4. Check that your Google Apps Script is properly deployed as a Web App
