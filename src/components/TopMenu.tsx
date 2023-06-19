import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/system';

function TopMenu() {
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
      spacing={{ xs: '50%', sm: '70%', md: '75vh', lg: '80vh' }}
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
        sx={{
          width: '80px',
          height: '80px',
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
          display: 'flex', // Added display: flex
          alignItems: 'center', // Added alignItems: center
          justifyContent: 'center', // Added justifyContent: center
        }}
        onClick={handleButtonClick}
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
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={
          open
            ? 'hamburger hamburger--spring is-active'
            : 'hamburger hamburger--spring'
        }
        size="small"
        sx={{
          width: '80px',
          height: '80px',
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
          display: 'flex', // Added display: flex
          alignItems: 'center', // Added alignItems: center
          justifyContent: 'center', // Added justifyContent: center
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
            <Box className="hamburger-inner" sx={{position: 'relative', transform: 'translate(1%, -250%)',}} />
          </Box>
        </Box>
      </IconButton>
      <Menu
        disableScrollLock
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
      </Menu>
    </Stack>
  );
}

export default TopMenu;
