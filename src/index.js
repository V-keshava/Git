import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MoveDetails from './components/webpage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NextPage from './components/nextpage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <MoveDetails />
  //   {/* <App/> */}
  // </React.StrictMode>
  <BrowserRouter>
  {/* <MoveDetails/> */}
 
  <Routes>
  <Route path='/' element={<MoveDetails />}/>
    {/* <Route path='/next-page' element={<NextPage />}/> */}
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();