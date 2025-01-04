const dbConnect = require('./config/blogs');
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const app = express();
//import routes for Todo API
const blogRoutes = require("./routes/blogs")

//load config from env file
const PORT = process.env.PORT || 4000;

//middleware to parse req body
app.use(express.json());


app.use(cors({
    origin: [process.env.FE_URL],
    methods: "POST,GET,PUT,DELETE",
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',

}));



app.use("/api/v1",blogRoutes);



app.listen(PORT,()=>{
    console.log("Server started successfully at "+PORT);
});

app.get("/",(req,res)=>{
    res.json("Hello")
})

dbConnect();
