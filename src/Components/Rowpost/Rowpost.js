import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import { imageUrl } from '../Constants/Url'
import axio_instance from '../../Instance_axios';

const Rowpost = (props) => {
  const [movies,setMovies]=useState([])

  useEffect(()=> {
     axio_instance.get(props.url)
    .then(response=>{
      setMovies(response.data.results)
    })
  },[])

  return (
    <div className='rows'>
      <h2>{props.Title}</h2>
      <div className='posters'>
          {
           movies.map((movie)=>
            <img className={props.isSmall ?'smPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt='Poster' />
             ) 
          }
      </div>
    </div>
  )
}

export default Rowpost
