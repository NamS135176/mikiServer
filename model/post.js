let mongoose = require('mongoose');
let Schema = mongoose.Schema
let postSchema = new Schema({
    ownerId:{
        type:String,
        required:true
    }
    ,
    imgUrl: {
        type: String,
        required:true
    },
    textDescription: {
        type: String,
        default:""
    },
    tags:{
        type:Array,
        default:[]
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
module.exports = mongoose.model('Post', postSchema)