/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Stack,
  Typography,
  Popover,
  Paper,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import { CloseRounded } from '@mui/icons-material';
import Projects from './Projects';
import LinksAndCopyRight from './LinksAndCopyright';
import Resume from './Resume';

const Welcome: React.FC = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverOpen(true);
    setAnchorEl(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(anchorEl);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };
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
      spacing={2}
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
          fontWeight: 500,
          fontFamily: 'Lato, sans-serif',
          width: { xs: '250px', sm: '600px' },
        }}
      >
        I am a computer science student emphasizing in full stack development,
        open source software, and quantum computing.
      </Typography>
      <Stack
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
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            scrollbarColor: 'transparent transparent',
          }}
        >
          <Paper
            sx={{
              p: 1,
              backgroundColor: '#08050f',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'solid white 2px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'transparent',
              },
              scrollbarColor: 'transparent transparent',
            }}
          >
            <IconButton
              onClick={handlePopoverClose}
              sx={{
                position: 'absolute',
                color: 'white',
                top: 10,
                right: 10,
              }}
            >
              <CloseRounded
                sx={{
                  width: { xs: '50px', sm: '50px', md: '75px', lg: '75px' },
                  height: { xs: '50px', sm: '50px', md: '75px', lg: '75px' },
                }}
              />
            </IconButton>
            <Resume />
          </Paper>
        </Popover>
        <Button
          href="#/blog"
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
      </Stack>
      <Projects />
      <LinksAndCopyRight />
    </Stack>
  );
};

export default Welcome;
