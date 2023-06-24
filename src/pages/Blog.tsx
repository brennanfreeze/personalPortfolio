import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import BasicLayout from '../components/BasicLayout';

const Blog: React.FC = () => {
  return (
    <>
      <BasicLayout />
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          height: '100vh',
        }}
      >
        <h1>Joe</h1>
      </Stack>
    </>
  );
};

export default Blog;
