import axios from 'axios';


const url = "http://localhost:8080/users";

export const GetUsers = async (id) => {
    id = id || ''
    return await axios.get(`${url}/${id}`)
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}

export const editUser = async (id, user) => {
    id = id || ''
    return await axios.put(`${url}/${id}`, user)
}

export const deleteUserData = async (id) => {
    return axios.delete(`${url}/${id}`)
}