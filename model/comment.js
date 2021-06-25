let mongoose = require('mongoose');
let Schema = mongoose.Schema
let commentSchema = new Schema({
    ownerId:{
        type:String,
        required:true
    },
    textContent: {
        type: String,
        required:true
    },
    created_date: {
        type: Date,
        default:Date.now
    }
})

postSchema.path('name').set(
    (inputString) => {
        return inputString[0].toUpperCase() + inputString.slice(1)
    }
)
module.exports = mongoose.model('FindPetPost', findPetPostSchema)