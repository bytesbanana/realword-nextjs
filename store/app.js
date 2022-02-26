import { createSlice } from '@reduxjs/toolkit';

const appSlide = createSlice({
  name: 'app',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
  },
});

export const appActions = appSlide.actions;
export const appReducer = appSlide.reducer;
