import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { ArrowRight } from '@mui/icons-material';
import BasicLayout from '../components/BasicLayout';

const Blog: React.FC = () => {
  return (
    <>
      <BasicLayout />
      <Stack alignItems="center">
        <Typography
          textAlign="center"
          variant="h2"
          component="h1"
          p={2}
          sx={{
            marginTop: 12,
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
            width: { xs: '250px', sm: '275px' },
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
          inputProps={{ maxLength: 20, style: { color: 'white' } }}
        />
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="space-between"
          marginTop={10}
        >
          <Grid
            item
            sx={{
              width: { xs: '250px', sm: '250px', md: '350px', lg: '350px' },
              height: { xs: '400px', sm: '400px', md: '350px', lg: '350px' },
            }}
          >
            <Stack
              sx={{
                backgroundColor: '#08050f',
                color: 'white',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                display: 'flex',
                position: 'relative',
                '&::before': {
                  content: "''",
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '25px',
                  padding: '2px',
                  background:
                    'linear-gradient(220deg, #ce40ad 10%, #4b70dd 80%)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                margin={2}
                textAlign="center"
              >
                Title
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                margin={2}
                textAlign="center"
              >
                June 26, 2023
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                margin={2}
                textAlign="center"
              >
                Python, Django
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  p: 1,
                  marginTop: 3,
                  marginBottom: 3,
                  width: { xs: '200px', sm: '200px', md: '300px', lg: '300px' },
                  height: 'auto',
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Lato, san-serif',
                  borderRadius: 8,
                  backgroundColor: '#08050f',
                  border: '2px solid white',
                  fontSize: '100%',
                  transition:
                    'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'white',
                    border: '2px solid black',
                    color: 'black',
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Typography
                  sx={{
                    p: 1,
                    fontSize: '60%',
                    fontFamily: 'Lato, san-serif',
                    width: {
                      xs: '150px',
                      sm: '150px',
                      md: '400px',
                      lg: '400px',
                    },
                    height: 'auto',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Check it out
                  <ArrowRight />
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Blog;
