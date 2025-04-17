import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';

export default function Logo({ sx }) {
    return (_jsx(Box, { component: "img", 
        src: "/logo.svg", sx: { height: 'auto', ...sx } }));
}
