import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Slider from "react-slick";
import CircleIcon from '@mui/icons-material/Circle';
import './CardSwiper.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch, useAppSelector } from '../../../store';
import { cardAction } from '../../../store/cardSlice';
import _ from 'lodash';

const renderCardNumber = (cardNumber, isShow) => {
    const lastDigits = cardNumber?.slice(-4);
    const chunks = _.chunk(cardNumber, 4);
    if (!isShow) {
        return (_jsxs(Stack, { spacing: 1, direction: "row", alignItems: "center", children: [_jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(Box, { sx: { mx: '3px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(Box, { sx: { mx: '3px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(CircleIcon, { sx: { color: 'white', fontSize: '9px' } }), _jsx(Box, { sx: { mx: '3px' } }), _jsx(Typography, { sx: { mt: 3, fontWeight: 700, fontSize: '14px', color: 'white', letterSpacing: 4 }, children: lastDigits })] }));
    }
    return (_jsx(Stack, { spacing: 1, direction: "row", alignItems: "center", children: _.map(chunks, num => (_jsxs(_Fragment, { children: [_jsx(Typography, { sx: { mt: 3, fontWeight: 700, fontSize: '14px', color: 'white', letterSpacing: 4 }, children: num }), _jsx(Box, { sx: { mx: '3px' } })] }))) }));
};

function CardItem({ card }) {
    const [showCardNumber, toggleCardNumber] = useState(false);
    const isFreeze = card.isFreeze;
    return (_jsxs(Box, { className: "main-card-conatiner", sx: { position: 'relative', width: '100%', opacity: isFreeze ? 0.6 : 1 }, children: [_jsx(Box, { sx: { textAlign: 'right' }, children: _jsx(Button, { onClick: () => toggleCardNumber(g => !g), variant: "text", size: 'small', color: 'secondary', startIcon: _jsx(RemoveRedEyeIcon, {}), sx: { backgroundColor: 'white', textTransform: 'none' }, children: "Show card number" }) }), _jsxs(Box, { sx: { backgroundColor: 'secondary.main', color: 'white', p: 3, borderRadius: '12px', width: ['100%', '100%', '414px'], height: ['220px', '220px', '248px'] }, children: [_jsx(Box, { sx: { textAlign: 'right' }, children: _jsx(Box, { component: "img", src: "/logo-white.svg", sx: { width: 'auto', height: '24px', float: 'right' } }) }), _jsx(Typography, { sx: { mt: 3, fontWeight: 700, fontSize: 22, color: 'white' }, children: card.name }), _jsx(Typography, { children: renderCardNumber(card.cardNumber, showCardNumber) }), _jsxs(Typography, { sx: { mt: 2, fontWeight: 700, fontSize: 13, color: 'white' }, children: ["Thru: ", card.expiryDate, _jsx("span", { style: { marginLeft: '30px' }, children: "CVV: \u2731\u2731\u2731" })] })] })] }));
}

function CardCarausel() {
    const [currentSlideIndex, setSlideIndex] = useState(0);
    const dispatch = useAppDispatch();
    const { cardList } = useAppSelector((state) => state.cardReducer);
    useEffect(() => {
        dispatch(cardAction.selectCard(cardList[currentSlideIndex]));
    }, [currentSlideIndex]);
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (pagi, i) => {
            const isActive = pagi === currentSlideIndex;
            return (_jsx("a", { children: _jsx(Box, { sx: { width: isActive ? '16px' : '8px', height: '8px', borderRadius: '8px', backgroundColor: '#01D167', opacity: isActive ? 1 : 0.2, marginTop: '16px' } }) }));
        },
        beforeChange: (prev, next) => {
            setSlideIndex(next);
        },
    };
    return (_jsx(Box, { sx: { width: ['100vw', '100vw', '414px'] }, children: _jsx(Slider, { ...settings, children: _.map(cardList, (card, index) => _jsx(CardItem, { card: card })) }) }));
}

export default CardCarausel;
