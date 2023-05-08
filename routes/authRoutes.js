import express from "express";
const router = express.Router();

import {
  register,
  login,
  updateUser,
  allUser,
} from "../controller/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);
router.route("/all").get(allUser);

export default router;
