export { Sort };
import { useState } from "react";
import arrow from "../../../public/Arrow.svg";

const Sort = ({ toggleChange, sortType }) => {
  return (
    <>
      <span>En | Es</span>
      <span className="Header_Sort" onClick={() => toggleChange()}>
        <div className="Header_Sort_text">
          {sortType == "#-down" || sortType == "#-up" ? (
            <span>#</span>
          ) : (
            <>
              <span>A</span>
              <span>Z</span>
            </>
          )}
        </div>
        <img src={arrow} alt="Arrow" className={sortType == "#-up" || sortType == "Z-A" ? "arrow-rotate" : ""} />
      </span>
    </>
  );
};
