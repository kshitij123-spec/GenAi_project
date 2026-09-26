const mongoose = require("mongoose")



async function connectToDB() {

    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not configured. Add it to Backend/.env.")
        }

        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB