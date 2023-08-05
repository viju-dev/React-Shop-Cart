import { FaShoppingCart } from "react-icons/fa";

const Header = ({ counter }) => {
  return (
    <div className="headerContainer">
      <span className="cartNoti">
        <h4 className="cartCounter">{counter}</h4>
      </span>
      <FaShoppingCart />
    </div>
  );
};

export default Header;
