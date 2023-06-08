export { Sort };
import arrow from "../../../public/Arrow.svg";

const Sort = ({ toggleChange, sortType, language, toggleLanguage }) => {
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
