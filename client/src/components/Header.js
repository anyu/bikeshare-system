import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="container">
          <h1 className="title">CityBike API Documentation</h1>
        </div>
    );
  }
}

export default Header;