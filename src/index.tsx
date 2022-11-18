import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { configureStore } from './redux/configureStore';
import { Provider } from "react-redux";

//pr ke tous les endPoints start o meme endroit
axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.withCredentials = true;

const store = configureStore();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);


reportWebVitals();
