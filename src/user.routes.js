import express from 'express';
import {StatusCodes} from 'http-status-codes';
// import bodyParser from 'body-parser';
import { expressYupMiddleware } from 'express-yup-middleware';
import userService from './services/user.service';
import users from './models/data/users.data';
import {addUserSchema, updateUserSchema, getUserSchema, removeUserSchema} from './user.schemas';
import { getAll, getUser, updateUser, addUser, removeUser } from './controllers/user.controller';

const router = express.Router();

router.get('/',
    getAll    
)

router.get('/:id',
    expressYupMiddleware({schemaValidator: getUserSchema}),
    getUser
)

router.post('/',
    expressYupMiddleware( {schemaValidator:addUserSchema, expectedStatusCode: StatusCodes.BAD_REQUEST}),
    addUser,
   
    // data.push(body);
    // return res.status(StatusCodes.CREATED).send({
    //     status : STATUS.success,
    //     // message: data,
    //     message: data

    // });
)

router.put('/:id',
expressYupMiddleware({schemaValidator:updateUserSchema}),
   updateUser
)

router.delete('/:id', 
    expressYupMiddleware({schemaValidator: removeUserSchema}),
    removeUser
)

export default router;
