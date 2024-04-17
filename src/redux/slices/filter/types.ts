export type FilterUpdateParams = {
    categoryId?: string;
    sortType?: string;
    currentPage?: string;
    sortName?: string;
  };
  
 export interface IFilter {
    categoryId: number;
    sortId: number;
    sortType: string;
    search: string;
    currentPage: number;
    sortList: {
      rus: string[];
      eng: string[];
    };
    sortName?: string;
  }