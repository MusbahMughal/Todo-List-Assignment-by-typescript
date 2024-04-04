import inquirer from "inquirer"
let todos =[]
let condition = ture;

while(condition){
let todoQuestion = await inquirer.prompt([
    {
        name:"FirstQuestion",
        type:"input",
        message:"What would you like to add in todo list"
    },
    {
        name:"SecondtQuestion",
        type:"confirm",
        message:"What would you like to add more in todo list"
    }

])
todos.push(todoQuestion.FirstQuestion);
console.log(todos)
condition = todoQuestion.SecondtQuestion}