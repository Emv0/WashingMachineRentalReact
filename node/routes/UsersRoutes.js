import express from 'express';
import {create, consult, getConsult, update, deleteUser, auth} from'../controllers/UsersController.js';

const userRouter = express.Router();

userRouter.get( '/userConsult',     consult    );
userRouter.post('/authUser',        auth       );
userRouter.post('/userCreate',      create     );
userRouter.get( '/userUnique/:id',  getConsult );
userRouter.put( '/userUpdate/:id',  update     );
userRouter.delete('/userDelete/:id',deleteUser );

export default userRouter;