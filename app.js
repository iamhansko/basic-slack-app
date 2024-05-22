/* eslint-disable max-len */
const { App, LogLevel } = require('@slack/bolt');
const { FileInstallationStore } = require('@slack/oauth');
const { registerListeners } = require('./listeners');

(async () => {
  // Create Bolt App
  const app = new App({
    appToken: process.env.SLACK_APP_TOKEN,
    port: process.env.PORT || 9000,
    logLevel: LogLevel.ERROR,
    // logLevel: LogLevel.DEBUG,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET,
    scopes: ['chat:write', 'app_mentions:read', 'channels:join'],
    stateSecret: 'made-by-hyunsuko',
    installerOptions: {
      stateVerification: false,
    },
    installationStore: new FileInstallationStore(),
  });

  // Register Listeners
  registerListeners(app);

  // Start Bolt App
  try {
    await app.start();
    console.log('⚡️ Bolt app is running! ⚡️');
  } catch (error) {
    console.error('Unable to start App', error);
  }
})();
