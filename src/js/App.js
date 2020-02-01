import React from "react";

import { BrowserRouter, Switch} from "react-router-dom";

import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

import ImageUpload from './ImageUpload';

const App = () => {
  return (
    <React.Fragment>  
      <ToastContainer />
      <h1>Extracto</h1>
      <ImageUpload />
    </React.Fragment>
  );
};
export default App;

