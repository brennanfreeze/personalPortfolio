import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRight from '@mui/icons-material/ArrowRight';

function Projects() {
  return (
    <Stack
      spacing={8}
      width="90%"
      justifyContent="center"
      height="auto"
      alignItems="center"
      zIndex={2}
      color="white"
      margin="auto"
      sx={{
        fontFamily: 'Lato, san-serif',
      }}
    >
      <IconButton
        component={Link}
        to="https://github.com/QCpython"
        target="_blank"
        sx={{
          width: { xs: '80%', sm: '80%', md: '60%', lg: '62vh' },
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
          width="99%"
          height="99%"
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
              fontSize: { xs: '5vh', sm: '5vh', lg: '6vh', xl: '6vh' },
            }}
          >
            QC.py
          </Typography>
          <Typography
            p={1}
            margin={2}
            sx={{
              fontSize: { xs: '2vh', sm: '2vh', md: '3vh', lg: '3vh' },
            }}
          >
            Open source quantum computing Python library.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              p: 1,
              marginBottom: 5,
              width: '25vh',
              height: 'auto',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Lato, san-serif',
              borderRadius: 8,
              backgroundColor: '#08050f',
              border: '2px solid white',
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
                fontSize: '100%',
                fontFamily: 'Lato, san-serif',
                width: '30vh',
                height: 'auto',
                fontWeight: 'bold',
              }}
            >
              Check it out
            </Typography>
            <ArrowRight />
          </Button>
        </Box>
      </IconButton>
      <IconButton
        component={Link}
        to="https://123freezebrennan.github.io/reactSortingVisual/"
        target="_blank"
        sx={{
          width: { xs: '80%', sm: '80%', md: '60%', lg: '62vh' },
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
          width="99%"
          height="99%"
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
              fontSize: { xs: '5vh', sm: '5vh', lg: '6vh', xl: '6vh' },
            }}
          >
            React Sorting
          </Typography>
          <Typography
            p={1}
            margin={2}
            sx={{
              fontSize: { xs: '2vh', sm: '2vh', md: '3vh', lg: '3vh' },
            }}
          >
            Visualization of array based sorting algorithms.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              p: 1,
              marginBottom: 5,
              width: '25vh',
              height: 'auto',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Lato, san-serif',
              borderRadius: 8,
              backgroundColor: '#08050f',
              border: '2px solid white',
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
                fontSize: '100%',
                fontFamily: 'Lato, san-serif',
                width: '30vh',
                height: 'auto',
                fontWeight: 'bold',
              }}
            >
              Check it out
            </Typography>
            <ArrowRight />
          </Button>
        </Box>
      </IconButton>
      <IconButton
        component={Link}
        to="https://github.com/123freezebrennan/A-Star-Algorithm-Visual"
        target="_blank"
        sx={{
          width: { xs: '80%', sm: '80%', md: '60%', lg: '62vh' },
          p: 0,
          position: 'relative',
          '&::before': {
            content: "''",
            position: 'absolute',
            inset: 0,
            borderRadius: '25px',
            padding: '2px',
            background:
              'linear-gradient(45deg, #1c6bc4ff 15%, #8b2d84ff 65%, #af186eff 98%)',
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
          width="99%"
          height="99%"
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
              fontSize: { xs: '5vh', sm: '5vh', lg: '6vh', xl: '6vh' },
            }}
          >
            A* Pathfinding
          </Typography>
          <Typography
            p={1}
            margin={2}
            sx={{
              fontSize: { xs: '2vh', sm: '2vh', md: '3vh', lg: '3vh' },
            }}
          >
            A Python implemented A* search algorithm.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              p: 1,
              marginBottom: 5,
              width: '25vh',
              height: 'auto',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Lato, san-serif',
              borderRadius: 8,
              backgroundColor: '#08050f',
              border: '2px solid white',
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
                fontSize: '100%',
                fontFamily: 'Lato, san-serif',
                width: '30vh',
                height: 'auto',
                fontWeight: 'bold',
              }}
            >
              Check it out
            </Typography>
            <ArrowRight />
          </Button>
        </Box>
      </IconButton>
      <IconButton
        component={Link}
        to="https://github.com/123freezebrennan/OpenVINO-DashBoard-Edge-AI"
        target="_blank"
        sx={{
          width: { xs: '80%', sm: '80%', md: '60%', lg: '62vh' },
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
          width="99%"
          height="99%"
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
            variant="h1"
            margin={2}
            textAlign="center"
            sx={{
              fontSize: { xs: '5vh', sm: '5vh', lg: '6vh', xl: '6vh' },
            }}
          >
            CV Dashboard Camera
          </Typography>
          <Typography
            p={1}
            margin={2}
            sx={{
              fontSize: { xs: '2vh', sm: '2vh', md: '3vh', lg: '3vh' },
            }}
          >
            OpenVINO computer vision model for road traffic.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              p: 1,
              marginBottom: 5,
              width: '25vh',
              height: 'auto',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Lato, san-serif',
              borderRadius: 8,
              backgroundColor: '#08050f',
              border: '2px solid white',
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
                fontSize: '100%',
                fontFamily: 'Lato, san-serif',
                width: '30vh',
                height: 'auto',
                fontWeight: 'bold',
              }}
            >
              Check it out
            </Typography>
            <ArrowRight />
          </Button>
        </Box>
      </IconButton>
    </Stack>
  );
}

export default Projects;
