'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

electron.crashReporter.start();

let mainWindow;

app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1200, height: 900});

  if(process.env.HOT) {
  	mainWindow.loadUrl(mainWindow.loadURL(`file://${__dirname}/app/hot-dev-app.html`));
  } else {
  	mainWindow.loadUrl(`file://${__dirname}/index.html`);
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
})
