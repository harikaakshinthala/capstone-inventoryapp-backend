const Store = require("../models/store.js");

// Add Store
const addStore = async (req, res) => {
    console.log(req.body)
    try{
  const addStore =  new Store({
    userID : req.body.userId,
    name: req.body.name,
    category: req.body.category,
    address: req.body.address,
    city: req.body.city,
    image: req.body.image
  });

 await  addStore.save();
      res.status(200).json(addStore)
    }
    catch(error) {
      res.status(402).send(error);
    };
};

// Get All Stores
const getAllStores = async (req, res) => {
  const findAllStores = await Store.find({"userID": req.params.userID}).sort({ _id: -1 }); // -1 for descending;
  res.json(findAllStores);
};

module.exports = { addStore, getAllStores };
