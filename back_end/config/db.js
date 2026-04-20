import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://zhoushijin:123456Zhou@cluster0.xlur9la.mongodb.net/food-delivery").then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
}