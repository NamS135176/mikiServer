let mongoose = require('mongoose');
let Schema = mongoose.Schema
let findPetPostSchema = new Schema({
    ownerId:{
        type:String,
        required:true
    },
    imgUrl: {
        type: String,
        required:true
    },
    textDescription: {
        type: String,
        default:""
    },
    location:{
        type:String,
        default:""
    },
    liked:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    }
    ,
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