var mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Sal: Number
});
var EmployeeModel = mongoose.model('Employee', schema);
module.exports=EmployeeModel