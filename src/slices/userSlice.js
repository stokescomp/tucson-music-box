import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.user = action.payload;
    },
    removeUserInfo: (state, action) => {},
  },
});

export const { addUserInfo, removeUserInfo } = userSlice.actions;
export const fetchUserInfo = (state) => state.user.user;

export default userSlice.reducer;
