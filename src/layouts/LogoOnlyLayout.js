import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Logo from '../components/Logo';

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    left: 0,
    lineHeight: 0,
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3, 3, 0),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5, 5, 0)
    }
}));

export default function LogoOnlyLayout() {
    return (_jsxs(_Fragment, { children: [_jsx(HeaderStyle, { children: _jsx(RouterLink, { to: "/", children: _jsx(Logo, { sx: { height: '56px' } }) }) }), _jsx(Outlet, {})] }));
}
