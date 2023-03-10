import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to={"/"} className="header__logo">
      <img width="38" src="img/pizza-logo.svg" alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
