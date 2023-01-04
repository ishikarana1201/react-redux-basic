import React from "react";

const Home = (props) => {
  console.log(props.cartData);
  return (
    <div>
      <h1>Home Component</h1>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://e7.pngegg.com/pngimages/450/269/png-clipart-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-thumbnail.png"
            alt="I phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price:100$</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 100, name: "I Phone" });
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
