import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    setMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setMenu } = activitySlice.actions;

export const activitySelector = (state) => state.activity;

const activityReducer = activitySlice.reducer;
export default activityReducer;
