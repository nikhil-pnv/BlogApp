import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [inputs, setInputs] = useState({
            name: "",
            email: "",
            password: "",
        });
        const [isSignup, setIsSignup] = useState(false);
        const handleChange = (e) => {
            setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        };

        const sendRequest = async(type = "login") => {
            const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
            }).catch(err => console.log(err));

            const data = await res.data;
            console.log(data)
            return data;

        };


        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(inputs);
            if (isSignup) {
                sendRequest("signup").then((data) => localStorage.setItem("userId", data.user._id)).then(() => dispatch(authActions.login())).then(() => navigate("/blogs")).then(data => console.log(data));
            } else {
                sendRequest().then((data) => localStorage.setItem("userId", data.user._id)).then(() => dispatch(authActions.login())).then(() => navigate("/blogs")).then(data => console.log(data));
            }
        };


        return ( < div >
            <
            form onSubmit = { handleSubmit } >
            <
            Box display = "flex"
            flexDirection = { 'column' }
            alignItems = 'center'
            justifyContent = { 'center' }
            boxShadow = "10px 10px 20px #ccc"
            padding = { 3 }
            margin = 'auto'
            marginTop = { 5 }
            borderRadius = { 5 }
            maxWidth = { 400 } >
            <
            Typography variant = 'h2'
            padding = { 3 }
            textAlign = 'center' > { isSignup ? "SIGNUP" : "LOGIN" } <
            /Typography> { isSignup && ( < TextField name = "name"
            onChange = { handleChange }
            value = { inputs.name }
            margin = 'normal'
            placeholder = 'Name' / > )
    } { " " } <
    TextField name = "email"
onChange = { handleChange }
value = { inputs.email }
margin = 'normal'
placeholder = 'Email'
type = { 'email' }
/> <
TextField name = "password"
onChange = { handleChange }
value = { inputs.password }
margin = 'normal'
placeholder = 'Password'
type = { 'password' }
/> <
Button variant = 'outlined'
type = 'submit'
sx = {
    { margin: 1, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 5 }
}
color = "inherit" > Submit < /Button> <
Button onClick = {
    () => setIsSignup(!isSignup)
}
variant = 'outlined'
sx = {
    { marginTop: 3, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 5 }
}
color = "inherit" > { isSignup ? "Login   " : "Signup   " }
here < /Button> < /
Box > <
    /form>

<
/div>
);
}

export default Login;