import React from 'react';

class Header extends React.Component {
  render() {

    return (
      <div className="header">
          <input type="button" value="All"/>
          <input type="button" value="Starred" />
      </div>
    );
  }
}

export default Header;
