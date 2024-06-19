import db from "../database/db.js";
import { DataTypes } from "sequelize";

const users_machines = db.define('users_machine', {

    user_id: DataTypes.INTEGER,
    machine_id: DataTypes.INTEGER,
    precio: DataTypes.BIGINT,
    tiempo: DataTypes.INTEGER

})

export default users_machines;