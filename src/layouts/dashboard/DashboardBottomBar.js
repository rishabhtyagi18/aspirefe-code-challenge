import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import _ from 'lodash';

const APPBAR_MOBILE = 56;
const RootStyle = styled(AppBar)(({ theme }) => ({
    backdropFilter: 'blur(6px)',
    top: 'auto',
    bottom: 0,
    backgroundColor: 'white',
    boxShadow: '0 -3pt 6pt 0 #00000014',
    height: 56,
}));
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    justifyContent: 'space-between',
    padding: '8px 30px',
}));
const navItems = [
    {
        key: 'home',
        route: '/',
        name: 'Home',
        icon: '/icons/aspire-selected.svg'
    },
    {
        key: 'card',
        route: '/cards',
        name: 'Cards',
        icon: '/icons/card-bottom.svg'
    },
    {
        key: 'payments',
        route: '/payment',
        name: 'Payments',
        icon: '/icons/payment-bottom.svg'
    },
    {
        key: 'credit',
        route: '/payment',
        name: 'Credit',
        icon: '/icons/credit-bottom.svg'
    },
    {
        key: 'profile',
        route: '/profile',
        name: 'Profile',
        icon: '/icons/credit-bottom.svg'
    }
];
function DashboardBottomBar() {
    const { pathname } = useLocation();
    return (_jsx(_Fragment, { children: _jsx(RootStyle, { position: "fixed", elevation: 3, children: _jsx(ToolbarStyle, { children: navItems.map((item) => (_jsxs(Box, { component: RouterLink, to: item.route, sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 12px',
                        textDecoration: 'none'
                    }, children: [_jsx(Box, { component: "img", src: item.icon, sx: { color: _.isEqual(pathname, item?.route) ? 'primary.main' : '#919191', width: '24px', height: '24px' } }), _jsx(Typography, { noWrap: true, sx: {
                                color: _.isEqual(pathname, item?.route) ? 'secondary.main' : '#DDDDDD',
                                fontWeight: _.isEqual(pathname, item?.route) ? 700 : 400,
                                fontSize: 9,
                            }, children: item.name })] }, item.key))) }) }) })
    );
}
export default DashboardBottomBar;
