import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';

// Redux
import { Provider } from 'react-redux'
import Store from './app/Store';

import App from './App'
import './index.css';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
    <Toaster position='top-center' reverseOrder={false} />
    <App />
  </Provider>
)