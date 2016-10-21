import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    var products = this.props.productList.sort(function(a,b) {return b.count - a.count}).map(item => {
      return (
        <Product
          key={item.id}
          starred={this.props.starred}
          updateCount={this.props.updateCount}

          {...item}
        />
      );
    });

    return (
      <div className="container">
        <div className="products-list">
          <ul className="clearfix">
            {products}
          </ul>
        </div>
      </div> 
    );
  }
}

export default ProductList;
