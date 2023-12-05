import YearItem from "./YearItem";

const YearList = ({ years, onSelectYear, isSelectYear }) => {
  return (
    <div className="col-lg-2" style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="widgets lg-mr-15">
        <div
          className={`single-widget categories`}
          style={{ background: "#eeeeee" }}
        >
          <h3>Он жилүүд</h3>
          <ul className="category-list">
            {years.map((year, idx) => (
              <YearItem
                key={idx}
                year={year}
                onSelectYear={onSelectYear}
                isSelectYear={isSelectYear}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YearList;
