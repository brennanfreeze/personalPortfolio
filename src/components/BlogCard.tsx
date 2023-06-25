import { ArrowRight } from '@mui/icons-material';
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

interface BlogProps {
  title: string;
  date: string;
  tech: string;
  content: string;
}

const BlogCard: React.FC<BlogProps> = ({ title, date, tech, content }) => {
  return (
    <Grid item>
      <IconButton
        disableFocusRipple
        disableTouchRipple
        sx={{
          width: { xs: '250px', sm: '250px', md: '300px', lg: '300px' },
          height: { xs: '350px', sm: '350px', md: '300px', lg: '300px' },
          backgroundColor: '#08050f',
          color: 'white',
          borderRadius: '25px',
          transition:
            'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: '#08050f',
          },
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
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Stack
          margin="20px"
          spacing="10px"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <Typography
            width="90%"
            variant="h5"
            textAlign="left"
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              fontFamily: 'Lato, san-serif',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Typography
            width="100%"
            textAlign="left"
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
              fontFamily: 'Lato, san-serif',
            }}
          >
            {date} - {tech}
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              margin: 1,
              wordWrap: 'break-word',
              textAlign: 'left',
              fontFamily: 'Lato, san-serif',
              '&::before': {
                content: '""',
                margin: 1,
                height: { xs: '75%', sm: '75%', md: '70%', lg: '70%' },
                width: '100%',
                position: 'absolute',
                left: -10,
                top: 70,
                background: 'linear-gradient(transparent 50px, #08050f)',
              },
            }}
          >
            {`${content.split(' ').slice(0, 25).join(' ')}...`}
          </Typography>
        </Stack>

        <Button
          disableFocusRipple
          disableTouchRipple
          variant="text"
          sx={{
            position: 'absolute',
            marginTop: 6,
            left: 10,
            bottom: 10,
            p: 2,
            height: 'auto',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Lato, san-serif',
            fontSize: '100%',
            transition:
              'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              backgroundColor: 'transparent',
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Lato, san-serif',
              height: 'auto',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            Read More
            <ArrowRight />
          </Typography>
        </Button>
      </IconButton>
    </Grid>
  );
};

export default BlogCard;
