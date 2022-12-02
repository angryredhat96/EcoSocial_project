import * as React from 'react';
import dayjs from 'dayjs';
import {
  CardActionArea, Stack, CardContent, Card, Button, Box, TextField,
} from '@mui/material';
import { Container } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { submitEvent } from '../../redux/actions/eventActions';

export default function EditPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
    tgLink: '',
  });
  // console.log(inputs);
  const [value, setValue] = React.useState(dayjs('2022-12-10T21:11:54'));
//   console.log('val', value);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const changeHandler = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345, marginTop: '15px', justifyContent: 'center', position: 'absolute', top: '10%', left: '40%',
        }}
        className="container"
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '36ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              dispatch(submitEvent(e, inputs, value));
              setInputs({
                title: '',
                description: '',
                tgLink: '',
              });
            }}
          >
            <TextField value={inputs.title} onChange={changeHandler} id="outlined-basic" name="title" label="Название ивента" variant="outlined" />
            <TextField value={inputs.description} onChange={changeHandler} id="outlined-basic" name="description" label="Описание ивента " variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <TextField value={inputs.tgLink} onChange={changeHandler} id="outlined-basic" name="tgLink" label="ТГ линк" variant="outlined" />
          </Box>
        </CardContent>
        <CardActionArea>
          <Button
            onClick={(e) => {
              dispatch(submitEvent(e, inputs, value));
              setInputs({
                title: '',
                description: '',
                tgLink: '',
              });
              navigate('/location/:id');
            }}
            variant="contained"
            component={Link}
            to="/"
            sx={{ backgroundColor: '#689f38', color: 'white' }}
            style={{ marginLeft: '125px', marginBottom: '18px' }}
          >
            Изменить
          </Button>
        </CardActionArea>
      </Card>
    </Container>
  );
}
