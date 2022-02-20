import axios from "axios";





const developmentMode = false
const url = 'http://localhost:5000/users';

const instance = axios.create({
   url: developmentMode ? 'http://localhost:3000' : 'http://localhost:5000'
})



export const getUsers = async (id) => {
   id = id || '';
   return await instance.get(`${url}/${id}`);
}

export const addUser = async (user) => {
   return await instance.post(url, user);
}

export const editUser = async (id, user) => {
   debugger
   return await instance.put(`${url}/${id}`, user);
}

export const deleteUser = async (id) => {
   return await instance.delete(`${url}/${id}`);
}


