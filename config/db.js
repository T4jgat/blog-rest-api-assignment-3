import mongoose from "mongoose";


class DB {
    connectDB = async () => {
        await mongoose
            .connect(process.env.DB_URL)
            .then(() => console.log("Connected to DB"))
            .catch(err => console.error(err))
    }

    findAll = async (err, posts) => {
        if (err) {
            console.error(err)
        }
    }
}

export default new DB()