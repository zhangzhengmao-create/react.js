import { nanoid } from "nanoid";
import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Apple MacPro Laptop",
    price: 1200,
    availability: "In stock",
  };
  return (
    <div>
      <h1>ProductInfo:</h1>
      <ul>
        <li key={nanoid()}>Name: {product.name}</li>
        <li key={nanoid()}>Price: {product.price}</li>
        <li key={nanoid()}>Availability: {product.availability}</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
