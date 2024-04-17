import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../../redux/slices/filter/slice";
import { useWhyDidYouUpdate } from "ahooks";
import { selectCategoryId } from "../../redux/slices/filter/selectors";

const Categories = memo(() => {
  const selectedId = Number(localStorage.getItem("categoryId"));
  const [active, setActive] = useState(selectedId ? selectedId : 0);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedId = Number(localStorage.getItem("categoryId"));
    dispatch(setCategoryId(selectedId ? selectedId : 0));
  }, []);

  const onClickCategory = (categoryInd: number): void => {
    setActive(categoryInd);
    dispatch(setCategoryId(categoryInd));
    dispatch(setCurrentPage(1));
    localStorage.setItem("categoryId", String(categoryInd));
  };

  const pizzaCategoriesList = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {pizzaCategoriesList.map((category, categoryInd) => (
          <li
            key={category}
            onClick={() => {
              onClickCategory(categoryInd);
            }}
            className={categoryInd === active ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
