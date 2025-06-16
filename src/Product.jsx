import React, { useState } from "react";
import './App.css';
import main from './assets/main.svg';
import arrow from './assets/arrow.svg';
import small from './assets/small.svg';
import icon from './assets/icon.svg';


const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
       <div className="flex items-center gap-x-1 font-semibold Class	Description
cursor-pointer overflow-x-auto whitespace-nowrap">
    <span className="text-sm">Home</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm">Categories</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm">Photo Frames</span>
    <img src={arrow} alt="" className="w-4 h-4" />
    <span className="text-sm">Coloured Square, 4*6</span>
  </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Image Section */}
        <div className="md:w-1/2 text-center">
          <img
            src={main}
            alt="Main Product"
            className="w-full h-auto mb-4 rounded"
          />
          <div className="flex justify-center gap-2 flex-wrap">
            {[...Array(5)].map((_, idx) => (
              <img
                key={idx}
                src={small}
                alt={`Thumbnail ${idx + 1}`}
                className="w-14 h-14 rounded border"
              />
            ))}
          </div>
        </div>

        {/* Right Product Info Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Name of product</h2>
          <p className="text-gray-600">Description, size, colour, type</p>
          <div className="text-xl font-bold">
            Rs. 99/- <del className="text-gray-500">198</del>{" "}
            <span className="text-green-600">50% OFF</span>
          </div>
          <p className="text-sm text-gray-500">Price incl. of all taxes</p>
          <div className="text-yellow-500 text-lg">★★★★☆</div>

          <div>
            <strong>Choose Size:</strong> 13×18 cm
          </div>

          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="w-12 text-center border rounded"
            />
            <button
              className="px-3 py-1 bg-gray-200 rounded"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 bg-button text-white rounded">ADD TO CART</button>
            <button className="px-4 py-2 bg-button text-white rounded">BUY NOW</button>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Morbi ut et magna sed. Aliquam quam
            adipiscing at elementum ac erat bibendum sed.
          </p>

          <button className="text-sm bg-grey text-black-500">Item No: 86893166</button>
        </div>
      </div>

      <hr className="my-8" />

      {/* Product Tabs */}
      <div className="grid  gap-6 mb-8">
        <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Product Details</h3>
    <img src={icon} alt="" className="w-5 h-5" />
  </div><hr />
         <div className="flex justify-between items-center">
    <h3 className="text-xl font-medium">Measurements</h3>
    <img src={icon} alt="" className="w-5 h-5" />
  </div> <hr />
      </div>

      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="border p-4 rounded shadow-sm">
            <h4 className="font-medium">Great Product</h4>
            <div className="text-yellow-500 mb-2">★★★★☆</div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Morbi ut et magna sed.
            </p>
            <p className="text-xs text-gray-400 mt-2">lorem, india</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
