// import { Link } from "react-scroll";

// import { Button } from "react-scroll";
import styles from "./style.module.css";

const YearItem = ({ year, onSelectYear, isSelectYear }) => {
  return (
    <li>
      <button
        className={`${styles.btnYear} ${
          year.year === isSelectYear ? styles.btnActive : ""
        }`}
        onClick={() => {
          onSelectYear(year.year);
        }}
      >
        {year.year}
        <span>
          <i className="fa-solid fa-angle-right" />
        </span>
      </button>
    </li>
  );
};

export default YearItem;
