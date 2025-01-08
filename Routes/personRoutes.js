const express = require("express");
const router = express.Router();
const person = require("../Models/Person");

router.get("/", async (req, res) => {
  try {
    const personData = await person.find();
    console.log("Data Fetched");
    res.status(200).json(personData);
  } catch (err) {
    console.log("Error Fetching Data");
    res.status(500).json(err, "Internal Server error");
  }
});

router.get("/:roleData", async (req, res) => {
  try {
    const rd = req.params.roleData;
    if (rd == "OWNER" || rd == "CHEF" || rd == "WAITER") {
      const response = await person.find({ role: rd });
      console.log("Role Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json(error, "Invalid Input");
    }
  } catch (err) {
    console.log("Error Fetching Role Data");
    res.status(500).json(err, "Error Fetching the role");
  }
});


router.post("/", async (req, res) => {
  try {
    const newClient = req.body;
    const newPerson = new person(newClient);
    const savePerson = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(savePerson);
  } catch (err) {
    console.log("Error Saving Data");
    res.status(500).json(err, "Internal Server error");
  }
});

router.put("/:unique", async(req,res)=>{
  try{
    const person_id=req.params.unique;

    const updateData=req.body;

    const response=await person.findOneAndUpdate({unique_id:person_id},updateData,{
      new: true,
      runValidators:true,
    });
    res.status(200).json(response);
    console.log("Data Updated")

    if(!response){
      res.status(404).json(error, "Person not found");
    }
  }
  catch(err){
    console.log("Error Saving Data");
    res.status(500).json(err, "Internal Server error");
  }
});

router.delete("/:del_id",async(req,res)=>{
  try{
    const person_id=req.params.del_id;
    // const deleteData=req.body;
    const response=await person.findOneAndDelete({unique_id:person_id});
    res.status(200).json(response);
    console.log("Data Deleted");
    if(!response){
      res.status(404).json("Invalid ID");
    }
  }
  catch(err){
    console.log("Error Deleting Data");
    res.status(500).json(err, "Internal Server error");
  }
})
//comment

module.exports=router;