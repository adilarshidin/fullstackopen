import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';


const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Button color="inherit" component={Link} to="/anecdotes">
          anecdotes
        </Button>
        <Button color="inherit" component={Link} to="/create-new">
          create new
        </Button>
        <Button color="inherit" component={Link} to="/about">
          about
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
