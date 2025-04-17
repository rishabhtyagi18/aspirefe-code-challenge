import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

function Copyright() {
    return (_jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", children: ['Copyright © ', _jsx(Link, { color: "inherit", href: "https://mui.com/", children: "Your Website" }), ' ', new Date().getFullYear(), "."] }));
}

export default function App() {
    return (_jsx(Container, { maxWidth: "sm", children: _jsxs(Box, { sx: { my: 4 }, children: [_jsx(Typography, { variant: "h4", component: "h1", gutterBottom: true, children: "Material UI Vite.js example in TypeScript" }), _jsx(ProTip, {}), _jsx(Copyright, {})] }) }));
}
