import { InputLabel, TextField, Typography, Box, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    };

    const sendRequest = async() => {
        const res = await axios.post("https://pnv-blog.onrender.com/api/blog/add", {
            title: inputs.title,
            description: inputs.description,
            image: inputs.image,
            user: localStorage.getItem("userId")
        }).catch(err => console.log(err));
        const data = await res.data
        return data;
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
        sendRequest().then((data) => console.log(data)).then(() => navigate("/blogs"));
    };
    return ( <
        div >
        <
        form onSubmit = { handleSubmit } >
        <
        Box border = { 3 }
        sx = {
            { backgroundImage: `url(${"https://tse2.mm.bing.net/th?id=OIP.Nfy-HHK5BDw6uOuCkbuT0gHaEK&pid=Api&P=0"})`, backgroundSize: "130%" }
        }
        borderColor = "darkblue"
        background = "grey"
        boxShadow = "15px 15px 15px #ccc"
        padding = { 3 }
        margin = { 'auto' }
        marginTop = { 3 }
        width = { "80%" }
        display = "flex"
        borderRadius = { 5 }
        flexDirection = { 'column' } >
        <
        Typography fontWeight = { 'bold' }
        padding = { 1 }
        variant = "h5"
        textAlign = { 'center' }
        color = "navy" > Post Blog < /Typography> <
        InputLabel sx = {
            { fontSize: '22px', fontWeight: 'bold', color: "darkgoldenrod" }
        } > Title < /InputLabel> <
        TextField name = "title"
        onChange = { handleChange }
        value = { inputs.title }
        margin = 'auto'
        variant = "outlined" / >
        <
        InputLabel sx = {
            { fontSize: '22px', fontWeight: 'bold', color: "darkgoldenrod" }
        } > Description < /InputLabel> <
        TextField name = "description"
        onChange = { handleChange }
        value = { inputs.description }
        margin = 'auto'
        variant = "outlined" / >
        <
        InputLabel sx = {
            { fontSize: '22px', fontWeight: 'bold', color: "darkgoldenrod" }
        } > ImageURL < /InputLabel> <
        TextField name = "image"
        onChange = { handleChange }
        value = { inputs.image }
        margin = 'auto'
        variant = "outlined" / >
        <
        Button type = "submit"
        sx = {
            { mt: 2, borderRadius: 4 }
        }
        variant = "contained"
        color = 'warning' > Post < /Button> < /
        Box >
        <
        /form >  < /
        div >
    );
}

export default AddBlog;
