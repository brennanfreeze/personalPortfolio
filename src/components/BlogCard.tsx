/* eslint-disable react/no-array-index-key */
import { ArrowRight, CloseRounded } from '@mui/icons-material';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface BlogProps {
  title: string;
  date: string;
  tech: string;
  content: string;
}

const BlogCard: React.FC<BlogProps> = ({ title, date, tech, content }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverOpen(true);
    setAnchorEl(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(anchorEl);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };
  return (
    <Grid item>
      <IconButton
        onClick={handlePopoverOpen}
        disableFocusRipple
        disableTouchRipple
        sx={{
          position: 'relative',
          width: { xs: '250px', sm: '250px', md: '300px', lg: '300px' },
          height: { xs: '400px', sm: '400px', md: '280px', lg: '280px' },
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
                top: { xs: 100, sm: 100, md: 60, lg: 60 },
                background: 'linear-gradient(transparent 70px, #08050f)',
              },
            }}
          >
            {`${content.split(' ').slice(0, 30).join(' ')}...`}
          </Typography>
        </Stack>

        <Button
          disableFocusRipple
          disableTouchRipple
          variant="text"
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 10,
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
      <Popover
        open={isPopoverOpen}
        onClose={handlePopoverClose}
        anchorReference="none"
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}
        slotProps={{
          paper: {
            sx: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '570px', sm: '570px', md: '800px', lg: '800px' },
              height: { xs: '700px', sm: '700px', md: '600px', lg: '600px' },
              border: 'white solid 2px',
              borderRadius: '25px',
              backgroundColor: '#08050f',
              '&::-webkit-scrollbar': {
                background: 'transparent',
                display: 'none',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'transparent',
              },
            },
          },
        }}
      >
        {' '}
        <IconButton
          onClick={handlePopoverClose}
          sx={{
            position: 'absolute',
            color: 'white',
            right: 0,
            top: 0,
            zIndex: 10,
          }}
        >
          <CloseRounded
            sx={{
              width: '30px',
              height: '30px',
            }}
          />
        </IconButton>
        <Stack
          p={2}
          m={2}
          spacing={2}
          sx={{
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ fontWeight: 'bold', fontFamily: 'Lato, sans-serif' }}
          >
            {title}
          </Typography>
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <Typography textAlign="center">{date}</Typography>
          <Typography
            p={1}
            margin={1}
            textAlign="center"
            sx={{ fontFamily: 'Lato, sans-serif' }}
          >
            {tech}
          </Typography>
          <Divider sx={{ width: '150px' }} color="white" />
          {content.split(/(?<=[.?!])\s/).map((line, index) => (
            <Typography
              key={index}
              textAlign="left"
              width="95%"
              sx={{
                fontFamily: 'Lato, sans-serif',
              }}
            >
              {line.trim()} <br />
              <br />
            </Typography>
          ))}
        </Stack>
      </Popover>
    </Grid>
  );
};

export default BlogCard;
