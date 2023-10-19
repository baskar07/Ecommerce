const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/database');
const cors = require('cors');
const app = express();

dotenv.config({path:path.join(__dirname,"config/.env")});

const PORT  = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(cors());

connectDatabase();

app.listen(5000,()=>{
    console.log(`server connect to the port:${PORT} and ${NODE_ENV} mode`)
})