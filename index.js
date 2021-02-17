const { app, BrowserWindow, ipcMain } = require('electron')
const eig = require('eigen');

let win, M;
function createWindow() {
    win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('generateMatrix', async (event) => {
  await eig.ready
  M = new eig.Matrix.random(10,10);
  M.print("M")
  eig.GC.flush();
});

ipcMain.on('calcMatrix', async (event) => {
  await eig.ready
  M = new eig.Matrix.random(10,10);
  M.print("M");
  eig.GC.flush();
});