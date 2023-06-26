import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import TopMenu from '../components/TopMenu';
import BasicLayout from '../components/BasicLayout';

export const NotFound: React.FC = () => {
  return (
    <>
      <Stack>
        <TopMenu />
        <BasicLayout />
      </Stack>
      <Stack
        spacing={4}
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        marginTop={{ xs: 20, sm: 20, md: 30, lg: 30 }}
        width="100%"
      >
        <Typography
          textAlign="center"
          variant="h2"
          component="h1"
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
          Page Not Found.
        </Typography>
        <Typography
          variant="h5"
          color="white"
          textAlign="center"
          sx={{
            fontWeight: 500,
            fontFamily: 'Lato, sans-serif',
          }}
        >
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="outlined"
          href="#/"
          variant="contained"
          sx={{
            p: 1,
            width: { xs: '250px', sm: '275px' },
            height: 'auto',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Lato, sans-serif',
            borderRadius: 8,
            backgroundColor: '#08050f',
            border: '2px solid white',
            transition:
              'transform 0.2s ease-in-out, background-image 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              backgroundColor: 'white',
              border: '2px solid black',
              color: 'black',
            },
          }}
        >
          <Typography
            sx={{
              p: 1,
              fontFamily: 'Lato, sans-serif',
              fontWeight: 'bold',
            }}
          >
            Back To Home
          </Typography>
        </Button>
      </Stack>
    </>
  );
};

export default NotFound;
