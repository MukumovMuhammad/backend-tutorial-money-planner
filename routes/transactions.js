const router = require('express').Router();

const { addIncome, deleteIncome, getIncomes } = require('../controllers/income.js');
const { addExpense, deleteExpense, getExpenses } = require('../controllers/expense.js');

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)


router.post('/add-expense', addExpense)
    .get('/get-expense', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)



module.exports = router;