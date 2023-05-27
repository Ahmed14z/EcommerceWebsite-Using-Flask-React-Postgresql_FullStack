import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { UserContext } from "../Components/pages/UserContext";

export const Navbar = (props) => {
  const { user, updateUser } = useContext(UserContext);

  const handleLogout = () => {
    // Reset the user ID to 0
    updateUser({ id: 0 });
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop" className="nav-link shop-link">
          Shop
        </Link>
        <Link
          to="/contact"
          className="nav-link profile-link"
          state={{ data: props.data }}
        >
          Profile
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <div className="buttons">
        <Link to="/add-products" className="btn btn-primary add-product-btn">
          Add Product
        </Link>
        {user && user.id && user.id !== 0 ? (
          <Link
            to="/"
            className="btn btn-danger logout-btn"
            onClick={handleLogout}
          >
            Log Out
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary login-btn">
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};
