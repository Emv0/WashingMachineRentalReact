import UsersModel from '../models/UsersModel.js';

// exports.create = (req,res) => {
//     console.log(req.body);
//     const { name, document, password, email } = req.body;
//     const newUser = {
//         name,
//         document,
//         password,
//         email
//     };
//     req.getConnection( (err, connection) => {
//         if(err) return res.status(500).send(err);
//         connection.query(`INSERT INTO users SET ?`,newUser,(err)=>{
//             if(err){
//                 return res.status(500).send(err);
//             }
//             res.status(201).json("Se creó correctamente el usuario");
//         });
//     }) 
// }

export const create = async (req, res) => {

    try{
        await UsersModel.create(req.body);
        res.json({message:'Registro creado correctamente'})
    }catch(error){
        res.json({message:error})
    }

}

export const consult = async ( req, res ) => {

    try{
        const usersDb = await UsersModel.findAll();
        res.json( usersDb );
    }catch( err ){
        res.json( { message: err.message } );
    }

}

export const getConsult = async ( req, res ) => {

    try{
        const userDb = await UsersModel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(userDb[0]);
    }catch(error){
        res.json({message: error.message})
    }

}

export const update = async ( req, res )=>{

    try{
        await UsersModel.update(req.body,{
            where: { id:req.params.id }
        })
        res.json({message:'Registro actualizado correctamente'});
    }catch(error){
        res.json({message:error.message});
    }
    
}

export const deleteUser = async ( req,res)=>{

    try{
        await UsersModel.destroy(req.body,{
            where:{ id:req.params.id }
        });
    }catch(error){
        res.json({message:error.message});
    }

}