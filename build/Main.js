'use strict';
class Main {
    constructor() { }
    static onWindowAllClosed() {
        Main.application.quit();
        // if (process.platform !== 'darwin'){
        //     Main.application.quit()
        // }
    }
    static onClose() {
        // Dereference the window object.
        Main.mainWindow = null;
    }
    static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ width: 800, height: 600 });
        // Add React Dev Tools
        // Main.BrowserWindow.addDevToolsExtension(Main.pathToExtensions + 'fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0');
        Main.mainWindow.webContents.openDevTools({ mode: "undocked" });
        Main.mainWindow.loadURL('file://' + __dirname + '/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    }
    static main(app, browserWindow) {
        // we pass the Electron.App object and the 
        // Electron.BrowserWindow into this function
        // so this class1 has no dependencies.  This
        // makes the code easier to write tests for
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}
Main.pathToExtensions = "/Volumes/macOS\ HD/Users/martinmajewski/Library/Application\ Support/Google/Chrome/Profile\ 1/Extensions/";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
//# sourceMappingURL=Main.js.map