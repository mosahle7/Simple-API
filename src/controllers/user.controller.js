import userService from "../services/user.service";
import { StatusCodes } from "http-status-codes";
import pino from "pino";

const logger = pino();
const STATUS = {
    success: true,
    failure: false
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getAll = (req,res) =>{
    const users = userService.getAll();

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send(
        {
            status: STATUS.failure,
            message: 'No users found',
        }
    )
}

/**
 * Retrieve a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getUser = (req,res) => {
    const id = parseInt(req.params.id, 10)
    const user = userService.getUser(id);

    if(user){
        logger.info(`Getting user ${id}`);
        return res.status(StatusCodes.OK).send(user)
    }
    return res.status(StatusCodes.NOT_FOUND).send(
        {
            status: STATUS.failure,
            message: `User ${id} is not found`,
        }
    )
}

/**
 * Add a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const addUser = (req,res) => {
    const {body: user} = req;  // for const body=req.body

    const addedUser = userService.addUser(user);
    
    logger.info('Creating a user');

    return res.status(StatusCodes.CREATED).send({
            status: STATUS.success,
            user:addedUser,
        });
    
    // data.push(body);
    // return res.status(StatusCodes.CREATED).send({
    //     status : STATUS.success,
    //     // message: data,
    //     message: data

    // });

}

/**
 * Update a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateUser = (req,res) => {
    const {body: user} = req;  // for const body=req.body

    const id = parseInt(req.params.id, 10);
    const updatedUser = userService.updateUser(id,user);

    if(updatedUser){
        logger.info(`Updating user ${id}`);
    return res.status(StatusCodes.OK).send({
        status: STATUS.success,
        user: updatedUser,
    });

    

    } else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} is not found`,
        })
    }}

    /**
     * Remove a user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
export const removeUser = (req,res) => {
    const users= userService.getAll();
    const id = parseInt(req.params.id, 10);
    const yo= userService.removeUser(id)

    if (yo){
        logger.info(`Removing user ${id}`)
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            users,
        })
    }
    else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} not found`,
        })
    }
    
}