import React from 'react';
import products from './data/data';
import Header from './header';
import NewsList from './NewsList';

class DesignerNews extends React.Component {
  constructor(props) {
    super(props);
    this.starred = this.starred.bind(this);
    this.updateCount = this.updateCount.bind(this);

    this.state = {
      newsList: products,
    }
  }

  starred(id) {
    var newsList = this.state.newsList.slice(0).map(product => Object.assign({}, product));
    var product = newsList.find(product => product.id === id);
    product.isStarred = true;
    product.status = true;
    this.setState({
      newsList
    });
  }

  updateCount(id) {
    var newsList = this.state.newsList.slice(0).map(product => Object.assign({}, product));
    var product = newsList.find(product => product.id === id);
    product.count++;

    this.setState({
      newsList
    });
  }


  render() {
    return (
      <div>
        <Header />
        <NewsList
          newsList={this.state.newsList}
          starred={this.starred}
          updateCount={this.updateCount}
        />
      </div>
    );
  }
}

export default DesignerNews;
