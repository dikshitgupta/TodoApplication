import React, {Component} from 'react'
import AuthenticationService from './Authentication'
import {Route,Redirect} from 'react-router-dom'

export class AuthenticatedRoute extends React.Component {
    render(){

        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}/>
        }
        else{
            return <Redirect to="/"/>             
        }

    } 
}

export default AuthenticatedRoute;