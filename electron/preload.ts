const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('backend', {
  getRandom: () => ipcRenderer.invoke("get-random"),
  makeProb: () => ipcRenderer.send('make-prob'),
  fetchProb: () => ipcRenderer.invoke('fetch-prob'),
  onSerialData: (callback) => ipcRenderer.on('serial-data', (_, data) => callback(data)),
  getAllPorts: () => ipcRenderer.invoke('ports-list'),
  createPort: (path) => ipcRenderer.invoke('create-port', path),
  getConnections: () => ipcRenderer.invoke('connections')
})
