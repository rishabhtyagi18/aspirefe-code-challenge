import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../store';
import { cardAction } from '../../../store/cardSlice';

const StyledTabs = styled((props) => (_jsx(Tabs, { ...props })))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#23CEFD',
    },
});
const StyledTab = styled((props) => (_jsx(Tab, { disableRipple: true, ...props })))(({ theme }) => ({
    textTransform: 'none',
    fontSize: 14,
    textAlign: 'left',
    marginRight: theme.spacing(3),
    color: 'white',
    opacity: 0.5,
    [theme.breakpoints.up('md')]: {
        color: '#222222',
        opacity: 0.3
    },
    '&.Mui-selected': {
        opacity: 1,
        color: 'white',
        fontWeight: 700,
        [theme.breakpoints.up('md')]: {
            color: '#222222'
        }
    },
}));

function CardTabs() {
    const dispatch = useAppDispatch();
    const { selectedTab } = useAppSelector((state) => state.cardReducer);
    return (_jsx(Box, { sx: { mt: [3, 3, 4] }, children: _jsxs(StyledTabs, { value: selectedTab, onChange: (event, value) => dispatch(cardAction.selectTab(value)), "aria-label": "basic tabs example", children: [_jsx(StyledTab, { label: "My debit cards", value: "myDebitCard" }), _jsx(StyledTab, { label: "All company cards", value: "allCompanyCard" })] }) }));
}

export default CardTabs;
