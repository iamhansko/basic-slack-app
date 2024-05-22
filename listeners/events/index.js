const Hangul = require('hangul-js');

module.exports.register = (app) => {
  app.event('app_mention', async ({ event, context, say }) => {
    const { botUserId } = context;
    const textInput = event.text.replaceAll(`<@${botUserId}> `, '');
    const temp = Hangul.disassemble(textInput).map((item) => item.replace('ㅏ', 'ㅡ').replace('ㅜ', 'ㅡ'));
    const textOutput = Hangul.assemble(temp);
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 50);

    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `${randomNumber1 >= 30 ? '에베베베베베 ' : ''}${textOutput}${randomNumber2 >= 30 ? '~' : ''}`,
          },
        },
      ],
      // thread_ts: event.event_ts,
    });
  });
};
