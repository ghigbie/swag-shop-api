const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      ObjectId = mongoose.Schema.Types.ObjectId;

const wishList = new Schema({
    titile: {type: String, default: 'Awesome wish list'},
    products: [{type: ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('WhishList', wishList);