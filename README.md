# ding-dong

node.js lib for Fast AGI (Asterisk Gateway Interface) server

[Fork of ding-dong](http://github.com/antirek/ding-dong)


Use ding-dong
=============

[voicer](http://github.com/antirek/voicer) - AGI voice recognizer for Asterisk (use Yandex and Google speech recognizers)

[lcr-finder](http://github.com/antirek/lcr-finder) - least cost router for Asterisk


## Install

```
npm install pcm-solucoes/ding-dong-pcm

```

`````javascript

const AGIServer = require('ding-dong-pcm');

const handler = async (context) => {
  var variable = await context.onEvent('variables')
  console.log(variable)   
  await context.setVariable('RECOGNITION_RESULT', 'I\'m your father, Luc');
  await context.end();
};

const agi = new AGIServer(handler, {
  debug: true, 
  port: 3000
});
agi.init()

`````

### Add to Asterisk extensions.conf

`````
[default]
exten = > 1000,1,AGI(agi://localhost:3000)
`````

## API 

see [API.md](API.md)


## Links

[Asterisk AGI](https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+AGI+Commands)