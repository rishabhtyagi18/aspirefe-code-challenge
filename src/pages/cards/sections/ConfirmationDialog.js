import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmationDialog({ open, handleClose, onAgree }) {
    return (_jsx(React.Fragment, { children: _jsxs(Dialog, { open: open, onClose: handleClose, sx: {
                '& .MuiPaper-root': {
                    background: 'white'
                },
            }, children: [_jsx(DialogTitle, { children: "Confirmation" }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: "Are you sure you want to delete the card." }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: handleClose, children: "Disagree" }), _jsx(Button, { onClick: onAgree, children: "Agree" })] })] }) }));
}
