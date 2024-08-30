const mongoose = require('mongoose');

const nftMintingSchema = new mongoose.Schema({
    walletAddress: {type: String},
    nftId: {type: String},
    quantity: {type: String},
    fileUrl: {type: String},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    {timestamps: true
})
const NftMinting = mongoose.model('NftMinting', nftMintingSchema);

module.exports = NftMinting;