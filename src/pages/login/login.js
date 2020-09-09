import React,{Component} from 'react'
import './login.css';
import {signInWithGoogle,auth} from '../../components/firebase/utils';
import FormInput from './../../components/formInputs/index';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import SignUp from './../signup/signup';

const initialState={
    displayName: '',
    email: '',
    password: '',
    errors: []
}

class Login extends Component{
    constructor (props) {
        super(props);
        this.state={
            ...initialState
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange (e){
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }

    
    handleSubmit = async e =>{
        e.preventDefault();
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                ...initialState
            });
        }catch (err){
            console.log(err);
        }
    }
    render(){
    const {displayName,email,password,confirmPassword,errors} =this.state;
    return (
        <div className="signin">
            <div className="wrap">
                <form className="wrap" onSubmit={this.handleSubmit}>
                <h2>Login Page</h2>
                <form onSubmit={this.submitForm}>
                <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
                />
                <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
                />
                <button className="signButton" type="Login">Login</button>
                </form>
                <div className="signInDiv">
                <button onClick={signInWithGoogle} className="signButton">Sign In With Google</button>
                </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Login;
