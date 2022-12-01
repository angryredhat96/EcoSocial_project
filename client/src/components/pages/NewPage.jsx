import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Grid, CardActions } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NewPage() {
  return (
  <Container>
    <Card sx={{ maxWidth: 345, marginTop: '15px', justifyContent: 'center', position: 'absolute', top: '10%', left: '40%' }} className='container'>
          <CardContent>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '36ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Название ивента" variant="outlined" />
      <TextField id="outlined-basic" label="Описание ивента " variant="outlined" />
      <TextField id="outlined-basic" label="Дата ивента" variant="outlined" />
      <TextField id="outlined-basic" label="ТГ линк" variant="outlined" />
    </Box>
        </CardContent>
      <CardActionArea>
        <Button onClick={() => console.log('Join')} variant="contained" sx={{ backgroundColor: '#689f38', color: "white" }} style={{ marginLeft: '125px', marginBottom: '18px' }}>
          Создать
        </Button>
      </CardActionArea>
    </Card>
    </Container>
  );
}