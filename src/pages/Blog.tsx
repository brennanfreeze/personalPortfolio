import { Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import BasicLayout from '../components/BasicLayout';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  return (
    <>
      <BasicLayout />
      <Stack alignItems="center">
        <Typography
          textAlign="center"
          variant="h2"
          component="h1"
          marginTop={{ xs: 10, sm: 10, md: 20, lg: 20 }}
          p={2}
          sx={{
            fontFamily: 'Lato, sans-serif',
            backgroundColor: 'primary.main',
            background:
              '-webkit-linear-gradient(220deg, #ce40ad 10%, #4b70dd 80%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Explore what I'm up to.
        </Typography>
        <TextField
          sx={{
            backgroundColor: '#08050f',
            border: 'solid white 2px',
            borderRadius: '50px',
            marginTop: 5,
            color: 'white',
            width: { xs: '280px', sm: '450px' },
            '& .MuiInputBase-root': {
              '& input': {
                color: 'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
            },
            '& input::placeholder': {
              color: 'white',
              opacity: 0.5,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
            },
          }}
          placeholder="Search"
          inputProps={{ maxLength: 40, style: { color: 'white' } }}
        />
        <Grid
          container
          spacing={8}
          width="80%"
          display="flex"
          justifyContent="center"
          alignItems="space-between"
          alignContent="space-around"
          marginTop={3}
          marginBottom={10}
        >
          <BlogCard
            title="Test Test Test Test Test Test Test Test Test Test"
            date="June 26, 2023"
            tech="Python, C++ "
            content="This is a test to show the blog posting system. This is done for the pure
            sake to test it and it means nothing"
          />
        </Grid>
      </Stack>
    </>
  );
};

export default Blog;
