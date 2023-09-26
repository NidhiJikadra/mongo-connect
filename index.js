const express = require("express");
const db = require("./db");
const student = require("./student");
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  let data = await student.create(req.body);
  res.status(201).send(data);
});

app.get("/",async(req,res)=>{
    let data = await student.find()
    res.status(200).send(data)
})

app.listen(8090, () => {
  console.log("Server is listening on port 8090....");
});