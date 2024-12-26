import user from "../Models/UserModel.js";
import expressAsyncHandler from "express-async-handler";
import generatetoken from "../utiles/Generatetoken.js";

// create new user
export const createUser = expressAsyncHandler(async(req,res) =>{
    // console.log(req.body)
    const{name,email,password} = req.body
    
    // check the input fields
    if(!name){
        res.status(400);
        throw new Error("please enter your name")
    }else if(!email){
        res.status(400);
        throw new Error("please enter your email")
    }else if(!password){
        res.status(400);
        throw new Error("please enter your password")
    };

    // check password length
    if(password.length < 8){
        res.status(400)
        throw new Error ("password must be atleast 8 characters")
    }

    //email validation 
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailRegex.test(email)){
        res.status(400);
        throw new Error("please enter valid email address")
    }

    // check email exists
    const userExists = await user.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error ("email is already exists")
    }

    const newUser = await user.create({
        name,
        email,
        password 
    })

    if(newUser){
        generatetoken(res,user._id)
        res.status(201).json({
            id : newUser._id,
            name :newUser.name,
            email : newUser.email
        })
    }
})


export const userLogin = expressAsyncHandler (async(req,res) =>{
    const {email,password} = req.body;
    const findUser = await user.findOne({email});

    if(findUser && (await findUser.checkPassword(password)) ){
        generatetoken(res,user._id)
        res.status(201).json({
            _id : findUser._id,
            name: findUser.name,
            email : findUser.email
        })
        
    }else{
        res.status(400)
        throw new Error("invalid email and password")
}})


export const userLogout = expressAsyncHandler ((req,res) =>{
    res.clearCookie("token")
    res.status(200).json({
        message : "logout succussfully..."
    })
})
export const userProfile = expressAsyncHandler ((req,res) =>{

})
export const userUpdateProfile = expressAsyncHandler ((req,res) =>{

})