const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/connectDB');
const articleRouter=require('./routes/articleRoutes');

const app=express();//initialization
dotenv.config();//for accessing .env files

//to establish mongoDB connection 
connectDB(); // its  huMONGOus data base  hence MONGO

//middleware
app.use(express.json());




app.use('/api/articles/',articleRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to the Articles REST API");
});


app.listen(process.env.PORT,()=>{
    console.log("App is running on the port ",process.env.PORT);
})