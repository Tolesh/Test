
import React, { Component } from 'react';
import { Box } from '@mui/material';

const Content = () => {
  return (
    <div className='app-content'>
      <Box sx={{display: 'grid', 
    // gridTemplateColumns:'repeat(4, 1fr)',
    gap: 1, gridTemplateRows: 'auto',
    gridTemplateAreas: `"conImage"
    "conAva"
    "conPosts"`}}>
        <Box sx={{gridArea: 'conImage'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEV6PUYwJKOqv6-jR0WpSTAUn2oFmxHpaBA&usqp=CAU" /></Box>
        <Box sx={{gridArea: 'conAva'}}>ava</Box>
        <Box sx={{gridArea: 'conPosts'}}>posts</Box>
      </Box>
    </div>
  );
}

export default Content;