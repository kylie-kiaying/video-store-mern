import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import CreateVideos from './components/CreateVideos.jsx';
import DeleteVideo from './components/DeleteVideo.jsx';
import EditVideo from './components/EditVideo.jsx';
import ShowVideo from './components/ShowVideo.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/create" element={<CreateVideos />} />
      <Route path="/videos/details/:id" element={<ShowVideo />} />
      <Route path="/videos/edit/:id" element={<EditVideo />} />
      <Route path="/videos/delete/:id" element={<DeleteVideo />} />
    </Routes>
  )
}

export default App