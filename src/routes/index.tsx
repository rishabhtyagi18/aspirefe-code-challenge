import { Navigate, useRoutes } from 'react-router-dom';
import { FC, Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { JSX } from 'react/jsx-runtime';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import DashboardLayout from '../layouts/dashboard';

const Loadable = (Component: FC) => (props: JSX.IntrinsicAttributes) => {
   
    return (
      <Suspense
        fallback={
          <CircularProgress size="lg" />
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };

  export default function Router() {
    return useRoutes([
      {
        path: '/',
        element: <DashboardLayout />,
        children: [{path: '', element: <Navigate to="/cards" replace />}]
      },

      {
        path: '/cards',
        element: <DashboardLayout />,
        children: [{path: '', element: <CardsPage />}]
      },

        {
            path: '*',
            element: <LogoOnlyLayout />,
            children: [
              { path: '500', element: <Page500 /> },
              { path: '404', element: <NotFound /> },
              { path: '*', element: <Navigate to="/404" replace /> }
            ]
          },
    ]);
 
  }

  const CardsPage = Loadable(lazy(() => import('../pages/cards')));

  const NotFound = Loadable(lazy(() => import('../pages/Page404')));
  const Page500 = Loadable(lazy(() => import('../pages/Page500')));