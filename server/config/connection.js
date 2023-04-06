const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://lukemickan21:DKaXXjVmymncETLe@theeggcluster.l1cc94l.mongodb.net/?retryWrites=true&w=majorityretryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

