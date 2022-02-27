const prompts = require('prompts');

prompts.inject([ '@terkelg', ['#ff0000', '#0000ff'] ]);

(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'twitter',
      message: `What's your twitter handle?`
    },
    {
      type: 'multiselect',
      name: 'color',
      message: 'Pick colors',
      choices: [
        { title: 'Red', value: '#ff0000' },
        { title: 'Green', value: '#00ff00' },
        { title: 'Blue', value: '#0000ff' }
      ],
    }
  ]);

  // => { twitter: 'terkelg', color: [ '#ff0000', '#0000ff' ] }
})();