import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Stack, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { fCurrency } from '../../../utils/formatNumber';
import MHidden from '../../../components/MHidden';
import { cardAction } from '../../../store/cardSlice';
import { useAppDispatch } from '../../../store';

function CardHeader() {
    const dispatch = useAppDispatch();
    return (_jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { maxWidth: ['90vw', '90vw', '100%'] }, children: [_jsxs(Box, { children: [_jsx(Typography, { sx: { fontSize: 14, fontWeight: [600, 600, 400], color: ['white', 'white', '#222222'] }, children: "Available balance" }), _jsxs(Stack, { direction: "row", alignItems: "center", children: [_jsx(Box, { sx: { px: 2, py: '3px', backgroundColor: "secondary.main", color: "white", borderRadius: '4px', fontSize: 12, fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }, children: "S$" }), _jsx(Typography, { sx: { ml: 1.5, color: ['white', 'white', '#222222', '#222222'], fontSize: 26, fontWeight: 'bold' }, children: fCurrency(3000) })] })] }), _jsx(MHidden, { width: 'mdDown', children: _jsx(Button, { onClick: () => dispatch(cardAction.toggleCreateCardDialog(true)), variant: "contained", size: 'small', sx: { textTransform: 'none', fontSize: 13, fontWeight: 'bold', maxHeight: 35 }, startIcon: _jsx(AddCircleIcon, {}), children: "New card" }) }), _jsx(MHidden, { width: 'smUp', children: _jsx(Button, { onClick: () => dispatch(cardAction.toggleCreateCardDialog(true)), variant: "text", size: 'small', sx: { textTransform: 'none', fontSize: 13, fontWeight: 'bold', maxHeight: 35, color: '#23CEFD' }, startIcon: _jsx(AddCircleIcon, { sx: { color: '#23CEFD' } }), children: "New card" }) })] }));
}

export default CardHeader;
