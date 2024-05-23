const Hangul = require('hangul-js');

module.exports.register = (app) => {
  app.event('app_mention', async ({ event, context, say }) => {
    const { botUserId } = context;
    const textInput = event.text.replaceAll(`<@${botUserId}> `, '');
    const textTransform = Hangul.disassemble(textInput).map((item) => item.replace('ㅏ', 'ㅡ').replace('ㅜ', 'ㅡ'));
    const textOutput = Hangul.assemble(textTransform);

    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `${textOutput}${Math.floor(Math.random() * 5) >= 3 ? '~' : ''}`,
          },
        },
      ],
      // thread_ts: event.event_ts,
    });
  });
};
