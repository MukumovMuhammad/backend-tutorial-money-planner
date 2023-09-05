const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.mongo_URL);
        console.log('db is connected well !');
    } catch (error) {

        console.log("db is not connected Error -> ", error);

    }
}

module.exports = { db };