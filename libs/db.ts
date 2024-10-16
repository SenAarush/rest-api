import mongoose, {ConnectOptions} from "mongoose"

const dbOptions: ConnectOptions= {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "", dbOptions)
        console.log("DB connected")
    } catch (error) {
        console.error("DB connection error", error)
    }
}

export default connectDB