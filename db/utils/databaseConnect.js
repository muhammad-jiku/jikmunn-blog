//  external import
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASS}@cluster0.41e9axg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const databaseConnect = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // console.log('DB connected!!');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConnect;
