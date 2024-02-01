import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowVideo = () => {
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/videos/${id}`)
      .then((response) => {
        setVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-8 text-3xl'>Video Details</h1>
      {loading ? (
        <Spinner /> 
      ) : (
        <div className='p-4 flex flex-col border-2 border-sky-400 rounded-xl w-fit'>
          <div className='my-4'>
            <span className='mr-4 text-gray-500 text-xl'>Id</span> 
            <span>{video._id}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-gray-500 text-xl'>Title</span> 
            <span>{video.title}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-gray-500 text-xl'>Director</span> 
            <span>{video.director}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-gray-500 text-xl'>Release Year</span> 
            <span>{video.releaseYear}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-gray-500 text-xl'>Create Time</span> 
            <span>{new Date(video.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-gray-500 text-xl'>Last Update Time</span> 
            <span>{new Date(video.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowVideo