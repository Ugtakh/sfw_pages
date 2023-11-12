import { Link } from "react-scroll";

const OnYear = ({ year }) => {
  return (
    <li>
      <Link
        className={"year" + year.year}
        activeClass="active"
        to={"year" + year.year}
        spy={true}
        smooth={true}
        duration={500}
      >
        {year.year.split("-")[0]}
        <span>
          <i className="fa-solid fa-angle-right" />
        </span>
      </Link>
    </li>
  );
};

export default OnYear;
