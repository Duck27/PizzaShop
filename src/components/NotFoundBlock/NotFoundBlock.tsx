import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundBlock: FC = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Страница не найдена <span>😕</span>
          </h2>
          <p>
            К сожалению, на сайте отсутствует искомая вами страница.
            <br />
            Вы можете перейти на главную страницу и попробовать еще раз.
          </p>

          <Link
            to="/"
            className="button button--black"
            style={{ marginTop: "100px" }}
          >
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
