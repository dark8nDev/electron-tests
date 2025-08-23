import { app, BrowserWindow, ipcMain } from 'electron/main'
import { fileURLToPath } from "url";
import path from 'node:path'

let mainWindow;
let probability;

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createWindow = () => {
    mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        // nodeIntegration: true, // for simplicity
        // contextIsolation: false,
        }
    })

    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.toggleDevTools()

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  ipcMain.handle('get-random', () => Math.random())
  ipcMain.on('make-prob', () => {probability = Math.random(); console.log(probability)})
  ipcMain.handle('fetch-prob', () => probability)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
