import React, { useRef,useState,Component } from 'react'
import AuthenticationService from '../MyComponents/Authentication'

// export default function Hello() {

//     const [hasloginfailed, setHasloginfailed] = useState(false);
//     const [hasloginsuccess, setHasloginsuccess] = useState(false);

//     const loginClicked = () =>  {
//             setHasloginsuccess(!hasloginsuccess);
//             setHasloginfailed(!hasloginfailed);  
//         console.log("haslogin success " + hasloginsuccess+ "\nlogin failed  " + hasloginfailed);
//     }

//     return (
//             <>
//              <input type="checkbox" checked={hasloginsuccess}/>
//              <br/>
//              <input type="checkbox" checked={hasloginfailed}/>             
//             <button type="submit" className="btn btn-primary" onClick={() => loginClicked()}>Login</button>
//             </>
//         )
// }


export default function Hello(){
    // const [counter, setCounter] = useState(0);
    const countJwt = useRef(0);    

    // const handle = () => {
    //     countRef.current++;
    //     console.log(`Clicked ${countRef.current} times`);
    // };
     
    const fetchjwt = () =>  {
        let username="todolist"
        let password="dummy"
        let token=AuthenticationService.executeJwtAuth(username,password);
        console.log(token)
    }

    // console.log("rendered" + countRef.current )

    return (
        <>
        <div className="container my-5">

         {/* <button className="btn btn-sm btn-danger"  onClick={() => handle() }> Click counter: {countRef.current} </button>           */}
         <button className="btn btn-sm btn-danger"  onClick={() => fetchjwt() }> request jwt token </button>          

        <div/></div>      
        </>    
    ) 
}