const AGIServer = require('./../lib/index');

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