import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import DashboardSidebar from './DashboardSidebar';
import MHidden from '../../components/MHidden';
import DashboardBottomBar from './DashboardBottomBar';
import DashboardNavbar from './DashboardNavbar';

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    minHeight: '100vh',
    overflow: 'hidden',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.background.paper,
        flexDirection: 'column'
    }
}));
const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingBottom: '50px',
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingRight: 0,
    }
}));

export default function DashboardLayout() {
    const theme = useTheme();
    return (_jsxs(RootStyle, { children: [_jsx(MHidden, { width: 'smUp', children: _jsx(DashboardNavbar, {}) }), _jsxs(MHidden, { width: "mdDown", children: [" ", _jsx(DashboardSidebar, {})] }), _jsx(MainStyle, { children: _jsx(Outlet, {}) }), _jsx(MHidden, { width: 'smUp', children: _jsx(DashboardBottomBar, {}) })] }));
}
