import jwt from "jsonwebtoken";

const generatetoken = (res,userId) =>{
    const token = jwt.sign({userId},process.env.SECRET_KEY,{expiresIn : "10h"})

    res.cookie("token",token,{
        httpOnly : true,
        secure : true,
        maxAge : 10 * 3600000,
        sameSite : "strict"
    })
}

export default generatetoken;