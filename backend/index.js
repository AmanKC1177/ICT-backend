var express = require("express")
const EmployeeModel = require("./model/empolyee")
require("./connection")
var app = express()

app.use(express.json())
app.get('/trial', (req, res) => {
    res.send("trial message")
})
app.get("/",(req,res)=>{
    res.send("its a employe App")
})
//add
app.post("/add", async(req, res) => {
  try {
    await EmployeeModel(req.body).save();
    res.send({ message: "Data send" });
  } catch (error) {
    console.log(error);
  }
});
//view
app.get("/view", async (req, res) => {
    try {
        var data = await EmployeeModel.find();
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})
//delete
app.delete("/delete/:id", async (req, res) => {
  try {
      var data = await EmployeeModel.findByIdAndDelete(req.params.id);
      res.send({ message: "Data deleted" });
    } catch (error) {
    console.log(error);
  }
});
//update
app.put("/edit/:id/:body", async (req, res) => {
  try {
      var data = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({ message: "Data updated" });
  } catch (error) {
    console.log(error);
  }
});
//port
app.listen(2046, () => {
  console.log("port is running");
});