import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import { imageUrl } from '../Constants/Url'
import axio_instance from '../../Instance_axios';
import YouTube from 'react-youtube';
import { API_KEY } from '../Constants/Constants';

const Rowpost = (props) => {
  const [movies,setMovies]=useState([])
  const [UrlId,setUrlId]=useState('')
  useEffect(()=> {
     axio_instance.get(props.url)
    .then(response=>{
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
    autoplay: 0,
    },
  };

  const handleMovie=(id)=>{
      axio_instance.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`).then(response=>{
        if (response.data.results.length!==0){
            setUrlId(response.data.results[0])}
        else {
          console.log('Data not exists')
        }
      })
      
  }

  return (
    <div className='rows'>
      <h2>{props.Title}</h2>
      <div className='posters'>
          {
           movies.map((movie)=>
            <img onClick={()=>handleMovie(movie.id) } className={props.isSmall ?'smPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt='Poster' />
             ) 
          }
      </div>
    { UrlId && <YouTube opts={opts} videoId={UrlId.key}/>}
    </div>
  )
}

export default Rowpost
