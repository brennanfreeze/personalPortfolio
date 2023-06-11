import { Button, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import ArrowRight from '@mui/icons-material/ArrowRight';

const GridItem = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  width: '40vw',
  height: '40vh',
  backgroundColor: '#08050f',
  borderRadius: '20px',
  border: '2px solid white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: theme.spacing(4),
  transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#08050f',
  },
  '@media (max-width: 500px)': {
    height: '40vh',
  },
}));
function Projects() {
  return (
    <Grid
      container
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: 'auto',
        height: 'auto',
        marginBottom: 5,
      }}
    >
      <Grid item>
        <GridItem
          component={Link}
          to="https://github.com/QCpython"
          target="_blank"
        >
          <Typography
            sx={{
              position: 'absolute',
              color: 'white',
              top: '5%',
              fontFamily: 'Alexandria, san-serif',
              fontSize: '3vw',
              fontWeight: 'semibold',
              marginBottom: 2,
              '@media (max-width: 500px)': {
                fontSize: '5vw',
                marginBottom: 1,
              },
            }}
          >
            QC.py
          </Typography>
          <Typography
            sx={{
              top: '26%',
              position: 'absolute',
              color: 'white',
              fontFamily: 'Montserrat, san-serif',
              margin: 2,
              fontSize: '1.1vw',
              height: '20vh',
              width: '80%',
              '@media (max-width: 500px)': {
                margin: 1.5,
                fontSize: '2.5vw',
              },
            }}
          >
            An open source python package simulating quantum computing and
            providing clean, simplistic visualizations that beginners can easily
            understand.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: '75%',
              height: 'auto',
              color: 'white',
              borderRadius: 8,
              backgroundColor: '#08050f',
              border: '2px solid white',
              top: '30%',
              marin: 3,
              transition:
                'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'white',
                border: '2px solid black',
                color: 'black',
                transform: 'scale(1.05)',
              },
              '@media (max-width: 500px)': {
                margin: 1.5,
                fontSize: '2.5vw',
                top: '42%',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '100%',
                '@media (max-width: 500px)': {
                  fontSize: '50%',
                },
              }}
            >
              Check it out
            </Typography>
            <ArrowRight />
          </Button>
        </GridItem>
      </Grid>
      {/* <Grid item>
        <GridItem
          component={Link}
          to="https://123freezebrennan.github.io/reactSortingVisual/"
          target="_blank"
        >
          <Typography
            sx={{
              position: 'absolute',
              color: 'white',
              top: '5%',
              fontFamily: 'Alexandria, san-serif',
              fontSize: '3vw',
              fontWeight: 'semibold',
              marginBottom: 2,
              '@media (max-width: 500px)': {
                fontSize: '5vw',
                marginBottom: 1,
              },
            }}
          >
            Sorting Array Algorithms
          </Typography>
          <Typography
            sx={{
              top: '26%',
              position: 'absolute',
              color: 'white',
              fontFamily: 'Montserrat, san-serif',
              margin: 2,
              fontSize: '1.1vw',
              height: '20vh',
              width: '80%',
              '@media (max-width: 500px)': {
                margin: 1.5,
                fontSize: '2.5vw',
              },
            }}
          >
            React.js based visualization of array based sorting algorithms to be
            implemented on an array.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: '75%',
              height: 'auto',
              color: 'white',
              borderRadius: 8,
              backgroundColor: '#08050f',
              border: '2px solid white',
              top: '30%',
              marin: 3,
              transition:
                'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'white',
                border: '2px solid black',
                color: 'black',
                transform: 'scale(1.05)',
              },
              '@media (max-width: 500px)': {
                margin: 1.5,
                fontSize: '2.5vw',
                top: '42%',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '100%',
                '@media (max-width: 500px)': {
                  fontSize: '50%',
                },
              }}
            >
              Check it out
            </Typography>
            <ArrowRight />
          </Button>
        </GridItem>
      </Grid> */}
    </Grid>
  );
}

export default Projects;
