const mongoose = require('mongoose');

const nftMintingSchema = new mongoose.Schema({
    walletAddress: {type: String},
    nftId: {type: String},
    quantity: {type: String},
    fileUrl: {type: String},
    fileType: {type: String},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    coverImage: {type: String},
    name: {type: String},
    desc : {type: String}
    },
    {timestamps: true
})
const NftMinting = mongoose.model('NftMinting', nftMintingSchema);

module.exports = NftMinting;