const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connection to mongodb successful");
    }
    catch (err) {
        console.log("Error : ", err.message);
        process.exit(1);
    }
};
module.exports = connectDB;