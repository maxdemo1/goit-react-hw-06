import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initial_state.js';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: { query: INITIAL_STATE.filters.name },
  reducers: {
    filterContacts(state, action) {
      state.query = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
