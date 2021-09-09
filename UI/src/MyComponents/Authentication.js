import axios from 'axios';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {
   
    registerSuccess(username,password){
        sessionStorage.setItem('authenticateduser',username);
    }

    executeJwtAuth(username,password){    
        return axios.post(`http://localhost:8080/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return "Bearer " + token
    }

    logout() {
        sessionStorage.removeItem(`${USER_NAME_SESSION_ATTRIBUTE_NAME}`);
    }

    getUserName(){
        return this.isUserLoggedIn() ? sessionStorage.getItem(`${USER_NAME_SESSION_ATTRIBUTE_NAME}`) : "";
    }

    isUserLoggedIn(){
        let status= sessionStorage.getItem(`${USER_NAME_SESSION_ATTRIBUTE_NAME}`) !=null ? true: false;
        return status
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }


}

export default new AuthenticationService()