#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const word = answers.sentence.trim().split(" ");
// print the array of words to console
console.log(word);
// print the word count of the sentence to  the console
console.log(`Your sentence word count is ${word.length}`);
