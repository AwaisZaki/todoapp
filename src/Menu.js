import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Container, Grid, AppBar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './Components/Appbar/Appbar'



const Menu = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Appbar />

                    <ul>
                        <li> <Link to='/'>Home </Link></li>
                        <li><Link to='/Components/Todo/Todo'>Todo </Link></li>
                    </ul>
                </Grid>
            </Grid>

        </Container>


    )
}

export default Menu