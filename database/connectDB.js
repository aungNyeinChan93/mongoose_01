import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async (DATABASE_URL, cb) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log(chalk.bgGreenBright(`${DATABASE_URL} was connected!`))
        cb();
    } catch (error) {
        console.error(error)
    }
}

export default connectDB;