import { createSlice } from '@reduxjs/toolkit';

import { Theme } from '@constants';

const initialState = {
  theme: Theme.LIGHT
};

export const productDetail = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = productDetail.actions;

export default productDetail.reducer;
