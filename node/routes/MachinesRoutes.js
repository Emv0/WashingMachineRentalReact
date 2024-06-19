import express from "express";
import { createMachine, consultMachine, getConsultMachine, updateMachine, deleteMachine } from "../controllers/MachinesController.js";

const machinesRouter = express.Router();

machinesRouter.post("/machineCreate",         createMachine             );
machinesRouter.get( "/machineConsult",        consultMachine            );
machinesRouter.get( "/getConsultMachine/:id", getConsultMachine         );
machinesRouter.put( "/machineUpdate/:id",     updateMachine             );
machinesRouter.delete("/machineDelete/:id",   deleteMachine             );

export default machinesRouter;