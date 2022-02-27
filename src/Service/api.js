import axios from "axios";

const url = 'https://price-list-becend.herokuapp.com/users';

const instance = axios.create({
   baseURL: url
})



export const getUsers = async (id) => {
   id = id || '';
   return await instance.get(`/${id}`);
}

export const addUser = async (user) => {
   return await instance.post('', user);
}

export const editUser = async (id, user) => {
   debugger
   return await instance.put(`/${id}`, user);
}

export const deleteUser = async (id) => {
   return await instance.delete(`/${id}`);
}


