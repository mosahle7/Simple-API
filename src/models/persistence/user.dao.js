import users from '../data/users.data'

const get = (userId) => {
    const findUser = users.find((user) => user.id === userId);
    return findUser || null;
  }

const getAll = () => {
    return users;
}

/**
 * Update a user from its ID 
 * 
 * @param {integer} userId 
 * @param {Object} newDetails 
 * @returns {Object|false}
 */
const update= (userId, newDetails)=> {
    let existingUser = null;
    let userIndex; 

    users.map((user, index) => {
        if(user.id === userId){
            existingUser=user;
            userIndex=index;
        }
    });

    if (!existingUser ){
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    }

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;

    // users.forEach((user, index) => {
    //     if(user.id === newDetails.id){
    //         const newD = {...user,...newDetails}
    //         users[index]= newD;
    //     }
    // });
    // return users;
}

/**
 * Insert a user
 * 
 * @param {object} details 
 * @returns 
 */
const insert = (details) => {
    const newUser = { id: users.length+1, ...details};
    users.push(newUser);

    return newUser;
}

/**
 * Remove a user from its ID
 * 
 * @param {integer} userId 
 * @returns 
 */
const remove = (userId) => {
    const deleteUser = (user, index) => {
        if (user.id === userId){                         
            users.splice(index,1);
            return true;
        }
        return false;
    }
    
    return users.find(deleteUser);
}

export default{
    get,
    getAll,
    update,
    insert,
    remove

}


