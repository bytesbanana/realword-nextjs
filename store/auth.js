import { createSlice } from '@reduxjs/toolkit';

const authSlide = createSlice({
  name: 'app',
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const authActions = authSlide.actions;
export const authReducer = authSlide.reducer;
