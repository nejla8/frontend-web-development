// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Owl Coffee
        </Typography>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/products" color="inherit">Products</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
