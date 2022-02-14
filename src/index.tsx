import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from "./routes";
import "./css/reset.css";
import "./css/normalize.css";
import "./css/index.css";


ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

