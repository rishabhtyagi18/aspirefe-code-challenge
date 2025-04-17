import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, Stack, Typography, Box } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Scrollbar from '../../components/Scrollbar';
import Logo from '../../components/Logo';
const DRAWER_WIDTH = 340;
const NavItem = ({ title, icon, iconSelected, isActive, navigateTo }) => {
    return (_jsxs(Stack, { component: RouterLink, to: navigateTo, direction: "row", spacing: 2, alignItems: "center", sx: { cursor: 'pointer', textDecoration: 'none' }, children: [_jsx(Box, { component: "img", src: isActive ? iconSelected : icon, sx: { width: 24 } }), _jsx(Typography, { sx: {
                    fontSize: 16,
                    color: isActive ? 'secondary.main' : 'white',
                    fontWeight: isActive ? 700 : 400
                }, children: title })] }));
};
function DashboardSidebar() {
    const { pathname } = useLocation();
    const renderContent = (_jsx(Scrollbar, { sx: {
            height: '100%',
            '& .simplebar-content': {
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }
        }, children: _jsxs(Stack
        , { children: [_jsx(Logo, { sx: { width: 125, mb: 2 } }), _jsx(Typography, { sx: { color: 'white', opacity: 0.3, fontSize: 15 }, children: "Trusted way of banking for 3,000+ SMEs and startups in Singapore" }), _jsxs(Stack, { spacing: 8, sx: { mt: 10 }, children: [_jsx(NavItem, { icon: '/icons/aspire.svg', iconSelected: '/icons/aspire-selected.svg', title: 'Home', isActive: pathname === '/', navigateTo: "/" }), _jsx(NavItem, { icon: '/icons/aspire.svg', iconSelected: '/icons/aspire-selected.svg', title: 'Cards', isActive: pathname === '/cards', navigateTo: "/cards" }), _jsx(NavItem, { icon: '/icons/aspire.svg', iconSelected: '/icons/aspire-selected.svg', title: 'Payments', isActive: pathname === '/payment', navigateTo: "/payment" }), _jsx(NavItem, { icon: '/icons/aspire.svg', iconSelected: '/icons/aspire-selected.svg', title: 'Credit', isActive: pathname === '/credit', navigateTo: "/credit" }), _jsx(NavItem, { icon: '/icons/aspire.svg', iconSelected: '/icons/aspire-selected.svg', title: 'Settings', isActive: pathname === '/setting', navigateTo: "/setting" })] })] }) }));
    return (_jsx(Box, { sx: { flexShrink: 0, width: DRAWER_WIDTH }, children: _jsx(Drawer, { open: true, variant: 'permanent', PaperProps: {
                sx: { width: DRAWER_WIDTH, bgcolor: 'background.paper', pt: 6, px: 6 }
            }, children: renderContent }) }));
}
export default DashboardSidebar;
