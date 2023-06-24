import { Box, IconButton, MenuItem, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const TopMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 1500);
  };
  return (
    <Stack
      p={2}
      direction="row"
      spacing={{ xs: '60%', sm: '400px', md: '650px', lg: '700px' }}
      justifyContent="space-between"
      position="fixed"
      zIndex={1000}
      sx={{
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <IconButton
        size="small"
        onClick={handleButtonClick}
        sx={{
          width: { xs: '70px', sm: '70px', md: '80px', lg: '80px' },
          height: { xs: '70px', sm: '70px', md: '80px', lg: '80px' },
          p: 0,
          position: 'relative',
          color: 'white',
          '&::before': {
            content: "''",
            position: 'absolute',
            inset: 0,
            borderRadius: '50px',
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 32,
              width: '100%',
              height: '100%',
              fontFamily: 'Montserrat, sans-serif',
              textAlign: 'center',
              backgroundColor: '#08050f',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isPressed ? 'Hi' : 'BF'}
          </Typography>
        </Box>
      </IconButton>
      <IconButton
        aria-describedby={open ? 'basic-popover' : undefined}
        onClick={handleClick}
        className={
          open
            ? 'hamburger hamburger--spring is-active'
            : 'hamburger hamburger--spring'
        }
        size="small"
        sx={{
          width: { xs: '70px', sm: '70px', md: '80px', lg: '80px' },
          height: { xs: '70px', sm: '70px', md: '80px', lg: '80px' },
          p: 0,
          position: 'relative',
          color: 'white',
          '&::before': {
            content: "''",
            position: 'absolute',
            inset: 0,
            borderRadius: '50px',
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            className="hamburger-box"
            borderRadius="50px"
            sx={{
              width: '100%',
              height: '100%',
              fontSize: 32,
              fontFamily: 'Montserrat, sans-serif',
              textAlign: 'center',
              backgroundColor: '#08050f',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              className="hamburger-inner"
              sx={{ position: 'relative', transform: 'translate(0%, -250%)' }}
            />
          </Box>
        </Box>
      </IconButton>
      <Popover
        disableScrollLock
        id="basic-popover"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{
            p: 2,
            width: { xs: '150px', sm: '200px', md: '200px', lg: '200px' },
            backgroundColor: '#08050f',
            border: 'solid white 2px',
            borderRadius: '25px',
            color: 'white',
          }}
        >
          <MenuItem component={Link} to="/" onClick={handleClose}>
            <Typography
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 28,
                fontWeight: 'bold',
              }}
            >
              Home
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/blog" onClick={handleClose}>
            <Typography
              sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28 }}
            >
              Blog
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28 }}
            >
              <a
                style={{ color: 'white', textDecoration: 'none' }}
                href="mailto:freezebrennan1@gmail.com"
                target="_top"
              >
                Contact
              </a>
            </Typography>
          </MenuItem>
        </Box>
      </Popover>
    </Stack>
  );
};

export default TopMenu;
