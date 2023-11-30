import SocialButtons from "./SocialButtons";

export const CultureCard = ({ card }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="single-team">
          <div className="team-sides team-font-side">
            <div
              className="team-img"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#eeeef9",
              }}
            >
              <img src={card.imgUrl} alt={card.title} />
              {/* {card.icon} */}
            </div>
            <div
              className="team-content bg-18 weight-700"
              style={{ color: "white" }}
            >
              {card.title}
            </div>
          </div>
          <div className="team-sides team-back-side bg-18">
            <div
              className="team-content bg-18 weight-700"
              style={{ color: "white" }}
            >
              {card.title}
              <p style={{ paddingLeft: 20, paddingRight: 20, color: "white" }}>
                {card.content}
              </p>
              <div className="space10" />
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
