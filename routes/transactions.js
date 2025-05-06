const express = require('express');
const incomeController = require('../controllers/incomeController');
const expenseController = require('../controllers/expenseController');
const transactionRouter = express.Router();

transactionRouter.post('/add-income',incomeController.addIncome);
transactionRouter.get("/get-incomes", incomeController.getIncomes)
transactionRouter.delete("/delete-income/:id" , incomeController.deleteIncome)
transactionRouter.post('/add-expense',expenseController.addExpense);
transactionRouter.get("/get-expenses", expenseController.getExpense)
transactionRouter.delete("/delete-expense/:id" , expenseController.deleteExpense)

module.exports = transactionRouter;