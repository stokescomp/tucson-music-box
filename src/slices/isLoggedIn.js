import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const isLoggedInSlice = createSlice({
  name: 'loginStates',
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    // logout: (state, action) => {},
  },
});

export const { setLoginState } = isLoggedInSlice.actions;
export const fetchLoginState = (state) => state.isLoggedIn.isLoggedIn;

export default isLoggedInSlice.reducer;
