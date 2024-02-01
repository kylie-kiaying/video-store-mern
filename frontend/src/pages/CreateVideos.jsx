import React, { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateVideos = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveVideo = () => {
    const data = {
      title,
      director,
      releaseYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/videos', data)
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
      <h1 className='my-8 text-3xl'>Create Video</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col p-4 mx-auto border-2 w-[600px] border-sky-400 rounded-xl'>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='px-4 py-2 w-full border-2 border-sky-400 rounded-md'
          />
        </div>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Director</label>
          <input
            type='text'
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className='px-4 py-2 w-full border-2 border-sky-400 rounded-md'
          />
        </div>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Release Year</label>
          <input
            type='text'
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className='px-4 py-2 w-full border-2 border-sky-400 rounded-md'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveVideo}>
          Save
        </button>
      </div>
     </div>
  )
}

export default CreateVideos