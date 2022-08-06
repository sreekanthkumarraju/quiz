
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const router = require('./routes/routes')

const app=express()


app.use(cors())
app.use(express.json())
const port=5000;
//router

app.use('/',router)

const URI="mongodb+srv://quizapp:TMyuMdbDPnQAO6G6@cluster0.clixn.mongodb.net/test"

mongoose.connect(URI).then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`)
    })
}).catch((error)=>{
   console.log(error)
})
