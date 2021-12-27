import axios from 'axios'
import { env } from '../../env'


const getPostList = async (): Promise<any> => {
    try {
        return await axios.get(`${env.baseUrl}/posts`)
    } catch(err) {
        throw err
    }
}


export { getPostList }