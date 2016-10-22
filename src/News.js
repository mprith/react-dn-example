import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.star = this.star.bind(this);
    this.increment = this.increment.bind(this);
   }

  star() {
    this.props.starred(this.props.id);
  }

  increment() {
    this.props.updateCount(this.props.id);
  }

  render() {
    return (
             <li> 
              <input type="button" value="Increment" onClick={this.increment}/> 
              <label > {this.props.count} </label>
              <span> {this.props.name} </span>
              <input type="button" value={this.props.isStarred ? "Starred" : "Star"} className={this.props.isStarred ? "starred" : "not-starred"}
                onClick={this.star}/>
            </li>
    );
  }
}

export default News;
