const express = require('express');
const NftMinting = require('../models/nftMinting');
const router = express.Router();


router.post("/create-nft-minting", async (req, res) => {
    try{
       const response  = await NftMinting.create(req.body);
       res.status(201).json({ message: 'Nft Minting successfully', response });
    }catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
})
router.get("/get-nft-minting/:id", async (req, res) => {
  try{
     const response  = await NftMinting.find({userId: req.params.id});
     res.status(201).json({ message: 'Nft Minting Get Successfully', response });
  }catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
})

module.exports = router;