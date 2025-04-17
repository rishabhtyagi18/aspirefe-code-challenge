import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Stack, Typography } from '@mui/material';
import CardSwiper from './sections/CardSwiper';
import CardHeader from './sections/CardHeader';
import CardTabs from './sections/CardTabs';
import CardCtaBtn from './sections/CardCtaBtn';
import CardDetailAccordion from './sections/CardDetailAccordion';
import RecentTransactionAccordion from './sections/RecentTransactionAccordion';

function CardMobileContent() {
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: { position: 'fixed', px: 3 }, children: [_jsx(CardHeader, {}), _jsx(CardTabs, {}), _jsx(CardSwiper, {})] }), _jsx(Stack, { sx: { pt: '55vh' }, children: _jsxs(Box, { sx: { backgroundColor: 'white', zIndex: 1000, borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }, children: [_jsx(CardCtaBtn, {}), _jsxs(Box, { sx: { p: 3 }, children: [_jsx(CardDetailAccordion, {}), _jsxs(Box, { sx: { mt: 3 }, children: [_jsx(RecentTransactionAccordion, {}), " "] }), _jsx(Box, { sx: { bgcolor: '#EDFFF5', borderBottom: '1px solid #DDFFEC', borderLeft: '1px solid #DDFFEC', borderRight: '1px solid #DDFFEC', py: 2, cursor: 'pointer' }, children: _jsx(Typography, { sx: { color: '#01D167', fontWeight: 600, fontSize: 13, textAlign: 'center' }, children: "View All Transactions" }) })] })] }) })] }));
}

export default CardMobileContent;
