import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { InputLabel, TextField, Typography, Box, Button } from '@mui/material';

const BlogDetail = () => {
    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);

    const [inputs, setInputs] = useState({

    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    };





    const fetchDetails = async() => {
        const res = await axios.get(`https://blog-app-api-phi.vercel.app/api/blog/${id}`).catch((err) => console.log(err));
        const data = await res.data;
        return data;
    }
    useEffect(() => {
        fetchDetails().then((data) => {
            setBlog(data.blog);
            setInputs({
                title: data.blog.title,
                description: data.blog.description,
            });
        });
    }, [id]);

    const sendRequest = async() => {
        const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`, {
            title: inputs.title,
            description: inputs.description,
        }).catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };


    console.log(blog);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then((data) => console.log(data)).then(() => Navigate("/myBlogs/"));
    };


    return ( <
        div > {
            inputs &&
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
            Button type = "submit"
            sx = {
                { mt: 2, borderRadius: 4 }
            }
            variant = "contained"
            color = 'warning' > Post < /Button> < /
            Box >
            <
            /form > 

        } <
        /div>
    )
}

export default BlogDetail;
