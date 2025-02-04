const mongoose = require('mongoose');


function connectToDb(){
    mongoose.connect(porecess.env.DB_CONNECT, { useNewUrlParser: true })
        .then(()=> console.log('connected to DB'))
        .catch((err)=> console.log('error connecting to DB: ', err))
}


module.exports = connectToDb