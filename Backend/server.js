const mongoose = require ('mongoose');
const dotenv = require ('dotenv');

dotenv.config({path: "./config.env"});


const DB = process.env.MONGO_DB_URL.replace("<Password>", process.env.MONGO_DB_PASSWORD);
const app = require('./app.js');

mongoose.connect(DB).then(() => {
    console.log("DB connection successful!");
}).catch((err) => {
    console.log("DB connection failed!", err);
})

const port = process.env.PORT || 3000;  
const server = app.listen(port, ()=> {
    console.log(`App running on port ${port}...`);
})