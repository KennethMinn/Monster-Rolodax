import React from "react";

const MonstersCard = ({ filteredMonsters }) => {
  return (
    <div className="row mb-5">
      {filteredMonsters.map(({ id, name, email }) => (
        <div key={id} className="col-12 col-md-4 col-lg-3 g-4">
          <div className="card-container">
            <img
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt={name}
              className=" mb-4"
            />
            <div className=" card-body">
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonstersCard;
