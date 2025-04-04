// routes/userRoutes.js
import express from "express";
import { registerUser, loginUser } from "../controllers/User/userController.js";
import {
  getUserData,
  updateUserProfile,
} from "../controllers/User/modifyUserController.js";
import upload from "../config/multerConfig.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import verifyEmail from "../controllers/verificationController.js";
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getUserData); // get user profile
router.put(
  "/profile",
  verifyToken,
  upload.single("profileImage"),
  updateUserProfile
); // update user profile
router.get("/verify-email", verifyEmail);
// router.post("/update-dashboard", verifyToken);
export default router;
