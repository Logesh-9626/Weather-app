import express from "express";
import { userLogin,userLogout,userProfile,userUpdateProfile,createUser } from "../Controllers/UserController.js";

const router = express.Router()

router.post("/create",createUser);
router.post("/login",userLogin);
router.post("/logout",userLogout);
router.get("/profile",userProfile);
router.put("/profile",userUpdateProfile)

export default router