import express from "express";
import { consultUserMachine, createUserMachine } from "../controllers/Users_machineController.js";

const userMachineRouter = express.Router();

userMachineRouter.post("/userMachineCreate", createUserMachine);
userMachineRouter.get("/userMachineConsult/:id", consultUserMachine);


export default userMachineRouter;