import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; 
import Info from '../cobonent/Info';
import NotFound from '../cobonent/NotFound'; 
import Login from '../cobonent/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <NotFound />, 
    children: [
      {
        path: 'info',
        element: <Info />, 
      },
      {
        path: 'login',
        element: <Login></Login>, 
      },
    ],
  },
]);

export default router;