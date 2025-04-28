import React from "react";
import Card from "../commonfiles/Card";
import latest_collections from "../../assets/NewCollections";

const LatestCollections = () => {
  return (
    <div>
      <div className="container">
        <div className="collection-desc text-center">
          <h1>Latest Collections</h1>
          <p>Explore our latest collections across a variety of items.</p>
        </div>

        <div className="row">
          {latest_collections.map((card, i) => (
            <div className="col-md-4" key={i}>
              <Card
                id={card.id}
                name={card.name}
                img={card.img}
                new_price={card.new_price}
                old_price={card.old_price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollections;
