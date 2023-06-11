import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { Container } from '@mui/system';

function TopMenu() {
  const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Alexandria&family=Montserrat:wght@500&family=Outfit:wght@100&display=swap');
`;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        position: 'fixed',
        zIndex: 999,
        width: '100vw',
        height: '10vh',
        right: 0,
        left: 0,
        top: 30,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          marginRight: 'max(100px, calc(50% + 10vw))',
          width: 60,
          height: 60,
          backgroundColor: 'white',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#08050f',
          '@media (max-width: 500px)': {
            marginRight: 'max(100px, calc(50%))',
          },
          transition:
            'transform 0.2s ease-in-out, background-image 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'white',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 35,
            fontStyle: 'Montserrat, sans-serfif',
            textAlign: 'center',
            fontWeight: 'semi-bold',
          }}
        >
          BF
        </Typography>
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
        sx={{
          position: 'absolute',
          marginLeft: 'max(100px, calc(50% + 10vw))',
          width: 60,
          height: 60,
          backgroundColor: 'white',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '@media (max-width: 500px)': {
            marginLeft: 'max(100px, calc(50%))',
          },
          transition:
            'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'white',
            opacity: 1,
          },
        }}
      >
        <span
          className="hamburger-box"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className="hamburger-inner" />
        </span>
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
    </Container>
  );
}

export default TopMenu;
