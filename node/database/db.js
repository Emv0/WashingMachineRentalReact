import {Sequelize} from 'sequelize';

const db = new Sequelize('washing_machine_rental_db','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db;