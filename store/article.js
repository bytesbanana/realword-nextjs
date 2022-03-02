const { createSlice } = require('@reduxjs/toolkit');

const articleSlide = createSlice({
  name: 'article',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const articleActions = articleSlide.actions;
export const articleReducer = articleSlide.reducer;
