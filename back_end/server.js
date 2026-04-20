import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routers/foodRouters.js"


const app = express()
const port =4000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food", foodRouter);



app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})


mongodb+srv://zhoushijin:123456Zhou@cluster0.xlur9la.mongodb.net/?appName=Cluster0
