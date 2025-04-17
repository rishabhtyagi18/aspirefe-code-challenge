import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../../../store';
import { cardAction } from '../../../store/cardSlice';
import _ from 'lodash';
import { getRandomNumber } from '../../../utils/formatNumber';

export default function CreateCardDialog() {
    const [name, setName] = React.useState('');
    const dispatch = useAppDispatch();
    const { openCreateCardDialog, cardList } = useAppSelector((state) => state.cardReducer);
    const handleClose = () => {
        dispatch(cardAction.toggleCreateCardDialog(false));
    };
    const handleCreate = () => {
        if (_.isEmpty(name)) {
            return;
        }
        const cardParams = {
            cardNumber: getRandomNumber(16),
            name,
            cvv: getRandomNumber(3),
            id: Number(getRandomNumber(2)),
            expiryDate: '04/32',
            isFreeze: false
        };
        dispatch(cardAction.addCard(cardParams));
        handleClose();
    };
    return (_jsx(React.Fragment, { children: _jsxs(Dialog, { open: openCreateCardDialog, onClose: handleClose, sx: {
                '& .MuiPaper-root': {
                    background: 'white'
                },
            }, children: [_jsx(DialogTitle, { style: { padding: '20px 24px' }, children: "Create New Card" }), _jsxs(DialogContent, { children: [_jsx(DialogContentText, { children: "To create card, please enter your name here." }), _jsx(TextField, { autoFocus: true, margin: "dense", id: "name", label: "Name", type: "text", fullWidth: true, variant: "standard", value: name, onChange: event => setName(event.target.value) })] }), _jsxs(DialogActions, { style: { padding: '15px 20px 20px' }, children: [_jsx(Button, { style: { background: '#325BAF', color: '#fff' }, onClick: handleClose, children: "Cancel" }), _jsx(Button, { style: { background: '#325BAF', color: '#fff' }, onClick: handleCreate, children: "Add" })] })] }) }));
}
