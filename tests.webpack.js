// Preprocessor file for Phantom

// ES5 shims for Phantom
require('core-js/es5');

// Find our test files
var context = require.context('./test', true, /Spec\.js$/);
context.keys().forEach(context);
