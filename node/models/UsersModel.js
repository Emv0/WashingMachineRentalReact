import db from '../database/db';
import { DataTypes } from 'sequelize';


const users = db.define( 'users' ,{

    name: { type: DataTypes.STRING },
    document: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type:DataTypes.STRING }
    
})

export default users;