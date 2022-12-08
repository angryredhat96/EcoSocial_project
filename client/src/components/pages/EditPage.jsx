import * as React from 'react';
import dayjs from 'dayjs';
import {
  CardActionArea, Stack, CardContent, Card, Button, Box, TextField,
} from '@mui/material';
import { Container } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  asyncEdit, getEvents, getOneEvent, submitEvent,
} from '../../redux/actions/eventActions';

export default function EditPage() {
  const { id } = useParams();
  const event = useSelector((store) => store.events.find((el) => el?.id === Number(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
    tgLink: '',
  });

  React.useEffect(() => {
    dispatch(getOneEvent(id));
  }, []);

  React.useEffect(() => {
    if (event) {
      setInputs({ ...event });
    }
  }, [event]);
  // console.log(inputs);
  const [value, setValue] = React.useState(dayjs('2022-12-10T21:11:54'));
  //   console.log('val', value);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const changeHandler = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const clickHandler = (e) => {
    e.preventDefault();
    console.log('boje', inputs, value, id);
    dispatch(asyncEdit(id, inputs, value));
    setInputs({
      title: '',
      description: '',
      tgLink: '',
    });
    navigate(`/location/${event.placeId}`);
  };

  return (
    <Container sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
    >
      <Card
        sx={{
          maxWidth: 360, marginTop: '15px',
        }}
        className="container"
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '32ch' },
            }}
            noValidate
            autoComplete="off"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   console.log(inputs, value, id);
            //   dispatch(asyncEdit(inputs, value, id));
            //   setInputs({
            //     title: '',
            //     description: '',
            //     tgLink: '',
            //   });
            // }}
          >
            <TextField
              value={inputs.title}
              onChange={changeHandler}
              id="outlined-basic"
              name="title"
              label="Событие"
              variant="outlined"
              color="success"
              sx={{
                '& .MuiInputLabel-root': { color: 'green' },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'green' },
                },
              }}
            />
            <TextField
              value={inputs.description}
              onChange={changeHandler}
              name="description"
              label="Описание"
              id="outlined-multiline-static"
              multiline
              rows={6}
              defaultValue="Default Value"
              color="success"
              sx={{
                '& .MuiInputLabel-root': { color: 'green' },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'green' },
                },
              }}
            />
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
            <TextField
              value={inputs.tgLink}
              onChange={changeHandler}
              id="outlined-basic"
              name="tgLink"
              label="TG-link"
              variant="outlined"
              color="success"
              sx={{
                '& .MuiInputLabel-root': { color: 'green' },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'green' },
                },
              }}
            />
          </Box>
        </CardContent>
        <CardActionArea sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        >
          <Button
            type="submit"
            onClick={clickHandler}
            variant="outlined"
            sx={{ marginBottom: '10px' }}
            color="success"
          >
            Изменить
          </Button>
        </CardActionArea>
      </Card>
    </Container>
  );
}
