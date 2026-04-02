// console.log("Expanse Tracker.");
/*
Application should run from the command line and should have the following features:

Users can add an expense with a description and amount.

Users can update an expense.

Users can delete an expense.

Users can view all expenses.

Users can view a summary of all expenses.

Users can view a summary of expenses for a specific month (of current year).

Here are some additional features that you can add to the application:

Add expense categories and allow users to filter expenses by category.

Allow users to set a budget for each month and show a warning when the user exceeds the budget.

Allow users to export expenses to a CSV file.

The list of commands and their expected output is shown below:

bash

$ expense-tracker add --description "Lunch" --amount 20
# Expense added successfully (ID: 1)
$ expense-tracker add --description "Dinner" --amount 10
# Expense added successfully (ID: 2)
$ expense-tracker list
# ID  Date       Description  Amount
# 1   2024-08-06  Lunch        $20
# 2   2024-08-06  Dinner       $10
$ expense-tracker summary
# Total expenses: $30
$ expense-tracker delete --id 2
# Expense deleted successfully
$ expense-tracker summary
# Total expenses: $20
$ expense-tracker summary --month 8
# Total expenses for August: $20

*/
const fs = require("fs");
const fileData = require('./expense.txt')
console.log(typeof(fileData));
console.log(fileData);



// let expanse_list
fs.readFile("expense.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  const expanse_list = data ? data.toString() : [];
  console.log(expanse_list);
  
  console.log(typeof(expanse_list));

  const args = process.argv.slice(2);
  const expense_category = {
    add: add_expanse,
    update: update_expense,
    delete: delete_expanse,
    list: listAll_expanse,
    summary: summaryOf_expanse,
  };

  expense_category[args[0]]();
//   console.log(expense_category[args[0]]);
  


  function add_expanse() {
    // expense-tracker add --description "Lunch" --amount 20
    const description = args[2];
    const amount = args[4];

    if (!description || !amount) {
      console.log("please provide the description and amount to add expense.");
      return;
    }
    const date = new Date();

    const expanse = {
      "ID": Date.now,
      "Date": date,
      "Description": description,
      "Amount": amount,
    };
    // console.log(typeof(expanse_list));
    
    // expanse_list.push(expanse);
    // console.log(`Expense added successfully (ID: ${expanse.ID})`);
  }

  function update_expense() {
    const id = args[2];
    if (!id) {
      console.log("Expanse id is required to update expense.");
      return;
    }
    let description = "";
    let amount = -1;
    if (args.length == 7) {
      if (args[3].slice(2) == description) {
        description = args[4];
        amount = args[6];
      } else {
        description = args[6];
        amount = args[4];
      }
    }
    if (args[3].slice(2) == description && args.length == 5) {
      description = args[4];
    }

    if (args[3].slice(2) == amount && args.length == 5) {
      amount = args[4];
    }

    const expense = expanse_list.find((item) => {
      return (item.ID = id);
    });

    if (!expense) {
      console.log("Expense with this id is not existed.Please enter valid id.");
      return;
    }
    expanse_list.forEach((index, item, arr) => {
      if (item.ID == id) {
        item.Description = description != "" ? description : item.Description;
        item.Amount = amount != -1 ? amount : item.Amount;
        arr[index] = item;
        console.log(`Expense updated successfully (expense: ${arr[index]})`);
      }
    });

    // const date = new Date()

    // const expanse = {
    //     "ID":1,
    //     "Date":date,
    //     "Description":description,
    //     "Amount":amount
    // }

    // expanse_list.push(expanse)
  }

  function delete_expanse() {
    const id = args[2];
    if (!id) {
      console.log("Expanse id is required to delete  expense.");
      return;
    }
    const filtered_Expense = expanse_list.filter((item) => {
      return item.ID != id;
    });

    if (expanse_list.length == filtered_Expense.length) {
      console.log("Expense with this id is not existed.Please enter valid id.");
      return;
    }

    expanse_list = filtered_Expense;
  }

  function listAll_expanse() {
    console.log("# ID  Date          Description  Amount");

    expanse_list.forEach((item) => {
      console.log(
        `${item.ID}  ${item.Date}  ${item.Description}  $${item.Amount}`,
      );
    });
  }

  function summaryOf_expanse() {
    let sum = 0;
    expanse_list.forEach((item) => {
      sum += item.Amount;
    });

    console.log(`Total expenses: $${sum}`);
  }

//   fs.writeFile('expense.txt',JSON.stringify(expanse_list, null, 2),(err)=>{
//     if (err) {
//         return console.error(err);
//     }
//   })
  
});

// console.log(expanse_list);

// console.log(args[2]);
// console.log(typeof(args));

const dt = new Date();
// console.log(dt);
