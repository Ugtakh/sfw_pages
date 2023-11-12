import OnYear from "./OnYear";

const AsideBar = ({ years }) => {
  return (
    <div className="col-lg-4" style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="widgets lg-mr-15">
        <div
          className={`single-widget categories`}
          style={{ background: "#eeeeee" }}
        >
          <h3>Он жилүүд</h3>
          <ul className="category-list">
            {years.map((year, idx) => (
              <OnYear key={idx} year={year} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AsideBar;
