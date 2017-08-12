import React from 'react';
import Template from './Template';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Template>  
          <Sidebar/>
          <Main/>
        </Template>  
      </div>
  )}
}


export default App;
