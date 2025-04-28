import React from "react";
import IMG3 from "./3.png"; // Corrected path
import IMG4 from "./4.png"; // Updated path

const all_products = [
  {
    id: 3,
    name: "Beautiful Rose Flower",
    category: "Flowers",
    img: IMG3,
    old_price: 10.9,
    new_price: 8.9,
  },
  {
    id: 4,
    name: "Beautiful Bouquet Flower",
    category: "Flowers",
    img: IMG4,
    old_price: 122.9,
    new_price: 83.9,
  },
];

const BestSellers = () => {
  return (
    <div className="row">
      {all_products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card">
            <img
              src={product.img} // Use the correct product image
              alt={product.name}
              className="card-img-top"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <span className="new-price">${product.new_price}</span>
                <span className="old-price">${product.old_price}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellers;
