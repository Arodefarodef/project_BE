import { Router } from "express";
import {
  createUser,
  verifyUser,
  viewAll,
  viewOne,
} from "../controller/admincontroller";

const router = Router();
router.route("/create-user").post(createUser);
router.route("/verify-user/:Id").get(verifyUser);
// router.route("/signIn-user").post(signinUser);
router.route("/getAll-user").get(viewAll);
router.route("/getOne-user/:Id").get(viewOne);

export default router;
