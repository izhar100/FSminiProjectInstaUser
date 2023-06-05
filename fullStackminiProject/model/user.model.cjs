const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    dob:String,
    role:String,
    location:String,
    password:String,   
},{
    versionKey:false
})

const userModel=mongoose.model("instauser",userSchema)

module.exports={
    userModel
}