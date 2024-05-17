#!/usr/bin/env node

// variable for currencies

const currency :any =  {               //From USD to 


AfN: 71.33, // Afghan Afghani
BDT: 110.02, // Bangladeshi Taka
CNY: 7.25,  // Chinese yaun
EGP: 47.86,  //Egyptian Pound
IND: 83.40,  // Indian Rupee
PKR: 277.30, // Pakistani Rupee
USD: 1,  // Base Currency, USD Dollar.

};



import inquirer from "inquirer"


 let user_answer = await inquirer.prompt([

{
name: "from",
type: "list",
message: "Choose country would you like change from your currency.",
choices:["AfN", "BDT", "CNY", "EGP", "IND", "PKR", "USD"]

},



{ 
    name: "to",
    type: "list",
    message: "Choose country would you like change to your currency.",
    choices:["USD", "AED", "BRL", "CAD", "GBP", "PKR"]
    
},
    


{
    name: "amount",
    type: "number",
    message: "Enter your amount.",
   
    
    }


 ]);




let fromAmount  = currency[user_answer.from]  // exchange rate
let toAmount  = currency[user_answer.to]    // exchange rate
let amountOf = user_answer.amount
let baseAmount = amountOf / fromAmount 
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amountOf);



// It will be improving more than that.


