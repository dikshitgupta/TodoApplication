import {useState , React} from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from './Authentication'

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasloginfailed, setHasloginfailed] = useState(false);
    const [hasloginsuccess, setHasloginsuccess] = useState(false);

    let history = useHistory();
    
    console.log(username + password)

    const loginClicked = () =>  {
        AuthenticationService
        .executeJwtAuth(username, password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.token)
            history.push(`/home/${username}`)
        }).catch(() => {
            setHasloginfailed(true)
            setHasloginsuccess(false)
        })}  

    return (
        <>
        <div className="container my-5">

            <label for="username">Username:</label>
            <input type="text" className="form-control" placeholder="Enter username" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />

            <label for="password">Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" name={password} onChange={(e) => { setPassword(e.target.value) }} />

            <button type="submit" className="btn btn-primary" onClick={() => loginClicked()}>Login</button>
            
            {hasloginfailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {hasloginsuccess && <div>Login Sucessful</div>}            
          
        <div/></div>      
        </>    
    ) 
}

