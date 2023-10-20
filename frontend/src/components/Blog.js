import React from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Avatar, CardContent, CardMedia, Typography, Card, CardHeader, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`);
    };
    const deleteRequest = async() => {
        const res = await axios
            .delete(`https://pnv-blog.onrender.com/api/blog/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handleDelete = () => {
        deleteRequest()
            .then(() => navigate("/"))
            .then(() => navigate("/blogs"));
    };
    return ( <
        div > { " " } <
        Card sx = {
            {
                Width: "40%",
                margin: 'auto',
                mt: 2,
                padding: 2,
                boxShadow: "5px 5px 10px #ccc",
                ":hover:": {
                    boxShadow: "10px 10px 20px"
                },
            }
        } >

        {
            isUser && ( <
                Box display = 'flex' >
                <
                IconButton onClick = { handleEdit }
                sx = {
                    { marginLeft: 'auto' }
                } > < EditOutlinedIcon / > < /IconButton >  <
                IconButton onClick = { handleDelete }
                sx = {
                    { marginLeft: 'auto' }
                } > < DeleteTwoToneIcon / > < /IconButton >  < /
                Box >
            )
        }

        <
        CardHeader avatar = { <
            Avatar sx = {
                { bgcolor: "red" }
            } > { userName ? userName.charAt(0) : "" } <
            /Avatar>
        }
        title = { title }
        / > <
        CardMedia component = "img"
        height = "194"
        image = { imageURL }
        alt = "Image" /
        >

        <
        CardContent > <
        hr / >
        <
        br / >
        <
        Typography variant = "body2"
        color = "text.secondary" > < b > { userName } < /b> { " : " }   { description } < /Typography > < /CardContent > < /
        Card > < /
        div >
    )
}

export default Blog;
