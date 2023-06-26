/* eslint-disable react/no-unescaped-entities */
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
        <Typography
          variant="h5"
          color="white"
          textAlign="center"
          sx={{
            fontWeight: 500,
            width: { xs: '275px', sm: '500px', md: '600px', lg: '650px' },
            height: '10%',
            fontFamily: 'Lato, sans-serif',
          }}
        >
          Here, I share practical knowledge and insights on programming
          languages, frameworks, and best practices, and explore the
          transformative potential of software engineering in real-world
          applications.
        </Typography>
        <TextField
          autoComplete="off"
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
              fontFamily: 'Lato, sans-serif',
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
            title="Creating This Blog"
            date="June 25, 2023"
            tech="Typescript, Firebase "
            content="Welcome to my portfolio/blog! I always wanted to get really creative with a personal portfolio and figured a space themed one would help me go down that route. Using Typescript, Material UI, Three.js, React Three Fiber, and Firebase.

            This was a really great learning experience for me to understand how a responsive layout for a web application works and how I can improve my design skills.

            I plan to hopefully do a lot more for this site such as creating a mailing list for anyone wanting to get updates on what I am up to. 
            "
          />
        </Grid>
      </Stack>
    </>
  );
};

export default Blog;
