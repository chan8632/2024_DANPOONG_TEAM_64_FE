import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScore: 7, // 초기 점수를 설정
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.currentScore = action.payload;
    },
  },
});

export const { setScore } = scoreSlice.actions;

export default scoreSlice.reducer;
