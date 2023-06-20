/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography, Popover, Paper } from '@mui/material';
import React, { useState } from 'react';
import Projects from './Projects';
import LinksAndCopyRight from './LinksAndCopyright';
import Resume from './Resume';

const Welcome: React.FC = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Stack
      zIndex={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        top: 0,
      }}
      spacing={6}
    >
      <Typography
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
        Hi, I'm Brennan.
      </Typography>
      <Typography
        variant="h5"
        color="white"
        sx={{
          fontFamily: 'Lato, sans-serif',
          width: { xs: '250px', sm: '600px' },
        }}
      >
        I am a computer science student emphasizing in full stack development,
        open source software, and quantum computing.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          marginTop: { xs: 2, sm: 5 },
          gap: '2vh',
        }}
      >
        <Button
          variant="outlined"
          onClick={handlePopoverOpen}
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
            Resume
          </Typography>
        </Button>

        <Popover
          open={isPopoverOpen}
          onClose={handlePopoverClose}
          anchorReference="none"
          anchorPosition={{
            top: 100,
            left: 100,
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          }}
          PaperProps={{
            sx: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Paper
            sx={{
              width: 700,
              height: 700,
              p: 2,
              backgroundColor: 'black',
              border: 'white solid 2px',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Resume />
          </Paper>
        </Popover>
        <Button
          variant="contained"
          sx={{
            p: 1,
            width: { xs: '250px', sm: '275px' },
            fontFamily: 'Lato, sans-serif',
            fontSize: '100%',
            height: 'auto',
            color: 'white',
            backgroundColor: '#4b70ddff',
            borderRadius: 8,
            transition:
              'transform 0.2s ease-in-out, background-image 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              p: 1,
              fontFamily: 'Lato, sans-serif',
              fontSize: '100%',
              fontWeight: 'bold',
            }}
          >
            Blog
          </Typography>
        </Button>
      </Box>
      <Projects />
      <LinksAndCopyRight />
    </Stack>
  );
};

export default Welcome;
