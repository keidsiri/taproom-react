import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: event.target.name.value, brand: event.target.brand.value, quantity: parseInt(event.target.quantity.value), price: event.target.price.value,  alcoholContent: event.target.alcoholContent.value, id: v4()});

  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='IPA' />
        <textarea
            name='brand'
            placeholder='Elysian' />
        <input
          type='number'
          name='quantity'
          placeholder='124' />
        <input
          type='number'
          name='price'
          placeholder='$4' />
          <input
          type='number'
          name='alcoholContent'
          placeholder='5%' />
        <button type='submit'>Add Beer</button>
      </form>
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;