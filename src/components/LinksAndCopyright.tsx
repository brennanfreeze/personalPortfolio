import { IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function LinksAndCopyRight() {
  return (
    <Stack
      zIndex={2}
      width={{ xs: '275px', sm: '300px', md: '350px', lg: '350px' }}
      height={{ xs: '60px', sm: '60px', md: '80px', lg: '80px' }}
      p={1}
      sx={{
        borderRadius: '50px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#08050f',
        border: 'solid white 2px',
        transition:
          'transform 0.2s ease-in-out, background-image 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
        },
        bottom: 0,
        leftMargin: 0,
        rightMargin: 0,
      }}
    >
      <IconButton
        component={Link}
        to="https://github.com/123freezebrennan"
        target="_blank"
        disableRipple
        sx={{
          width: { xs: '90px', sm: '100px', md: '120px', lg: '120px' },
          height: 'auto',
          filter: 'invert(1)',
          transition:
            'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <img src="/Github.svg" alt="GitHub" width="100%" />
      </IconButton>
      <IconButton
        component={Link}
        to="https://www.linkedin.com/in/brennan-freeze-887538202/"
        target="_blank"
        disableRipple
        sx={{
          width: { xs: '90px', sm: '100px', md: '120px', lg: '120px' },
          height: 'auto',
          filter: 'invert(1)',
          transition:
            'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <img src="/Linkedin.svg" alt="Linkedin" width="100%" />
      </IconButton>
      <IconButton
        disableRipple
        sx={{
          width: { xs: '90px', sm: '100px', md: '120px', lg: '120px' },
          height: 'auto',
          filter: 'invert(1)',
          transition:
            'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
        key="Email"
        component="a"
        href="freezebrennan@gmail.com"
      >
        <a href="mailto:freezebrennan1@gmail.com" target="_top">
          <img src="/Email.svg" alt="Email" width="100%" />
        </a>
      </IconButton>
    </Stack>
  );
}

export default LinksAndCopyRight;
