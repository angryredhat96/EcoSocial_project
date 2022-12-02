import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesThunk } from '../../redux/actions/placeActions';

export default function Map() {
  const places = useSelector((store) => store.place);
  console.log('places', places);
  const [myMap, setMyMap] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 7,
      }, {
        searchControlProvider: 'yandex#search',
        suppressMapOpenBlock: true,
      });
      // map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.controls.remove('zoomControl');
      setMyMap(map);
    });
  }, []);

  useEffect(() => {
    dispatch(getPlacesThunk());
    ymaps.ready(() => {
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass( // Создаём макет содержимого.
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );

      places.forEach((el) => {
        const coordinates = [el.latitude, el.longitude];
        console.log('coordinates', coordinates);
        const myPlacemarkWithContent = new ymaps.Placemark(coordinates, {
          hintContent: el.title,
          ballonContent: el.title,
          iconContent: '',
        }, {
          iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
          // iconImageHref: '../../../public/pngwing.com.png', // Своё изображение иконки метки.
          // iconImageSize: [40, 40], // Размеры метки.
          // iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
          iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentLayout: MyIconContentLayout, // Макет содержимого.
        });
        // console.log(myPlacemarkWithContent);
        myMap?.geoObjects
          .add(myPlacemarkWithContent);

        myPlacemarkWithContent.events.add(['click'], () => {
          window.location.href = `/location/${el.id}`;
        });
      });
    });
  }, [myMap]);

  return (
    <div
      id="map"
      className="map"
      style={{
        width: '600px', height: '400px', marginLeft: 'auto', marginRight: 'auto',
      }}
    />
  );
}
