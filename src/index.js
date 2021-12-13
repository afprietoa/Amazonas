import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {AppRouter} from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
    <Provider store={store}>
     <AppRouter />
     </Provider>,
  document.getElementById('root')
);


