import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initinalState: {
    pageNo: 1,
    pageSize: 10,
    sortBy: "title",
    sortDir: "asc",
  },
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortDir: (state, action) => {
      state.sortDir = action.payload;
    },
  },
});

export const { setPageNo, setPageSize, setSortBy, setSortDir } = paginationSlice.actions;

export default paginationSlice.reducer;
