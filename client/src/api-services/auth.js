import axios from 'axios';
import { serverUrl } from '../config';

class Auth {
  async isUserAuthorized () {
   return await axios.get(`${serverUrl}/auth/isUserAuthorized`,{
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
  }
};

export default new Auth();