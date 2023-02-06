import axios from 'axios'
import { APIBaseUrl } from './Components/Constants/Constants'

const instance = axios.create({
    baseURL: APIBaseUrl, 
  });
export default instance