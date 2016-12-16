'use strict'

import { BrowserWindow } from 'electron';

export default class Main {
    private constructor() { }

    static mainWindow: Electron.BrowserWindow
    static application: Electron.App
    static BrowserWindow

    static pathToExtensions = "/Volumes/macOS\ HD/Users/martinmajewski/Library/Application\ Support/Google/Chrome/Profile\ 1/Extensions/";

    private static onWindowAllClosed() {
        Main.application.quit()
        // if (process.platform !== 'darwin'){
        //     Main.application.quit()
        // }
    }

    private static onClose() {
        // Dereference the window object.
        Main.mainWindow = null
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({ width: 800, height: 600 })

        // Add React Dev Tools
        // Main.BrowserWindow.addDevToolsExtension(Main.pathToExtensions + 'fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0');
        
        Main.mainWindow.webContents.openDevTools({ mode: "undocked" })

        Main.mainWindow.loadURL('file://' + __dirname + '/index.html')
        Main.mainWindow.on('closed', Main.onClose)
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the 
        // Electron.BrowserWindow into this function
        // so this class1 has no dependencies.  This
        // makes the code easier to write tests for

        Main.BrowserWindow = browserWindow

        Main.application = app

        Main.application.on('window-all-closed', Main.onWindowAllClosed)

        Main.application.on('ready', Main.onReady)
    }
}
