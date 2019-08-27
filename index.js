const a = require('./a.js');

a.b.name = 'alice';
console.log('My name is: ' + require('./b.js').name);
delete require.cache[require.resolve('./b.js')]
console.log('Uh what happened? 🤕')
console.log('My name is: ' + require('./b.js').name);
console.log('Or was it: ' + a.b.name + '?');
