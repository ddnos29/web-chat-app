const { connect } = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
const connectDB = () => {
  console.log(process.env.MONGO_URL)
  return connect(`${process.env.MONGO_URL}`, options);
  // return connect("mongodb://localhost:27017/chat-w-me", options);
};

module.exports = connectDB;
