import React, { Component } from 'react';
import logo from './logo.svg';
// import Tect from './views/Tect';
import './App.css';
import Header from './views/Header';
import SideBar from './views/SideBar';
import Content from './views/Content';
import {Box} from '@mui/material'

const App = () => {
  return (
    <div className='app-wrapper'>
    <Box sx={{display: 'grid', 
    gridTemplateColumns:'repeat(4, 1fr)',
    gap: 1, gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header header header"
    "sidebar content content content"`}}>
      <Box sx={{gridArea: 'header',bgcolor: 'primary.main'}}><Header /></Box>
      <Box sx={{gridArea: 'sidebar',bgcolor: 'secondary.main'}}><SideBar /></Box>
      <Box sx={{gridArea: 'content',bgcolor: 'error.main'}}><Content /></Box>  
    </Box>
    </div>
  );
}



export default App;
