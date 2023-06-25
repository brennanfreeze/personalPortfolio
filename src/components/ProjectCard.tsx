import { ArrowRight } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

interface CardProps {
  link: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<CardProps> = ({ link, title, description }) => {
  return (
    <IconButton
      component={Link}
      to={link}
      target="_blank"
      sx={{
        width: { xs: '300px', sm: '400px', md: '400px', lg: '550px' },
        p: 0,
        position: 'relative',
        '&::before': {
          content: "''",
          position: 'absolute',
          inset: 0,
          borderRadius: '25px',
          padding: '2px',
          background: 'linear-gradient(220deg, #ce40ad 10%, #4b70dd 80%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
        transition:
          'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Stack
        width={{ xs: '300px', sm: '550px', md: '550px', lg: '550px' }}
        sx={{
          backgroundColor: '#08050f',
          borderRadius: '25px',
          color: 'white',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          margin={2}
          textAlign="center"
          sx={{
            fontSize: { xs: '50px', sm: '50px', md: '60px', lg: '60px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          p={1}
          margin={2}
          variant="h5"
          color="white"
          sx={{
            fontWeight: 500,
            fontFamily: 'Lato, sans-serif',
          }}
        >
          {description}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            p: 1,
            marginBottom: 5,
            width: { xs: '250px', sm: '275px' },
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
              width: { xs: '150px', sm: '150px', md: '400px', lg: '400px' },
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
    </IconButton>
  );
};

export default ProjectCard;
