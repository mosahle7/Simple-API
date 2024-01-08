import userDao from '../models/persistence/user.dao'
import * as yup from 'yup';

/**
 * Get a user from its ID
 * @param {integer} userId 
 * @returns 
 */
const getUser = (userId) => {
    return userDao.get(userId);
}

/**
 * 
 * Get all users
 * 
 * @returns 
 */
const getAll = () => {
    return userDao.getAll();
}

/**
 * Update a user
 * @param {integer} userId 
 * @param {object} details 
 * @returns 
 */
const updateUser = (userId, details) => {
    return userDao.update(userId,details);
}

/**
 * Add a user
 * 
 * @param {object} details 
 * @returns 
 */
const addUser = (details) => {

    return userDao.insert(details);
}

/**
 * Remove a user
 * 
 * @param {integer} userId 
 * @returns 
 */
const removeUser = (userId) => {
    return userDao.remove(userId);
}

export default{
    getAll,
    getUser,
    updateUser,
    addUser,
    removeUser
}