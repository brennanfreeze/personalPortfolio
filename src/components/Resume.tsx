import { Box, Stack, Typography } from '@mui/material';
import portrait from '../assets/portrait.jpg';

const Resume: React.FC = () => {
  return (
    <Stack
      spacing={4}
      sx={{
        width: '700px',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '250px',
          height: '250px',
          position: 'relative',
          color: 'white',
        }}
      >
        <Box
          sx={{
            width: '244px',
            height: '244px',
            background: `url(${portrait})`,
            backgroundSize: 'cover',
            borderRadius: '50%',
            border: '#08050f solid 4px',
          }}
        />
      </Box>
      <Typography>Languages</Typography>

      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ marginRight: 2 }}>
          <Typography>Python</Typography>
        </Box>
        <Box sx={{ marginRight: 2 }}>
          <Typography>C++</Typography>
        </Box>
        <Box>
          <Typography>Java</Typography>
        </Box>
      </Stack>
      <Typography>Technologies</Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ marginRight: 2 }}>
          <Typography>Python</Typography>
        </Box>
        <Box sx={{ marginRight: 2 }}>
          <Typography>C++</Typography>
        </Box>
        <Box>
          <Typography>Java</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Resume;
