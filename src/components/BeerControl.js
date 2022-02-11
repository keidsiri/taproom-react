import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';

class BeerControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeerList: []
    };
  }
}

handleClick = () => {
  if (this.state.selectedBeer != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedBeer: null
    });
  } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
}

handleAddingNewBeerToList = (newBeer) => {
  const newMainBeerList = this.state.mainBeerList.concat(newBeer);
  this.setState({
    mainBeerList: newMainBeerList,
    formVisibleOnPage: false 
  });
}

handleDecrementItemQuantity = (quantityItem) => {
  const updateItemQuantity = [...this.state.mainItemList];
  updateItemQuantity[quantityItem].quantity = updateItemQuantity[quantityItem].quantity-1;
  this.setState({
    mainItemList: updateItemQuantity
  })
}