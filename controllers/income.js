const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
    console.log(
        "Testst"
    )
    const { title, amount, category, description, date } = req.body;
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        await income.save();
        res.status(200).json({ message: 'Income added well!' });
    } catch (error) {

        res.status(500).json({ message: 'There are some server errors!' });
        console.log("------------This is error ------------------");
        console.log(error);
    }

}


exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'There are some server errors!' });
        console.log("------------This is error ------------------");
        console.log(error);

    }
}


exports.deleteIncome = async (req, res) => {


    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: 'Income have been deleted succsessufuly' })
        })
        .catch((error) => {
            res.status(500).json({ message: 'There are some server errors!' });
            console.log("------------This is error ------------------");
            console.log(error);

        })
}