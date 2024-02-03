const mongoose =require ("mongoose");
const {Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ipAddress:{type:String},
    os: {type:String}, 
    browser: {type:String},
    date:{
        type:Date,
        default:Date.now

    }
    
},{timestamps:true});
module.exports=mongoose.model('user',UserSchema);