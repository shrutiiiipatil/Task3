const mongoose =require ("mongoose");
const {Schema}=mongoose;
const LoginSchema=new Schema({
   
    email:{
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
module.exports=mongoose.model('login',LoginSchema);

