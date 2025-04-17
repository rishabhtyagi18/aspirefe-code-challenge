import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Accordion, Box, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

function CardDetailAccordion() {
    const [expanded, setExpanded] = React.useState(false);
    return (_jsxs(Accordion, { expanded: expanded, onChange: () => setExpanded(t => !t), elevation: 0, sx: {
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid #F0F0F0',
            "&.MuiAccordion-root:before": {
                height: 0
            },
        }, disableGutters: true, children: [_jsxs(AccordionSummary, { sx: { backgroundColor: '#F5F9FF', p: 3,
                    boxShadow: '0pt 0pt 8pt 0pt #0000000A', borderRadius: '8px'
                }, expandIcon: _jsx(Box, { component: "img", src: "/icons/down-arrow.svg" }), children: [_jsx(Box, { component: "img", src: "/icons/card-detail.svg" }), _jsx(Typography, { sx: { color: '#0C365A', fontSize: 14, ml: 2 }, children: "Card Details" })] }), _jsx(AccordionDetails, { children: _jsx(Typography, { children: "This is card details" }) })] }));
}

export default CardDetailAccordion;
