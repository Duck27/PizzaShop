import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterUpdateParams, IFilter } from "./types";

const initialState: IFilter = {
  categoryId: 0,
  sortId: 0,
  sortType: "asc",
  search: "",
  currentPage: 1,
  sortList: {
    eng: ["rating", "price", "title"],
    rus: ["популярности", "цене", "алфавиту"],
  },
  sortName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state: IFilter, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setCurrentPage(state: IFilter, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearch(state: IFilter, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSortId(state: IFilter, action: PayloadAction<number>) {
      state.sortId = action.payload;
    },
    setSortType(state: IFilter, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
    setFilter(state: IFilter, action: PayloadAction<FilterUpdateParams>) {
      if (action.payload.sortName) {
        const id = state.sortList.eng.indexOf(action.payload?.sortName);
        state.sortId = id;
      }
      if (action.payload.currentPage !== undefined)
        state.currentPage = Number(action.payload.currentPage);
      if (action.payload.categoryId !== undefined)
        state.categoryId = Number(action.payload.categoryId);
      if (action.payload.sortType !== undefined)
        state.sortType = action.payload.sortType;
    },
  },
});

export const {
  setCategoryId,
  setCurrentPage,
  setSearch,
  setSortId,
  setSortType,
  setFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
