import React from "react";
import PropTypes from "prop-types";


function Beer(props){
  let selling;
  if(props.content.quantity < 1){
    selling = "out of stock";
  }else{
    selling = <button onClick={()=>props.method(props.position)}>Reduce Quantity</button>;
  }

  return (
    <React.Fragment>
      <div key={props.content.id}>
      <div onClick = {() => props.whenBeerClicked(props.id)}></div>
        <h3>{props.content.name}</h3>
        <p>{props.content.brand}</p>
        <p>{parseInt(props.content.quantity)}</p>
        <p>{props.content.price}</p>
        <p>{props.content.alcoholContent}</p>
        <hr/>
        {selling}
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.string, 
  whenBeerClicked: PropTypes.func
};

export default Beer;