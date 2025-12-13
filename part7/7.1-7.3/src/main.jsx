import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { NotificationContextProvider } from './NotificationContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>
  </BrowserRouter>
);
