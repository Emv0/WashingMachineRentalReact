import users_machines from "../models/Users_machineModel.js";
import users from "../models/UsersModel.js";
import machines from "../models/MachinesModel.js";

export const createUserMachine = async (req, res) => {

    try {

        await users_machines.create(req.body);
        res.status(200).json({message:"Lavadora Reservada"})
    } catch (error) {

        res.status(500).json({ message: "Error Registrando", error: error  });
    }

}

export const consultUserMachine = async (req, res) => {
    const userId = req.params.userId;

    try {

        const showMachines = await machines.findAll({
            include: [{
                model: users,
                through: {
                    model: users_machines,
                    where: { userId: userId }
                }
            }]
        });
        res.status(200).json({ message: "Consulta completada", data:showMachines})
    } catch (error) {

        res.status(500).json({ message: "Error Consultando", error: error });
    }

}