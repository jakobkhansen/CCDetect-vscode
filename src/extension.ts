// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require("path");
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from "vscode-languageclient";

const main: string = "App";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  var command = vscode.commands.registerCommand("ccdetect.startServer", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World!");
  });

  context.subscriptions.push(command);

  // Get the java home from the process environment.
  const { JAVA_HOME } = process.env;

  // const JAVA_HOME = "/usr/lib/jvm/java-11-openjdk";

  console.log(`Using java from JAVA_HOME: ${JAVA_HOME}`);
  // If java home is available continue.
  if (JAVA_HOME) {
    vscode.window.showInformationMessage("hello");
    // Java execution path.
    let excecutable: string = path.join(JAVA_HOME, "bin", "java");

    // path to the launcher.jar
    let classPath = path.join(__dirname, "..", "launcher", "launcher.jar");
    vscode.window.showInformationMessage(classPath);
    const args: string[] = ["-Xmx8G", "-jar", classPath];

    // Set the server options
    // -- java execution path
    // -- argument to be pass when executing the java command
    let serverOptions: ServerOptions = {
      command: excecutable,
      args: [...args],
      options: {},
    };

    // Options to control the language client
    let clientOptions: LanguageClientOptions = {
      // Register the server for plain text documents
      documentSelector: [{ scheme: "file", language: "java" }],
      initializationOptions: {
        language: "java",
        fragment_query: "(method_declaration) @method",
        clone_token_threshold: 100,
        ignore_nodes: [],
        extra_nodes: [],
        dynamic_detection: true,
        update_on_save: true,
        // REMEMBER TO COMPILE
      },
    };

    // Create the language client and start the client.
    let disposable = new LanguageClient(
      "CCDetect",
      "CCDetect Language Server",
      serverOptions,
      clientOptions
    ).start();

    // Disposables to remove on deactivation.
    context.subscriptions.push(disposable);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
