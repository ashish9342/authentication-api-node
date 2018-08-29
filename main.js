// const dialogflow = require('dialogflow');
// const LANGUAGE_CODE = 'en-US'
// //
//
const projectId = 'dexter-47332'; //https://dialogflow.com/docs/agents#settings
const sessionId = '981dbc33-7c54-5419-2cce-edf10efd2170';
const query = 'adhaar number please';
const languageCode = 'en-US';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const keys = require('./config/keys');
let config = {
  credentials: {
    private_key: keys.dialogflow.privateKey,
    client_email: keys.dialogflow.clientEmail
  }
}
const sessionClient = new dialogflow.SessionsClient(config);

// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// The text query request.
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: query,
      languageCode: languageCode,
    },
  },
};

// Send request and log result
sessionClient
  .detectIntent(request)
  .then(responses => {
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
