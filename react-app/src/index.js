import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Category from './controller/Category';
// import Expense from './controller/Expense';
// import User from './controller/User';
// import Home from './controller/Home';
import 'bootstrap/dist/css/bootstrap.css';
// import AppNavbar from './ components/AppNavbar';
import AppRouter from './ components/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
    {/* <AppNavbar/> */}
    {/* <Home /> */}
    {/* <Category /> */}
    {/* <Expense /> */}
    {/* <User /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
