import { createSlice } from '@reduxjs/toolkit';
// import { format } from 'date-fns';

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
  },
});

export const filterValueReducer = filterValue.reducer;
export const { changeFilter, changeDate } = filterValue.actions;
export const selectFilter = state => state.filter.filter;
export const selectDate = state => state.filter.date;
