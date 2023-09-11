import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import requests from '../api/request';

const Banner = () => {

  const [movie, setmovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    // 현재 상영중인 영화 정보를 가져오기(여러영화)
    const response = await axios.get(requests.fetchNowPlaying);
    // 여려 영화 중 하나의 id 가져오기
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보를 포함)
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos"}
    })
    setmovie(movieDetail);
  }
 
  return (
    <div>Banner</div>
  )
}

export default Banner