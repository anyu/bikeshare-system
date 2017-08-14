import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Overview'
    }
    this.togglePage = this.togglePage.bind(this);
  }

  togglePage(e, item) {
    e.preventDefault();
    this.setState({
      currentPage: item
    })
    
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Sidebar togglePage={this.togglePage} />
        <Main currentPage={this.state.currentPage} />
      </div>
  )}
}


export default App;
