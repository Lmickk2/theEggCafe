const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://lukemickan21:DKaXXjVmymncETLe@theeggcluster.l1cc94l.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

