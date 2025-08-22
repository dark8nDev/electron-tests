const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

let mainWindow;
let secondWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        // nodeIntegration: true, // for simplicity
        // contextIsolation: false,
        }
    })

    mainWindow.loadURL('http://localhost:5173')

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function createSecondWindow() {
  if (secondWindow) {
    secondWindow.focus();
    return;
  }

  secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
    title: 'Second Window',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  secondWindow.loadFile('second.html');

  secondWindow.on('closed', () => {
    secondWindow = null;
  });
}


app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on('open-second-window', () => {
  createSecondWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
