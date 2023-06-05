
const express=require('express');
const { userRouter } = require('./controller/routes/user.routes.cjs');
const { connection } = require('./controller/db.cjs');
const cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("connected to databse")
        console.log(`server is running at port ${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})