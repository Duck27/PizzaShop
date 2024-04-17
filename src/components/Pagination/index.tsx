import React, { FC, useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filter/slice";
import {
  selectCategoryId,
  selectCurrentPage,
} from "../../redux/slices/filter/selectors";
import { selectPizzasCount } from "../../redux/slices/pizza/selectors";
import axios from "axios";

const Pagination: FC = () => {
  const initialPage = useSelector(selectCurrentPage);
  let itemsCount = useSelector(selectPizzasCount);
  const categoryId = useSelector(selectCategoryId);

  let itemsPerPage = 4;
  const [pageCount, setPageCount] = useState(
    Math.ceil(itemsCount / itemsPerPage)
  );

  useEffect(() => {
    const getPizzasCount = async () => {
      const query =
        categoryId === 0
          ? "https://65ca29a23b05d29307dfd825.mockapi.io/items"
          : `https://65ca29a23b05d29307dfd825.mockapi.io/items?category=${categoryId}`;
      const res = await axios.get(query);
      itemsCount = res.data.length;
      setPageCount(Math.ceil(itemsCount / itemsPerPage));
      return res.data;
    };

    getPizzasCount();
  }, [categoryId]);

  const dispatch = useDispatch();
  return (
    <ReactPaginate
      activeClassName="selected"
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(e: { selected: number }) => {
        dispatch(setCurrentPage(e.selected + 1));
      }}
      pageRangeDisplayed={itemsPerPage}
      pageCount={pageCount}
      previousLabel="< "
      renderOnZeroPageCount={null}
      className={styles.root}
      initialPage={initialPage}
    />
  );
};

export default Pagination;
