const MemberCard = ({ member }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-service text-center">
        <div className="service-icon " style={{ background: "white" }}>
          <img src="/assets/images/logo/favicon.png" alt="" />
        </div>
        <h3>{member.position}</h3>
        <h3>{member.name}</h3>
        <p>{member.positionTitle}</p>
      </div>
    </div>
  );
};

export default MemberCard;
