"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = ture;
while (condition) {
    var todoQuestion = await inquirer_1.default.prompt([
        {
            name: "FirstQuestion",
            type: "input",
            message: "What would you like to add in todo list"
        },
        {
            name: "SecondtQuestion",
            type: "confirm",
            message: "What would you like to add more in todo list"
        }
    ]);
    todos.push(todoQuestion.FirstQuestion);
    console.log(todos);
    condition = todoQuestion.SecondtQuestion;
}
