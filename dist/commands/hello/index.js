"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCommand = void 0;
const core_1 = require("@oclif/core");
const inquirer = require("inquirer");
class MyCommand extends core_1.Command {
    async run() {
        const questions = await inquirer.prompt([
            {
                type: 'input',
                name: 'developerToken',
                message: "What's developer token",
            },
        ]);
        console.log(questions.developerToken);
    }
}
exports.MyCommand = MyCommand;
MyCommand.description = 'generate user token for apple music api';
