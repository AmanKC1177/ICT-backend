var mongoose = require('mongoose');
  mongoose.connect("mongodb+srv://amankc10:amankc1177@cluster0.x54p7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
