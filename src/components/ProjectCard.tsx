/* eslint-disable react/function-component-definition */
import { ArrowRight } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
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
        width: { xs: '300px', sm: '300px', md: '550px', lg: '550px' },
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
      <Box
        width={{ xs: '300px', sm: '300px', md: '550px', lg: '550px' }}
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
          p={1}
          margin={2}
          variant="h1"
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
          sx={{
            fontSize: { xs: '20px', sm: '20px', md: '30px', lg: '30px' },
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
      </Box>
    </IconButton>
  );
};

export default ProjectCard;
