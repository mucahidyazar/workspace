import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const reactEl = document.getElementById('react');
const root = createRoot(reactEl);

import App from './App';
import { store } from './store';

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
