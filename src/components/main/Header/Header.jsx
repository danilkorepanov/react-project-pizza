import HeaderCart from "./components/HeaderCart";
import HeaderLogo from "./components/HeaderLogo";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
