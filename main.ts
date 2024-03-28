#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 10000; //Dollar
// console.log(Your Current Balance is ${myBalance});

let pin = 2345;
let answerPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if (answerPin.pin === pin) {
    console.log("Correct Pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operations == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "How much do you want to withdraw?",
                type: "number"

            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`"Your remaining Balance Is: ${myBalance}"`);

        }
        else {
            console.log("Insufficient Balance");

        };
    }
    else if (operationAns.operations == "Check Balance") {
        console.log(`Your Balance Is: $${myBalance}`);

    }
    else if (operationAns.operations == "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "How much amount you want to fast cash: ",
                type: "list",
                choices: [
                    1000, 2000, 4000, 10000
                ]
            }
        ])
        myBalance -= fastCashAns.fastCash
        console.log("You have successfully completed your transaction.\n");

        console.log(`Your remaining Balance is: ${myBalance}`);

    }

}
else {
    console.log("Incorrect Pin");

};

console.log("Thank You for choosing" + "\n" + "\t"+"HBL")