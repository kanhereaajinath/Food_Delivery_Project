const userModel =require("../model/UserModel.js")
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')
const validator=require('validator')


//login user

const loginUser= async (req,res)=>{
    const {email, password}=req.body
    try {
        
        const user= await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"user Does not Exist"})

        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token =createToken(user._id)
        res.json({success:true,token})

    } catch (error) {

        console.log(error)
        res.json({success:false ,message:"Error"})
        
    }

}

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user
const registerUser= async (req,res)=>{
    const {name,password,email}=req.body;

    try {
        // checking is user alredy exist 
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success:false, message:"User alredy exist"})
        }
        //validating email format and strong password 
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please Enter a Valid Email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"please Enter Strong password  "})
        }
        // Hasing user password 
        const salt=await bcrypt.genSalt(10)
        const hashPassword =await bcrypt.hash(password,salt)

        const newUser= new userModel({
            name:name,
            email:email,
            password:hashPassword
        })
        

      const user= await newUser.save()
      const token=createToken(user._id)
      res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

module.exports = {
    loginUser,
    registerUser
  };