import MachinesModel from "../models/MachinesModel.js";

export const createMachine = async (req, res) => {

    try {

        await MachinesModel.create(req.body);
        res.status(200).json({ message: "Lavadora Registrada" });
    } catch (error) {

        res.status(500).json({ message: "Error Registrando", error: error  });
    }

}

export const consultMachine = async (req, res) => {

    try {

        const machinesDb = await MachinesModel.findAll();
        res.status(200).json({ message: "Exito Consultando", machinesDb });
    } catch (error) {

        res.status(500).json({ message: "Error Consultando", error: error });
    }

}

export const getConsultMachine = async (req, res) => {

    try {

        const machineDb = await MachinesModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message:"Lavadora Encontrada", data: machineDb[0] });
    } catch (error) {

        res.status(500).json({ message: "Error Buscando la lavadora", error: error  });
    }

}

export const updateMachine = async (req, res) => {

    try{

        await MachinesModel.update(req.body,{ where:{ id:req.params.id }});
        res.status(200).json({ message: "Lavadora Actualizada" });
    }catch(error){

        res.status(500).json({message:"Error Actualizando", error: error});
    }

}

export const deleteMachine = async (req, res) => {

    try{

        await MachinesModel.destroy({ where:{ id: req.params.id } });
        res.status(200).json( { message: "Lavadora Eliminada" } );
    }catch(error){
        
        res.status(500).json( {message:"Error Eliminando", error} )
    }

}