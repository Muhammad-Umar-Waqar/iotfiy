import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function AddDeviceSpeedDial() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [deviceMac, setDeviceMac] = React.useState('');

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setDeviceMac(''); // Clear input after closing
  };

  const handleSave = () => {
    console.log('Device MAC Address:', deviceMac);
    alert(`Device MAC Address Saved: ${deviceMac}`);
    handleClosePopover();
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: 'relative' }}>
      <SpeedDial
        ariaLabel="Add New Device"
        icon={<SpeedDialIcon  openIcon={<AddIcon />} />}
        onClick={handleOpenPopover}
        
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: 300 }}>
          <Typography variant="h6" gutterBottom>
            Enter Device MAC Address
          </Typography>
          <TextField
            fullWidth
            label="MAC Address"
            variant="outlined"
            value={deviceMac}
            onChange={(e) => setDeviceMac(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button variant="outlined" onClick={handleClosePopover}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
