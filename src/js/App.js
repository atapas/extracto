import React from "react";

import { BrowserRouter, Switch} from "react-router-dom";

import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>  
      <ToastContainer />
      <h1>Extracto</h1>
    </React.Fragment>
  );
};
export default App;

