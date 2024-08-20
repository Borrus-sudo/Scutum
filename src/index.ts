import { defineExtension } from 'reactive-vscode'
import * as vscode from 'vscode'

const { activate, deactivate } = defineExtension(() => {
  vscode.window.showInformationMessage('Hello')
  vscode.workspace.onDidChangeTextDocument((e) => {
    console.log(JSON.stringify(e, null, 2))
  })

})

export { activate, deactivate }
