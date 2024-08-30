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

module.exports = router;