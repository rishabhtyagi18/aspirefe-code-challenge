import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography } from '@mui/material';
export default function Page500() {
    return (_jsx(Box, { sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: "background.paper",
        }, children: _jsx(Typography, { variant: "h1", style: { color: 'white' }, children: "500" }) }));
}
