import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';

class BeerControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeerList: [],
      selectedTicket: null
    };
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

  handleDecrementBeerQuantity = (quantityBeer) => {
    const updateBeerQuantity = [...this.state.mainBeerList];
    updateBeerQuantity[quantityBeer].quantity = updateBeerQuantity[quantityBeer].quantity-1;
    this.setState({
      mainBeerList: updateBeerQuantity
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail 
                              beer= {this.state.selectedBeer} 
                              />
      buttonText = "Return to Beer List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm 
                              onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Return to Beer List";
    } 
    else {
      currentlyVisibleState = <BeerList 
                              onDecrementBeerQuantity={this.handleDecrementBeerQuantity}
                              beerList={this.state.mainBeerList} />;
      buttonText = "Add Beer";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BeerControl;