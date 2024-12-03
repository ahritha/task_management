import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import Loading from './shared-ui/Loading';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);


