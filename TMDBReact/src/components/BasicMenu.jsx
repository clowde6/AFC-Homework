import {Button, Menu, MenuItem, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color:"white"}} />
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/" sx={{textDecoration: "none", color: "black"}}>
          Home
          </Link>
          </MenuItem>

          {/* Create form component */}
          {/* /employee/new */}
        <MenuItem onClick={handleClose}>
        <Link href="/movies/new" sx={{textDecoration: "none", color: "black"}}>
        Now Playing
          </Link>
          </MenuItem>
      </Menu>
    </div>
  );
}