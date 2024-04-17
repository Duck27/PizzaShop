import { RootState } from "../../store";

export function selectFilter(state: RootState) {
  return state.filter;
}
export function selectCurrentPage(state: RootState) {
  return state.filter.currentPage - 1;
}

export function selectCategoryId(state: RootState) {
  return state.filter.categoryId;
}
