import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Most important heading here</h1>
        <h3>Less important heading here</h3>
      </header>
      )

  }
};

ReactDOM.render(<Header />, document.getElementById('main'));
