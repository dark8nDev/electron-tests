const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('backend', {
  getRandom: () => ipcRenderer.invoke("get-random"),
  makeProb: () => ipcRenderer.send('make-prob'),
  fetchProb: () => ipcRenderer.invoke('fetch-prob')
})
