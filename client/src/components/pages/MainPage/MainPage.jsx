import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function MainPage() {
  const [newInput, setNewInput] = useState('');
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        style={{ color: 'orange', marginTop: '20px', marginLeft: '360px' }}
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
          <Button onClick={() => console.log('add')} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px', marginTop: '18px' }}>
            Добавить место
          </Button>
        </div>
      </Box>
      <div>
        Карта
      </div>
    </>
  );
}
