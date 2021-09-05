import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import '../styles/styles.scss';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
       <Container maxWidth="md">
         <NavBar></NavBar>
      </Container>
    )
}