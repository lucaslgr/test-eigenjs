const { app, BrowserWindow, ipcMain } = require('electron')
const {eig} = require('eigen');
// import eig from 'eigen'

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
  console.log('Here on generateMatrix');

  
  await eig.ready
  M = new eig.Matrix.random(10,10);
  M.print("M")
  // win.webContents.send('resultMatrix1', M.print("M"));
});

ipcMain.on('calcMatrix', async (event) => {
  console.log('Here on calcMatrix');


  await eig.ready
  M.inverse();
  M.print("M")
  // win.webContents.send('resultMatrix2', M.print("M"));
  eig.GC.flush();
});