import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props){
  const { beer } = props;

  return (
    <React.Fragment>
      <h1>Beer Details</h1>
      <h2>Name : {beer.name}</h2>
      <h3>Brand : {beer.brand}</h3>
      <h3>Price : {beer.price}</h3>
      <h3>Alcohol Content : {beer.alcoholContent}</h3>
      <hr/>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object
};

export default BeerDetail;