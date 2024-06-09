import UsersModel from '../models/UsersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const auth = async (req, res) => {

    try {

        const user = await UsersModel.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas",requestBody:req.body})
        }



        const truePass = await bcrypt.compare(req.body.password, user.password)

        if (truePass === false) {
            return res.status(401).json({ message: "Credenciales inválidas" })
        }

        const token = jwt.sign({ userId: user.id, email: user.email },"123456789" ,{ expiresIn: '1h' })

        return res.status(200).json({ message: "Inicio de sesión exitoso", token:token, user:user })

    } catch (error) {
        console.error('Error de autenticación:', error);
        res.status(500).json({ message: 'Error de autenticación',requestBody:req.body});
    }

}

export const create = async (req, res) => {

    try {

        const salt = await bcrypt.genSalt(8);
        const encryptedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = encryptedPassword
        await UsersModel.create(req.body);
        res.status(200).json({ message: 'Registro creado correctamente' })
    } catch (error) {
        res.status(500).json({ message: error })
    }

}

export const consult = async (req, res) => {

    try {
        const usersDb = await UsersModel.findAll();
        res.json(usersDb);
    } catch (err) {
        res.json({ message: err.message });
    }

}

export const getConsult = async (req, res) => {

    try {
        const userDb = await UsersModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(userDb[0]);
    } catch (error) {
        res.json({ message: error.message })
    }

}

export const update = async (req, res) => {

    try {
        await UsersModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const deleteUser = async (req, res) => {

    try {
        await UsersModel.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json("Usuario eliminado")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}