import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Stateprovider } from "./Stateprovider";
import reducer, { initialState } from "./reducer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stateprovider initialState={initialState} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>
)
