import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPlacesThunk } from '../../../redux/actions/placeActions';
import { setCoords } from '../../../redux/actions/coordsActions';

export default function MainPage() {
  const [newInput, setNewInput] = useState('');
  const navigate = useNavigate();
  const places = useSelector((store) => store.place);
  const placeCoords = useSelector((store) => store.coordinates);
  const [myMap, setMyMap] = useState(null);
  // const [coordinates, setCoordinates] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    function init() {
      const map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 12,
      }, {
        searchControlProvider: 'yandex#search',
        suppressMapOpenBlock: true,
      });
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.controls.remove('zoomControl');
      dispatch(getPlacesThunk());
      setMyMap(map);
    }
    ymaps.ready(init);
  }, []);

  useEffect(() => {
    // console.log(places, 'places');
    places?.forEach((el) => {
      const coordinates = [el.latitude, el.longitude];
      // console.log('coordinates', coordinates);
      const myPlacemarkWithContent = new ymaps.Placemark(coordinates, {
        balloonContent: `
                  <div class="balloon">
                    <div class="balloon__title">${el.title}</div>
                    <a href="/location/${el.id}">Подробнее</a>
                  </div>
                  `,
      }, {
        iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png', // Своё изображение иконки метки.
        iconImageSize: [40, 40], // Размеры метки.
        iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
        iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
      });
      myMap?.geoObjects.add(myPlacemarkWithContent);
    });
  }, [places]);

  myMap?.events.add('click', (e) => {
    if (!myMap.balloon.isOpen()) {
      const coords = e.get('coords');
      dispatch(setCoords(coords));
      // console.log(placeCoords, 'placeCoords');
      myMap.balloon.open(coords, {
        contentHeader: 'Событие!',
        contentBody: '<p>Кто-то щелкнул по карте.</p>'
                    + `<p>Координаты щелчка: ${[
                      coords[0].toPrecision(6),
                      coords[1].toPrecision(6),
                    ].join(', ')}</p>`,
        contentFooter: '<button type="button" id="addPlaceButton">Добавить место</button>',
      });
      setTimeout(() => {
        document.getElementById('addPlaceButton').addEventListener('click', () => {
          navigate('/location/add'); // ЛОГИКА КЛИКА ПО КНОПКЕ ЗДЕСЬ
        });
      }, 0);
    } else {
      myMap.balloon.close();
      // setDisplayNewMarker(false);
    }
  });

  // Обработка события, возникающего при щелчке
  // правой кнопки мыши в любой точке карты.
  // При возникновении такого события покажем всплывающую подсказку
  // // в точке щелчка.
  // myMap?.events.add('contextmenu', (e) => {
  //   myMap.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
  // });

  // // Скрываем хинт при открытии балуна.
  // myMap.events.add('balloonopen', (e) => {
  //   myMap.hint.close();
  // });
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
        {/* <div className="row">
          <TextField
            required
            id="outlined-required"
            sx={{ input: { color: 'orange' } }}
            label="Место"
            defaultValue=" "
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          /> */}
          {/* <Button onClick={() => console.log('add')} variant="contained" sx={{ backgroundColor: '#689f38', maxWidth: '10px' }} style={{ marginLeft: '15px', marginTop: '18px' }}>
            +
          </Button> */}
          {/* <AddIcon onClick={() => console.log('add')} /> */}
        {/* </div> */}
      </Box>
      <div style={{ alignContent: 'center', marginTop: '25px' }}>
        <div
          id="map"
          className="map"
          style={{
            width: '600px', height: '400px', marginLeft: 'auto', marginRight: 'auto',
          }}
        />
      </div>
    </>
  );
}
