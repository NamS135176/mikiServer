let mongoose = require('mongoose');
let Schema = mongoose.Schema
let PetSchema = new Schema({
    accountName: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
    ,
    displayName: {
        type: String,
        default:""
    },
    birthDay:{
        type:String,
        default:""
    },
    sex:{
        type:Boolean,
        default:true
    }
    ,
    typePet:{
        type:String,
        default:""
    }
    ,
    owner:{
        name:{
            type:String,
            default:""
        },
        birthDay:{
            type:String,
            default:""
        },
        hobby:{
            type:String,
            default:""
        }
        ,
        description:{
            type:String,
            default:""
        }
    }
    ,
    description:{
        type:String,
        default:""
    }
    ,
    liked:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    },
    followed:{
        type:Array,
        default:[]
    }
    ,
    created_date: {
        type: Date,
        default:Date.now
    }
}, {collection:"Pet"})


module.exports = mongoose.model('Pet', PetSchema)