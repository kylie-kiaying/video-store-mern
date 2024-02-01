import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteVideo = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteVideo = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/videos/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        alert('An error occured, please try again!');
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-8 text-3xl'>Delete Video</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col p-4 mx-auto border-2 w-[600px] border-sky-400 rounded-xl items-center'>
        <h3 className='text-2xl'>Are you sure you want to delete this video?</h3>

        <button 
          className='p-4 m-8 w-full bg-red-600 text-white'
          onClick={handleDeleteVideo}
        >
          Delete
        </button>
        </div>
    </div>
  )
}

export default DeleteVideo