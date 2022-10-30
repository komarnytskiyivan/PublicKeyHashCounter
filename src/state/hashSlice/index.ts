import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IHashWithSum } from '../../types';

export interface HashesWithSumsState {
    hashesWithSums: IHashWithSum[]
    loading: boolean;
}

const initialState: HashesWithSumsState = {
    hashesWithSums: JSON.parse(localStorage.getItem("hashesWithSums") || "[]"),
    loading: false,
};

export const hashSlice = createSlice({
  name: 'hashesWithSums',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHashesWithSums: (state, action) => {
        state.hashesWithSums = action.payload;
    },
  },
});

export const { setLoading, setHashesWithSums } = hashSlice.actions;

export const selectHashesWithSums = (state: RootState) => state.hashesWithSums.hashesWithSums;

export const selectHashesWithSumsLoading = (state: RootState) => state.hashesWithSums.loading;

export default hashSlice.reducer;