import React from 'react';
import products from './data/data';
import Header from './header';
import ProductList from './ProductList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.starred = this.starred.bind(this);
    this.updateCount = this.updateCount.bind(this);

    this.state = {
      productList: products,
    }
  }

  starred(id) {
    var productList = this.state.productList.slice(0).map(product => Object.assign({}, product));
    var product = productList.find(product => product.id === id);
    product.isStarred = true;
    product.status = true;
    this.setState({
      productList
    });
  }

  updateCount(id) {
    var productList = this.state.productList.slice(0).map(product => Object.assign({}, product));
    var product = productList.find(product => product.id === id);
    product.count++;

    this.setState({
      productList
    });
  }


  render() {
    return (
      <div>
        <Header />
        <ProductList
          productList={this.state.productList}
          starred={this.starred}
          updateCount={this.updateCount}
        />
      </div>
    );
  }
}

export default ShoppingCart;
