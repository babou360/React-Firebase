import React ,{Component} from 'react';
import './signup.css';
import FormInput from './../../components/formInputs/index';
import {auth,handleUserProfile} from './../../components/firebase/utils';

const initialState={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
}
class SignUp extends Component{
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
    submitForm= async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword, errors} =this.state;
        if(password!==confirmPassword){
            const err=['Passwords do not match'];
            this.setState({
                errors: err
            });
            return;
        } else if(displayName.length>15){
            const err=['User Name cannot be longer than 15 characters'];
            this.setState({
                errors: err
            });
            return;  
        }
        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password);
            await handleUserProfile(user,{displayName,password});

            this.setState({
                ...initialState
            });
        }catch(err){
            console.log(err);
        }
    }
    render(){
        const {displayName,email,password,confirmPassword,errors} =this.state;
        return (
            <div className="signup">
                <div className="wrap">
                    <h2>Sign Up</h2>
                    {errors.length>0 && (
                        <ul>
                            {errors.map((err,index) =>{
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                    <form onSubmit={this.submitForm}>
                        <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        onChange={this.handleChange}
                        />
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
                        <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="confirm Password"
                        onChange={this.handleChange}
                        />
                    <button className="signButton" type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default SignUp;