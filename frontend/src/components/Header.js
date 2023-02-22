import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const [value, setValue] = useState();
    return ( <
            AppBar position = "sticky"
            sx = {
                {
                    background: "linear-gradient(147deg, #e0ffff 0%, #954535 74%)"
                }
            } >
            <
            Toolbar >
            <
            Typography variant = 'h4'
            color = "#b31b1b " > MY BLOG < /Typography>  {
            isLoggedIn && < Box display = "flex"
            marginLeft = 'auto'
            marginRight = 'auto' >
            <
            Tabs textColor = "inherit"
            value = { value }
            onChange = {
                (e, val) => setValue(val)
            } >
            <
            Tab LinkComponent = { Link }
            to = "/blogs"
            label = "All Blogs" / >
            <
            Tab LinkComponent = { Link }
            to = "/myBlogs"
            label = "My Blogs" / >

            <
            Tab LinkComponent = { Link }
            to = "/blogs/add"
            label = "Add Blogs" / >

            <
            /Tabs> < /
            Box >
        } <
        Box display = "flex"
    marginLeft = "auto" > {!isLoggedIn && < > <
        Button LinkComponent = { Link }
        to = "/login"
        variant = 'outlined'
        sx = {
            { margin: 1, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 10 }
        }
        color = "inherit" > Login < /Button>  <
        Button LinkComponent = { Link }
        to = "/login"
        variant = "outlined"
        sx = {
            { margin: 1, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 10 }
        }
        color = "inherit" > Signup < /Button> </ >
    } {
        isLoggedIn && <
            Button onClick = {
                () => dispatch(authActions.logout())
            }
        LinkComponent = { Link }
        to = "/login"
        variant = 'outlined'
        sx = {
            { margin: 1, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 10 }
        }
        color = "inherit" > Logout < /Button>
    } < /Box >  < /
    Toolbar > < /
    AppBar >
);

};

export default Header;