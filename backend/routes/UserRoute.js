import express from "express";
import {
  getUsers,
  getUserById,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/UserControllers.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", CreateUser);
router.patch("/users/:id", UpdateUser);
router.delete("/users/:id", DeleteUser);

export default router;
