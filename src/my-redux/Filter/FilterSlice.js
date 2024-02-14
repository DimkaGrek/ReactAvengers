import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  date: null,
};
const filterValue = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeDate: (state, action) => {
      state.date = action.payload;
    },
    resetFilter: (state, action) => {
      return initialState;
    },
  },
});

export const filterValueReducer = filterValue.reducer;
export const { changeFilter, changeDate, resetFilter } = filterValue.actions;

export const selectFilter = state => state.filter.filter;
export const selectDate = state => state.filter.date;
