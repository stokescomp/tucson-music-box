import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    addUser: (state, action) => {},
    removeUser: (state, action) => {},
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
