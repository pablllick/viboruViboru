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
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [inits, setInits] = useState([]);
  useEffect(() => {
    axios('/api/inits').then(({ data }) => {
      setInits(data);
    });
  }, []);
  console.log(inits);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          user={user}
          logoutHandler={logoutHandler}
          filter={filter}
          search={search}
          setFilter={setFilter}
          setSearch={setSearch}
        />
      ),
      children: [
        {
          path: '/',
          element: (
            <MainPage
              user={user}
              inits={inits}
              filter={filter}
              search={search}
            />
          ),
        },
        {
          path: '/inits/:id',
          element: <OneInitPage user={user} />,
        },
        {
          element: <ProtectedRouter isAllowed={user.status === 'logged'} />,
          children: [
            {
              path: '/users/:id',
              element: <OneUserPage user={user} setUser={setUser} />,
            },
            {
              element: (
                <ProtectedRouter
                  isAllowed={
                    user.data?.fedDistrict &&
                    user.data?.region &&
                    user.data?.municipality
                  }
                />
              ),
              children: [
                {
                  path: '/inits/add',
                  element: <AddInitPage user={user} setInits={setInits} />,
                },
              ],
            },
          ],
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
