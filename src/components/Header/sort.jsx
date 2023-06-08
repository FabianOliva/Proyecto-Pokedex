export { Sort };
import arrow from "../../../public/Arrow.svg";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const Sort = ({ toggleChange, sortType }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <>
      <span onClick={() => toggleLanguage()}>{language}</span>
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
