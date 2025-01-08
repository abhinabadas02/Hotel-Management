const express = require("express");
const router = express.Router();
const menu = require("../Models/Menu");

router.get("/", async (req, res) => {
  try {
    const resData = await menu.find();
    console.log("Menu Item Fetched");
    res.status(200).json(resData);
  } catch (err) {
    console.log("Eror Fetching Data");
    res.status(500).json(err, "Error Fetching the Data");
  }
});

router.get("/:tasteData", async (req, res) => {
  try {
    const tasteData = req.params.tasteData;
    if (tasteData == "sour" || tasteData == "sweet" || tasteData == "spicy") {
      const response = await menu.find({ taste: tasteData });
      console.log("Data Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json(error, "Invalid Input");
    }
  } catch (err) {
    console.log("Error Fetching Taste Data");
    res.status(500).json(err, "Error Fetching the Taste");
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newResData = new menu(data);
    const resDataSave = await newResData.save();
    console.log("Data Saved");
    res.status(200).json(resDataSave);
  } catch (err) {
    console.log("Error Saving Restaurant Data");
    res.status(500).json(err, "Internal server error");
  }
});

router.put("/:menuId", async(req,res)=>{
  try{
    const data_id=req.params.menuId;

    const menuData=req.body;

    const response=await menu.findOneAndUpdate({menu_id:data_id},menuData,{
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
    const data_id=req.params.del_id;
    const response=await menu.findOneAndDelete({menu_id:data_id});
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

module.exports = router;
