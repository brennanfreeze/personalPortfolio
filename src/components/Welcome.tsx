import { Box, Button, Container, Typography } from '@mui/material';

function Welcome() {
  const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Alexandria&family=Montserrat:wght@500&family=Outfit:wght@100&display=swap');
`;
  return (
    <Container
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        textAlign: 'center',
        top: -125,
        flexDirection: 'column',
        width: '70%',
        margin: 'auto',
      }}
    >
      <style>{fontStyles}</style>
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Alexandria, san-serif',
          backgroundImage: 'linear-gradient(150deg, #4b70dd 25%, #ce40ad 70%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5em',
          fontWeight: 'bold',
        }}
      >
        Hi, I'm Brennan.
      </Typography>
      <Typography
        position="relative"
        variant="h6"
        color="white"
        sx={{
          fontFamily: 'Montserrat, san-serif',
        }}
      >
        I like solving difficult problems in full stack development, open source
        projects, and quantum computing.
      </Typography>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        flexDirection="row"
        marginTop="5vh"
        sx={{
          gap: '2vw',
          width: '100%',
          justifyContent: 'center',
          marginTop: 5,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: '30vh',
            height: 'auto',
            color: 'white',
            borderRadius: 8,
            backgroundColor: '#08050f',
            border: '2px solid white',
            '&:hover': {
              backgroundColor: 'white',
              border: '2px solid black',
              color: 'black',
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '90%',
            }}
          >
            Resume
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '30vh',
            height: 'auto',
            color: 'white',
            backgroundColor: '#4b70dd',
            borderRadius: 8,
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <Typography
            sx={{
              p: 1,
              fontWeight: 'bold',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '90%',
            }}
          >
            Blog
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default Welcome;
