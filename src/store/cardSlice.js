import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initCardList = [
    {
        id: 1,
        name: 'Mark Henry',
        cardNumber: '2020202020202020',
        expiryDate: '12/20',
        cvv: '444',
        isFreeze: true
    },
    {
        id: 2,
        name: 'John Snow',
        cardNumber: '4040404040404040',
        expiryDate: '12/20',
        cvv: '555',
        isFreeze: false
    }
];

const initialState = {
    selectedTab: 'myDebitCard',
    cardList: initCardList,
    selectedCard: initCardList[0],
    openCreateCardDialog: false
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        selectTab: (state, action) => {
            state.selectedTab = action.payload;
        },
        addCard: (state, action) => {
            state.cardList = [...state.cardList, action.payload];
        },
        toggleFreeze: (state, action) => {
            const card = state.cardList.find(card => card.id === action.payload);
            if (card) {
                card.isFreeze = !card?.isFreeze;
            }
            if (state.selectedCard.id === action.payload) {
                state.selectedCard.isFreeze = card?.isFreeze;
            }
        },
        selectCard: (state, action) => {
            state.selectedCard = action.payload;
        },
        toggleCreateCardDialog: (state, action) => {
            state.openCreateCardDialog = action.payload;
        },
        deleteCard: (state, action) => {
            const upCardList = _.cloneDeep(state.cardList);
            const ind = _.findIndex(upCardList, item => item.id === action.payload);
            upCardList.splice(ind, 1);
            state.cardList = upCardList;
        }
    },
});

export const cardAction = cardSlice.actions;
export default cardSlice.reducer;
