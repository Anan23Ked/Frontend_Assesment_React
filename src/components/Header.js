const Header = ({ title }) => {
  return (
    <header className="header">
    <div className="flexo">
    <div className="title">
      <h1>{title}</h1>
      </div>
      <div className="logout">
        <button className="logoutbtn">
          Logout
          <img src={"images/solar-logout-broken.svg"} alt="logout"></img>
        </button>
      </div>
    </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
