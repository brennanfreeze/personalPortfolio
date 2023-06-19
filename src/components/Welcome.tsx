import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Projects from './Projects';
import LinksAndCopyRight from './LinksAndCopyright';

function Welcome() {
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
          width: { xs: '85%', sm: '40vh', md: '61vh', lg: '70vh' },
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
          sx={{
            p: 1,
            width: { xs: '35vh', sm: '25vh' },
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
              height: 'auto',
              fontWeight: 'bold',
            }}
          >
            Resume
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            p: 1,
            width: { xs: '35vh', sm: '25vh' },
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
              height: 'auto',
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
}

export default Welcome;
