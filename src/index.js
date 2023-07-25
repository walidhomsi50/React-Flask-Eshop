import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
 
import Moviedet from './moviedet';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  
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



