import { Command } from '@oclif/core';
import * as inquirer from 'inquirer';

export class MyCommand extends Command {
  static description = 'generate user token for apple music api';

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
