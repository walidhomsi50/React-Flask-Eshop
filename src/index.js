import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './login';
import MediaCard from './test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/App" element={<App />} />
    <Route path="/test" element={<MediaCard />} />
  </Routes>
</Router>
  
);



/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: 'moviedet',
      element: <Moviedet />
    },
   ]
  },

]);*/



