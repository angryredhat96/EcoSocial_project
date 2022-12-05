// import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

export default function Courusel({ ph }) {
  const photo = JSON.parse(ph.image);

  return (
    // <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-inner">
  // {photo && photo?.map((el) => (
    //       <div className="carousel-item active" key={el.id}>
    //         <img src={`http://localhost:3001/vid/${el}`} className="d-block w-100" alt="..." style={{ width: '300px', height: '500px' }} />
    //       </div>
    //     ))}
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true" />
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true" />
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    // <div>
    // <style>
    //   {`.custom-tag {
    //         max-width: 100%;
    //         height: 500px;
    //         background: black;
    //       }`}
    // </style>
    // </div>
    <div>
      <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
        {photo && photo?.map((el) => (
          <ImageListItem key={el}>
            <img
              src={`http://localhost:3001/vid/${el}`}
            //   srcSet={`http://localhost:3001/vid/${el}`}
              alt="..."
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
