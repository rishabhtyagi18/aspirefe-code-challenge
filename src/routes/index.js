import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import DashboardLayout from '../layouts/dashboard';

const Loadable = (Component) => (props) => {
    return (_jsx(Suspense, { fallback: _jsx(CircularProgress, { size: "lg" }), children: _jsx(Component, { ...props }) }));
};

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: _jsx(DashboardLayout, {}),
            children: [{ path: '', element: _jsx(HomePage, {}) }]
        },
        {
            path: '/cards',
            element: _jsx(DashboardLayout, {}),
            children: [{ path: '', element: _jsx(CardsPage, {}) }]
        },
        {
            path: '*',
            element: _jsx(LogoOnlyLayout, {}),
            children: [
                { path: '500', element: _jsx(Page500, {}) },
                { path: '404', element: _jsx(NotFound, {}) },
                { path: '*', element: _jsx(Navigate, { to: "/404", replace: true }) }
            ]
        },
    ]);
}

const HomePage = Loadable(lazy(() => import('../pages/home')));
const CardsPage = Loadable(lazy(() => import('../pages/cards')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
