import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Map from '../Map';

export default function MainPage() {
  const [newInput, setNewInput] = useState('');
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        style={{
          color: 'orange',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <div className="row">
          <TextField
            required
            id="outlined-required"
            sx={{ input: { color: 'orange' } }}
            label="Место"
            defaultValue=" "
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          />
          <Button onClick={() => console.log('add')} variant="contained" sx={{ backgroundColor: '#689f38', maxWidth: '10px' }} style={{ marginLeft: '15px', marginTop: '18px' }}>
            +
          </Button>
          {/* <AddIcon onClick={() => console.log('add')} /> */}
        </div>
      </Box>
      <div style={{ alignContent: 'center' }}>
        <Map />
      </div>
    </>
  );
}
