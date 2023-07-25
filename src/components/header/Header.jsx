import logo from "../../assets/img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoor</span>
          <span className="heading-primary-sub"> is where life begins</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
