const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) => {
    console.log(
        "Testst"
    )
    const { title, amount, category, description, date } = req.body;
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        await expense.save();
        res.status(200).json({ message: 'expense added well!' });
    } catch (error) {

        res.status(500).json({ message: 'There are some server errors!' });
        console.log("------------This is error ------------------");
        console.log(error);
    }

}


exports.getExpenses = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'There are some server errors!' });
        console.log("------------This is error ------------------");
        console.log(error);

    }
}


exports.deleteExpense = async (req, res) => {


    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: 'Expense have been deleted succsessufuly' })
        })
        .catch((error) => {
            res.status(500).json({ message: 'There are some server errors!' });
            console.log("------------This is error ------------------");
            console.log(error);

        })
}