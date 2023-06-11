import { Box, Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function LinksAndCopyRight() {
  return (
    <Container
      sx={{
        position: 'relative',
        width: 10,
        height: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 2,
        backgroundColor: 'white',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50px',
        minWidth: '250px',
        minHeight: '70px',
        transition:
          'transform 0.2s ease-in-out, background-image 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
          backgroundColor: 'white',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '60%',
          height: '70%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton
          component={Link}
          to="https://github.com/123freezebrennan"
          target="_blank"
          sx={{
            width: 'inherit',
            height: 'auto',
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
          sx={{
            width: 'inherit',
            height: 'auto',
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
          sx={{
            width: 'inherit',
            height: 'auto',
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
          <a href="mailto:freezebrennan@gmail.com" target="_top">
            <img src="/Email.svg" alt="Email" width="100%" />
          </a>
        </IconButton>
      </Box>
    </Container>
  );
}

export default LinksAndCopyRight;
