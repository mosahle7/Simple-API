import test from 'ava';

import userService from "../user.service"

let sampleUser;

test.beforeEach(() => {

    sampleUser ={
        name: "CR7",
        email: "cr7@gmail.com",
        city:  "madeira",
        country: "Portugal"
    }
})
test('must add an user', (t) => {
    const expectedId=3;
    const user = userService.addUser(sampleUser);

    t.is(user.id, expectedId);
    t.deepEqual(user, {id: expectedId, ...sampleUser});

});

test('must retrieve an user', (t) => {
    const expectedId=3;


    const user = userService.getUser(expectedId);

    t.is(user.id, expectedId);
    t.deepEqual(user, {id: expectedId, ...sampleUser});

});

test('must get all users', (t) => {
    const expectedId=3;


    const user = userService.getAll();

    t.deepEqual(user[expectedId-1], {id: expectedId, ...sampleUser});

});

test('must update an user', (t) => {
    const expectedId=3;
    const updatedDetails = {
        name:'sahle',
        email:'sahlethappi@gmail.com',
        city:'Tirurangadi',
        country:"India"
    };

    const user = userService.updateUser(expectedId,updatedDetails);

    t.is(user.id, expectedId);
    t.deepEqual(user, {id: expectedId, ...updatedDetails});

});

test('must delete an user', (t) => {
    const expectedId=3;
    
    const expected = userService.removeUser(expectedId);

    t.not(expected,undefined);

    const user = userService.getUser(expectedId);
    t.is(user,null);
   

});
