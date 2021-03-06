import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props){
  return (
    <React.Fragment>
        {props.beerList.map((beer, index) =>
          <Beer
            whenBeerClicked = { props.onBeerSelection }
            content = {beer}
            position = {index}
            method = {props.onDecrementBeerQuantity}
            id={beer.id}
            key = {beer.id}
            />
            
        )}
      </React.Fragment>
    );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
};

export default BeerList;