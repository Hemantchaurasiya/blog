import axios from 'axios';

const url = 'http://localhost:8000';

export const register = async(user)=>{
    try {
        return await axios.post(`${url}/register`, user);
    } catch (error) {
        console.log('Error while register user API ', error);
    }
}

export const login = async(user)=>{
    try {
        return await axios.post(`${url}/login`, user);
    } catch (error) {
        console.log('Error while login user API ', error);
    }
}

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${url}/posts${param}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.put(`${url}/update/${id}`, post);
        
    } catch(error) {
        console.log('Error while calling updatePost API ', error)
    }
}

export const deletePost = async (id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}


export const newComment = async (comment) => {
    try {
        return await axios.post(`${url}/comment/new/`, comment);
    } catch(error) {
        console.log('Error while calling newComment API ', error)
    } 
}

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${url}/comments/${id}`);
        return response.data;
    } catch(error) {
        console.log('Error while calling getComments API ', error)
    } 
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deleteComments API ', error)
    } 
}

export const deletePostAllComment = async(id)=>{
    try {
        return await axios.delete(`${url}/comment/deleteAll/${id}`);
    } catch (error) {
        console.log('Error while calling deletePostAllComment API ', error)
    }
}