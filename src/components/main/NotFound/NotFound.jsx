import React from "react";
import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className="content">
      <div className="container">
        <h2 className={style.title}>
          <span>😕</span>
          <br />
          Страница не найдена
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
