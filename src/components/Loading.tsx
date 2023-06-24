import { CircularProgress, Stack, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const LoadingState: React.FC = () => {
  const boxStyles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    zIndex: 9999,
    backgroundColor: '#08050f',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  const circularProgressStyles: SxProps = {
    color: 'white',
    width: '100vh',
    height: '100vh',
    padding: '10vh',
  };

  return (
    <Stack sx={boxStyles}>
      <CircularProgress sx={circularProgressStyles} />
      <Typography
        variant="h3"
        sx={{
          p: 1,
          fontFamily: 'Lato, sans-serif',
          height: 'auto',
          textAlign: 'center',
        }}
      >
        Loading, please wait...
      </Typography>
    </Stack>
  );
};

export default LoadingState;
