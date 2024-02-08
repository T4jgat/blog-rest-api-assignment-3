import express from "express";
import cors from "cors";
import blogRouter from "./routes/BlogRouter.js"
import DB from "./config/db.js"

await DB.connectDB()
const app = new express()
const PORT = process.env.PORT

const corsOptions = ({
  origin: ["http://localhost:3001", "http://localhost:3000"],
})

app.use(express.json())
app.use(cors(corsOptions))

app.use("/blogs", blogRouter)


app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})
