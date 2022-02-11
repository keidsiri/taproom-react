import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props){
  return (
    <React.Fragment>
        {props.beerList.map((beer, index) =>
          <Beer
            content = {beer}
            position = {index}
            method = {props.onDecrementBeerQuantity}
            key = {beer.id}
            />
            
        )}
      </React.Fragment>
    );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;