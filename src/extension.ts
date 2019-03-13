import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.hackerNews', async () => {

		const panel = vscode.window.createWebviewPanel(
			'hackerNews', // Identifies the type of the webview. Used internally
			'Hacker News', // Title of the panel displayed to the user
			vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
			{
				enableScripts: true,
				enableFindWidget: true,
				retainContextWhenHidden: true,
			 }
		);
		

			let response = await axios.get('https://news.ycombinator.com');
			panel.webview.html = response.data;


	});

	context.subscriptions.push(disposable);


	
}

// this method is called when your extension is deactivated
export function deactivate() {}
