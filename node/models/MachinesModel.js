import db from "../database/db.js";
import { DataTypes } from "sequelize";

const machines = db.define( 'machines' ,{

    codigo: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    capacidad: DataTypes.STRING,
    precioPorHora: DataTypes.BIGINT,
    url: DataTypes.STRING


});

export default machines;