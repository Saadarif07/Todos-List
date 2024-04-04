#! /usr/bin/env node
import inquirer from "inquirer";

let toDos = [];
let conditions = true;

console.log("\n \t Welcome to Saadarif - Todo-List Application\n");

while(conditions){
    let addTask = await inquirer.prompt([{
        name: "task",
        type: "input",
        message: "Enter your New Task :"
    }]);
    toDos.push(addTask.task);
    console.log(`${addTask.task} Task Added in Todo-List successfully`);

    let addMoreTask = await inquirer.prompt([{
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more task?",
        default: "False"
    }]);
    conditions = addMoreTask.addmore
}
console.log("Your updated Todo-List:" , toDos);
