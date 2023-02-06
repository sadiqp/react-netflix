import React, { useEffect, useState } from 'react'
import'./Banner.css'
import  {API_KEY}  from '../Constants/Constants';
import { imageUrl } from '../Constants/Url';
import axio_instance from '../../Instance_axios';

function Banner() {

  const [movies,setMovies]=useState([])
  
  useEffect(() => {
    axio_instance.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovies(response.data.results[0]);
    });
  }, []);

  return (

    <div  style={{backgroundImage:`url(${movies ? imageUrl+movies.backdrop_path : ""})`}}
     className='banner'>
      <div className='content'>
        <h1 className='movie-title'>{movies ? movies.title : ""}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movies ? movies.overview : ""}</h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
  );
}

export default Banner
