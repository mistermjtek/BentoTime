'use strict';
var context = require.context('./app', true, /tests.jsx?$/);
context.keys().forEach(context);
