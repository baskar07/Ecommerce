const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con =>{
        console.log(`Database Connection host:${con.connection.host}`)
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = connectDatabase;