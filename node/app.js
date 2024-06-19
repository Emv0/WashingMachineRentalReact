import express from "express";
import cors  from "cors";
import db from "./database/db.js";
import userRouter from "./routes/UsersRoutes.js";
import machinesRouter from "./routes/MachinesRoutes.js";

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( '/' , userRouter );
app.use( '/', machinesRouter  );


try {
    await db.authenticate()
    console.log('conexión exitosa a la db')
} catch (error) {
    console.log(`el error de conexión es ${error}`)
}

app.get('/',( req, res )=>{
    res.send('Hola mundo')
});


app.listen(8000,()=>{
    console.log('Servidor corriendo en http://localhost:8000/');
});