const { logger } = require("../middleware/userLogger.middleware.cjs")

const { userModel }=require("../../model/user.model.cjs");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express=require("express")
const userRouter=express.Router()

userRouter.post("/register",logger,async(req,res)=>{
    try {
       const user=req.body;
       const email=user.email
       const existingUser=await userModel.find({email})
       if(existingUser.length>0){
        return res.status(400).json({message:"user already exists please use different email"})
       }
       bcrypt.hash(user.password, 5, async(err, hash)=>{
        // Store hash in your password DB.
         if(err){
            return res.status(400).json({error:err})
         }else{
            const userAdding=userModel({...user,password:hash})
            await userAdding.save()
            res.status(200).json({message:"user added successfully",success:true})
         }
       })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

userRouter.post("/login",logger,async(req,res)=>{
    try {
        const user=req.body;
        const email=user.email;
        const password=user.password
        const existingUser=await userModel.find({email})
        if(existingUser.length>0){
            bcrypt.compare(password, existingUser[0].password,(err, result)=>{
                // result == true
                if(result){
                   const token = jwt.sign({ login: 'login' }, 'loginToken',{expiresIn:"10h"});
                   res.status(200).json({message:"Login Success",role:existingUser[0].role,token:token})
                }else{
                    res.status(400).json({message:"Password did not match"})
                }
            });
        }else{
            res.status(400).json({message:"user does not exist please signup first"})
        }

    } catch (error) {
        
    }
})

userRouter.get('/',logger,async(req,res)=>{
    try {
        const user=await userModel.find()
        res.status(200).json({user:user})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

userRouter.delete("/delete/:id",logger,async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id)
        await userModel.findByIdAndDelete({_id:id})
        const user=await userModel.find()
        res.status(200).json({message:"User deleted",user:user})
    } catch (error) {
        res.status(400).json({error:error,message:"Something went wrong"})
    }
})
userRouter.patch("/update/:id",logger,async(req,res)=>{
    try {
        const {id}=req.params;
        await userModel.findByIdAndUpdate({_id:id},req.body)
        const user=await userModel.find()
        res.status(200).json({message:"User updated",user:user})
    } catch (error) {
        res.status(400).json({error:error,message:"Something went wrong"})
    }
})


module.exports={
    userRouter
}