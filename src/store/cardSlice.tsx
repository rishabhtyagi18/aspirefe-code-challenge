import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash';

export interface CardModel {
  id: number;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  isFreeze: boolean;
}

const initCardList: CardModel[] = [
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
]

interface CardState {
  selectedTab: string;
  cardList: CardModel[];
  selectedCard: CardModel;
  openCreateCardDialog: boolean
}

const initialState: CardState = {
  selectedTab: 'myDebitCard',
  cardList: initCardList,
  selectedCard: initCardList[0],
  openCreateCardDialog: false
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    selectTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },

    addCard: (state, action: PayloadAction<CardModel>) => {
      state.cardList = [...state.cardList, action.payload];
    },
    toggleFreeze: (state, action) => {
      const card = state.cardList.find(card => card.id === action.payload);
      if (card) {
          card.isFreeze = !card.isFreeze;
      }
      if (state.selectedCard.id === action.payload) {
          state.selectedCard.isFreeze = card.isFreeze;
      }
  },
    selectCard: (state, action:PayloadAction<CardModel>) => {
      state.selectedCard = action.payload;
    },
    toggleCreateCardDialog: (state, action: PayloadAction<boolean>) => {
      state.openCreateCardDialog = action.payload;
    },
    deleteCard: (state, action:PayloadAction<number>) => {
      const upCardList = _.cloneDeep(state.cardList);
      const ind = _.findIndex(upCardList, item => item.id === action.payload);
      upCardList.splice(ind, 1);
      state.cardList = upCardList;
    }
  },
})

export const cardAction = cardSlice.actions


export default cardSlice.reducer