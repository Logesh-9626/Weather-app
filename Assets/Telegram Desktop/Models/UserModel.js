import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = mongoose.Schema({
    name :{
        type : String,
        required :true
    },
    email :{
        type :String ,
        unique : true,
        required : true
    },
    password :{
        type : String ,
        required :true
    }
});

userSchema.pre("save",async function(next) {
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
})


userSchema.methods.checkPassword = async function(givenPassword) {
   return await bcrypt.compare(givenPassword,this.password) 
}
const user = mongoose.model("User",userSchema);

export  default user;