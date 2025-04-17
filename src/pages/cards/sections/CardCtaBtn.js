import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '../../../store';
import { cardAction } from '../../../store/cardSlice';
import ConfirmationDialog from './ConfirmationDialog';
function CardCtaBtn({ containerProps }) {
    const dispatch = useAppDispatch();
    const [delerteConfirm, setDeleteConfirm] = useState(false);
    const { selectedCard } = useAppSelector((state) => state.cardReducer);
    const onAgreeDelete = () => {
        dispatch(cardAction.deleteCard(selectedCard.id));
        setDeleteConfirm(false);
    };
    const handleClick = (key) => {
        switch (key) {
            case 'freeze':
                dispatch(cardAction.toggleFreeze(selectedCard.id));
                break;
            case 'cancelCard':
                setDeleteConfirm(true);
                break;
            default:
                break;
        }
    };
    const ctaBtns = [
        {
            key: 'freeze',
            label: selectedCard.isFreeze ? 'Unfreeze \ncard' : 'Freeze \ncard',
            icon: '/icons/freeze-card.svg'
        },
        {
            key: 'spendLimit',
            label: 'Set spend \nlimit',
            icon: '/icons/spend-limit.svg'
        },
        {
            key: 'gpay',
            label: 'Add to \nGPay',
            icon: '/icons/gpay.svg'
        },
        {
            key: 'replaceCard',
            label: 'Replace \ncard',
            icon: '/icons/replace-card.svg'
        },
        {
            key: 'cancelCard',
            label: 'Cancel \ncard',
            icon: '/icons/cancel-card.svg'
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "row", justifyContent: "center", spacing: 4, alignItems: "center", sx: { py: 2.5, px: 4, backgroundColor: '#EDF3FF', borderRadius: '16px', borderBottomLeftRadius: ['0px', '0px', '16px'], borderBottomRightRadius: ['0px', '0px', '16px'], zIndex: 10, ...containerProps }, children: _.map(ctaBtns, btn => (_jsxs(Stack, { flexDirection: "column", justifyContent: "center", alignItems: "center", sx: { cursor: 'pointer' }, onClick: () => handleClick(btn.key), children: [_jsx(Box, { component: "img", src: btn.icon, sx: { width: 32, height: 32, objectFit: 'contain', mb: 1 } }), _.map(btn.label.split('\n'), (txt, index) => (_jsx(Typography, { noWrap: true, component: "span", sx: {
                                color: '#0C365A',
                                fontSize: 13,
                                textAlign: 'center',
                            }, children: txt }, index)))] }, btn.key))) }), delerteConfirm && _jsx(ConfirmationDialog, { open: delerteConfirm, handleClose: () => setDeleteConfirm(false), onAgree: onAgreeDelete })] }));
}
export default CardCtaBtn;
