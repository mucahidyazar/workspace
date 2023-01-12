import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { api } from '@config';
import { Status } from '@constants';

const initialState = {
  status: Status.INIT,
  data: {},
  selected: null,
  error: null
};

export const fetchData = createAsyncThunk('data/getData', async ({ merchantCode, productCode }) => {
  const res = await api.get(`?merchantCode=${merchantCode}&codes[]=${productCode}`);

  if (res.data.data?.length) {
    return res?.data?.data;
  } else {
    toast.error('Product not found');
  }
});

export const productDetail = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setNewSelected: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selected = action.payload;
    }
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = Status.LOADING;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = Status.OK;
      state.data = action.payload;
      state.selected = action.payload[0];
    },
    [fetchData.rejected]: (state, action) => {
      state.status = Status.ERROR;
      state.error = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setNewSelected } = productDetail.actions;

export default productDetail.reducer;
