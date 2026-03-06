import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

export const router = createBrowserRouter([
  { path: '/', element: <Layout />, 

    children: [ 
      { path: '/', element: <Home />, },
      { path: 'movie/:id', element: <MovieDetail />, },
    ],
  },
]);
