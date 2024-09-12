import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRouter from './components/hoc/ProtectedRoute';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import AccountLoginPage from './components/pages/AccountLoginPage';
import AccountNewPage from './components/pages/AccountNewPage';
import useUser from './hooks/useUser';
import OneInitPage from './components/pages/OneInitPage';
import OneUserPage from './components/pages/OneUserPage';
import AddInitPage from './components/pages/AddInitPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user, setUser } =
    useUser();

  const [inits, setInits] = useState([]);
  useEffect(() => {
    axios('/api/inits').then(({ data }) => {
      setInits(data);
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <MainPage user={user} inits={inits} />,
        },
        {
          path: '/inits/:id',
          element: <OneInitPage user={user} />,
        },
        {
          path: '/users/:id',
          element: <OneUserPage user={user} setUser={setUser} />,
        },
        {
          path: '/inits/add',
          element: <AddInitPage user={user} setInits={setInits} />,
        },
        {
          element: <ProtectedRouter isAllowed={user.status !== 'logged'} />,
          children: [
            {
              path: '/account/new',
              element: <AccountNewPage signUpHandler={signUpHandler} />,
            },
            {
              path: '/account/login',
              element: <AccountLoginPage signInHandler={signInHandler} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
