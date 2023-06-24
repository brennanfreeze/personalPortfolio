import { Divider, Stack, Typography } from '@mui/material';
import portrait from '../assets/portrait.jpg';
import c from '../assets/languages/c.svg';
import csharp from '../assets/languages/csharp.svg';
import golang from '../assets/languages/golang.svg';
import java from '../assets/languages/java.svg';
import javascript from '../assets/languages/javascript.svg';
import python from '../assets/languages/python.svg';
import typescript from '../assets/languages/typescript.svg';
import react from '../assets/technology/react.svg';
import django from '../assets/technology/django.svg';
import mongodb from '../assets/technology/mongodb.svg';
import chakra from '../assets/technology/chakra.svg';
import mui from '../assets/technology/mui.svg';
import nodejs from '../assets/technology/nodejs.svg';

const Resume: React.FC = () => {
  return (
    <Stack
      p={1}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        overflow: 'auto' /* Enable scrolling */,
        '&::-webkit-scrollbar': {
          background: 'transparent' /* Hide the scrollbar */,
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent' /* Hide the scrollbar thumb */,
        },
        scrollbarColor: 'transparent transparent' /* Hide the scrollbar */,
      }}
    >
      <Stack
        sx={{
          width: { xs: '150px', sm: '150px', md: '250px', lg: '250px' },
          height: { xs: '150px', sm: '150px', md: '250px', lg: '250px' },
          background: `url(${portrait})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          border: '#08050f solid 4px',
        }}
      />

      <Typography
        p={1}
        margin={1}
        variant="h1"
        textAlign="center"
        sx={{
          fontSize: { xs: '25px', sm: '25px', md: '40px', lg: '40px' },
        }}
      >
        Languages
      </Typography>
      <Stack
        p={2}
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${c})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${csharp})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${javascript})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${typescript})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${java})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${python})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${golang})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
      </Stack>
      <Divider sx={{ width: '200px', backgroundColor: 'white' }} />
      <Typography
        p={2}
        variant="h1"
        textAlign="center"
        sx={{
          fontSize: { xs: '25px', sm: '25px', md: '40px', lg: '40px' },
        }}
      >
        Technology
      </Typography>
      <Stack
        p={2}
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${chakra})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${mui})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${react})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${nodejs})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${django})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
        <Stack
          sx={{
            width: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            height: { xs: '30px', sm: '50px', md: '70px', lg: '70px' },
            background: `url(${mongodb})`,
            backgroundSize: 'cover',
            border: '#08050f solid 4px',
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Resume;
