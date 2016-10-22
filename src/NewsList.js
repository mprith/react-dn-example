import React from 'react';
import News from './News';

class NewsList extends React.Component {
  render() {
    var news = this.props.newsList.sort(function(a,b) {return b.count - a.count}).map(item => {
      return (
        <News
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
            {news}
          </ul>
        </div>
      </div> 
    );
  }
}

export default NewsList;
