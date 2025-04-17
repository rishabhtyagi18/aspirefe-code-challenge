import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Stack, Typography } from '@mui/material';
import CardSwiper from './sections/CardSwiper';
import CardCtaBtn from './sections/CardCtaBtn';
import CardDetailAccordion from './sections/CardDetailAccordion';
import RecentTransactionAccordion from './sections/RecentTransactionAccordion';
import CardHeader from './sections/CardHeader';
import CardTabs from './sections/CardTabs';

function CardDesktopContent() {
    return (_jsxs(_Fragment, { children: [_jsx(CardHeader, {}), _jsx(CardTabs, {}), _jsxs(Box, { sx: {
                    p: 5, background: 'white', mt: 2, borderRadius: '8px',
                    border: '1px solid #FCFCFC',
                    boxShadow: '0pt 2pt 12pt 0pt rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                }, children: [_jsxs(Stack, { direction: "column", children: [_jsx(CardSwiper, {}), _jsx(CardCtaBtn, { containerProps: { mt: 4 } })] }), _jsxs(Stack, { direction: "column", sx: { ml: 6, width: '100%' }, children: [_jsx(CardDetailAccordion, {}), _jsxs(Box, { sx: { mt: 3 }, children: [_jsx(RecentTransactionAccordion, {}), " "] }), _jsx(Box, { sx: { bgcolor: '#EDFFF5', borderBottom: '1px solid #DDFFEC', borderLeft: '1px solid #DDFFEC', borderRight: '1px solid #DDFFEC', py: 2, cursor: 'pointer' }, children: _jsx(Typography, { sx: { color: '#01D167', fontWeight: 600, fontSize: 13, textAlign: 'center' }, children: "View All Transactions" }) })] })] })] }));
}

export default CardDesktopContent;
