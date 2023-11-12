const SocialButtons = () => {
  return (
    <div className="team-socials">
      <ul>
        <li>
          <a
            data-bs-toggle="tooltip"
            title="Linked in"
            href="https://www.facebook.com/SecureFinanceNBFI/?ref=embed_page"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a
            data-bs-toggle="tooltip"
            title="Facebook"
            href="https://www.facebook.com/SecureFinanceNBFI/?ref=embed_page"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            data-bs-toggle="tooltip"
            title="Instagram"
            href="https://www.facebook.com/SecureFinanceNBFI/?ref=embed_page"
          >
            <i className="fa-brands fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialButtons;
