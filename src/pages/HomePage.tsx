import Categories from "../components/Categories/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort/Sort";
import "../scss/app.scss";
import qs from "qs";

import { useEffect, useMemo, useRef } from "react";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/slices/filter/slice";
import { FilterUpdateParams } from "../redux/slices/filter/types";

import { selectFilter } from "../redux/slices/filter/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPizzas } from "../redux/slices/pizza/slice";
import { selectPizzas } from "../redux/slices/pizza/selectors";
import { ThunkDispatch } from "@reduxjs/toolkit";

function HomePage() {
  let filter = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzas);
  const url = useLocation().search;
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (url) {
      const params: FilterUpdateParams = qs.parse(url.substring(1));

      dispatch(setFilter({ ...params }));
      isSearch.current = true;
    }
  }, []);



  const query = useMemo(() => {
    return qs.stringify({
      sortName: filter.sortList.eng[filter.sortId],
      sortType: filter.sortType,
      categoryId: filter.categoryId,
      currentPage: filter.currentPage,
    });
  }, [filter]);

  useEffect(() => {
    if (isMounted.current) {
      navigate(`?${query}`);
    }

    isMounted.current = true;
  }, [filter]);

  async function getPizzas() {
    dispatch(fetchPizzas(queryContructor()));
  }

  useEffect(() => {
    getPizzas();
  }, [filter]);

  function queryContructor(): string {
    let query = new URL("https://65ca29a23b05d29307dfd825.mockapi.io/items?");
    query.searchParams.append("page", String(filter["currentPage"]));
    query.searchParams.append("limit", "4");
    if (filter["search"]) query.searchParams.append("search", filter["search"]);
    if (filter["categoryId"] !== 0)
      query.searchParams.append("category", String(filter["categoryId"]));
    if (filter["sortId"])
      query.searchParams.append(
        "sortBy",
        filter.sortList.eng[filter["sortId"]]
      );
    if (filter["sortType"] === "desc")
      query.searchParams.append("order", "desc");
    return query.toString();
  }

  function pizzaRender() {
    return status === "loading"
      ? [...new Array(8)].map((_, index) => (
          <PizzaSkeleton key={index}></PizzaSkeleton>
        ))
      : items.map((pizza: any) => <PizzaBlock key={pizza.id} {...pizza} />);
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories></Categories>
        <Sort></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className={status === "error" ? "" : "content__items"}>
        {status === "error" ? (
          <div className="content__error">
            <h2>Возникла ошибка</h2>
            <p>Не удалось получить данные. Попробуйте повторить попытку.</p>
          </div>
        ) : (
          pizzaRender()
        )}
      </div>
      <Pagination />
    </div>
  );
}

export default HomePage;
