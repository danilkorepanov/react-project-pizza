import HeaderCart from "./components/HeaderCart";
import HeaderLogo from "./components/HeaderLogo";
import Search from "./components/Search";

const Header = ( {searchValue, setSearchValue}) => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <Search searchValue = {searchValue} setSearchValue={setSearchValue} />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
