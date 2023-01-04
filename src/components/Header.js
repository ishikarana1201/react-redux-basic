import React from "react";

const Header = (props) => {
  console.log(props.cartData);
  return (
    <div>
      
      <div className="add-to-cart">
        <span className="cart-count">{props.cartData.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1972/1972381.png"
          alt="atc"
          className="cart-img"
        />
      </div>
    </div>
  );
};

export default Header;
