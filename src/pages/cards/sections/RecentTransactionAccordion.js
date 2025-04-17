import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Accordion, Box, AccordionDetails, AccordionSummary, Typography, Stack, Avatar } from '@mui/material';
import _ from 'lodash';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const transactionList = [
    {
        bgColor: '#009DFF1A',
        icon: '/icons/file-storage.svg',
        title: 'Hamleys',
        date: '20 May 2020',
        description: 'Refund on debit card',
        isCredit: true,
        amount: '150'
    },
    {
        bgColor: '#00D6B51A',
        icon: '/icons/flights.svg',
        title: 'Hamleys',
        date: '20 May 2020',
        description: 'Charged to debit card',
        isCredit: false,
        amount: '150'
    },
    {
        bgColor: '#F251951A',
        icon: '/icons/megaphone.svg',
        title: 'Hamleys',
        date: '20 May 2020',
        description: 'Charged to debit card',
        isCredit: false,
        amount: '150'
    },
    {
        bgColor: '#009DFF1A',
        icon: '/icons/file-storage.svg',
        title: 'Hamleys',
        date: '20 May 2020',
        description: 'Charged to debit card',
        isCredit: false,
        amount: '150'
    },
];

function TransactionItem({ item, isLast }) {
    return (_jsxs(Stack, { direction: "row", justifyContent: "center", sx: { py: 2, borderBottom: !isLast ? '1px solid #F5F5F5' : 'none' }, children: [_jsx(Avatar, { sx: { bgcolor: item.bgColor, width: '48px', height: '48px' }, children: _jsx(Box, { component: "img", src: item.icon, sx: { width: '16px' } }) }), _jsxs(Box, { sx: { marginLeft: '12px' }, children: [_jsx(Typography, { sx: { color: '#222222', fontSize: '14px', fontWeight: 600 }, children: item.title }), _jsx(Typography, { sx: { color: '#AAAAAA', fontSize: '13px', mt: 0.5 }, children: item.date }), _jsxs(Typography, { sx: { color: '#325BAF', fontSize: '12px', fontWeight: 600, display: 'flex', flexDirection: 'row', mt: 1.5 }, children: [_jsx(Avatar, { sx: { bgcolor: '#325BAF', width: '24px', height: '20px', mr: 1 }, children: _jsx(Box, { component: "img", src: "/icons/business-card.svg", sx: { width: '10px' } }) }), item.description] })] }), _jsx(Box, { sx: { flex: 1 } }), _jsx(Typography, { sx: { fontSize: 14, fontWeight: 700, color: item.isCredit ? '#01D167' : '#222222' }, children: item.isCredit ? `+ S$ ${item.amount}` : `- S$ ${item.amount}` }), _jsx(ChevronRightIcon, { sx: { color: '#325baf', opacity: 0.15 } })] }));
}

function RecentTransactionAccordion() {
    const [expanded, setExpanded] = React.useState(true);
    return (_jsxs(Accordion, { expanded: expanded, onChange: () => setExpanded(t => !t), elevation: 0, sx: {
            backgroundColor: 'white',
            "&.MuiAccordion-root:before": {
                height: 0
            },
            borderRadius: '8px',
            border: '1px solid #F0F0F0'
        }, disableGutters: true, children: [_jsxs(AccordionSummary, { sx: {
                    backgroundColor: '#F5F9FF', p: 3, boxShadow: '0pt 0pt 8pt 0pt #0000000A', borderRadius: '8px'
                }, expandIcon: _jsx(Box, { component: "img", src: "/icons/down-arrow.svg" }), children: [_jsx(Box, { component: "img", src: "/icons/recent-transaction.svg" }), _jsx(Typography, { sx: { color: '#0C365A', fontSize: 14, ml: 2 }, children: "Recent Trasaction" })] }), _jsx(AccordionDetails, { children: _jsx(Stack, { sx: { px: 1 }, children: _.map(transactionList, (item, index) => _jsx(TransactionItem, { item: item, isLast: index === transactionList.length - 1 })) }) })] }));
}

export default RecentTransactionAccordion;
