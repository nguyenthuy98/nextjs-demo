import axios from 'axios'
import { env } from '../../env'


const getUsersList = async (): Promise<any> => {
    try {
        return await axios.get(`${env.baseUrl}/users`)
    } catch(err) {
        throw err
    }
}

const createUser = async (data: any): Promise<any> => {
    try {
        return await axios.post(`${env.baseUrl}/users`, data)
    } catch(err) {
        throw err
    }
}

const updateUser = async (id: string, data: any): Promise<any> => {
    try {
        return await axios.put(`${env.baseUrl}/users/${id}`, data)
    } catch(err) {
        throw err
    }
}

const removeUser = async (id: string): Promise<any> => {
    try {
        return await axios.delete(`${env.baseUrl}/users/${id}`)
    } catch(err) {
        throw err
    }
}

export { getUsersList, createUser, updateUser, removeUser }