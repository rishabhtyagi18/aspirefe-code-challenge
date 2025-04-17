import { jsx as _jsx } from "react/jsx-runtime";
import { Stack, Box } from '@mui/material';

function DashboardNavbar() {
    return (_jsx(Stack, { direction: "row-reverse", sx: { height: 30, width: '100vw', px: 3, mt: 1, position: 'relative' }, justifyContent: "flex-end", alignItems: "end", children: _jsx(Box, { component: "img", src: "/icons/aspire-selected.svg", sx: { position: 'fixed', right: '16px' } }) }));
}
export default DashboardNavbar;
