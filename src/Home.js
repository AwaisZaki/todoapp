import React from 'react'
import { Container, Grid } from '@material-ui/core';
import Appbar from './Components/Appbar/Appbar'
// import Todo from './Components/Todo/Todo'


const Home = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Appbar />          
                    {/* <Todo />          */}
                </Grid>
            </Grid>

        </Container>


    )
}

export default Home;