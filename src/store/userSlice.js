import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "지니", // 기본 사용자 이름 설정
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload; // 이름 업데이트
    },
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
