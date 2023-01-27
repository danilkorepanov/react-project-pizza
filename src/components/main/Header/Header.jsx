import HeaderCart from "./components/HeaderCart";
import HeaderLogo from "./components/HeaderLogo";
import Search from "./components/Search";

const Header = ( ) => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <Search />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
