const mongoose = require('mongoose');

const connection = "mongodb+srv://lukemickan21:DKaXXjVmymncETLe@theeggcluster.l1cc94l.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

module.exports = mongoose.connection;
