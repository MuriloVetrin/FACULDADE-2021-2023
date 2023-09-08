import React from "react";

const Personagens = ({ personagens = []}) => {
  return (
    <div className="row">
      {personagens.map((item, index) => (
        <div key={index} className="col mb-5">
          <div className="card" style={{minWidth: "100px"}}>
            <img src={item.image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr/>
                <p>species {item.species}</p>
                <p>Location {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personagens;
