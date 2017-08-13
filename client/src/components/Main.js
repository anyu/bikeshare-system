import React from 'react';
import contentData from '../contentData';
// import test from '../test';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="main">
        <h1 className="page_title">{ this.props.currentPage }</h1>
        <p>{ contentData.text[this.props.currentPage].summary }
        </p>
        { contentData.text[this.props.currentPage].resource_url ? 
          <div>
            <h2>Resource URL</h2>
            <p>{ contentData.text[this.props.currentPage].resource_url }</p> 
          </div>: null 
        }
        { contentData.text[this.props.currentPage].params ? 
          <div className="params">
            <h2>Parameters</h2>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Required</th> 
                <th>Description</th>
                <th>Example</th>
              </tr>
                { contentData.text[this.props.currentPage].params.map((param, i) => 
                  <tr key={i}>
                    <td>{ param.name }</td>
                    <td>{ param.required }</td> 
                    <td>{ param.description }</td> 
                    <td>{ param.example }</td>
                  </tr> 
              )}
              </tbody>
            </table>
          </div> : null 
        }
        { contentData.text[this.props.currentPage].response ?   
          <div className="exampleResponse">
            <h2>Example Response</h2>
            <div className="code">
              <pre> { contentData.text[this.props.currentPage].response } </pre>
            </div>
          </div> : null 
        }
      </div>
    );
  }
}

export default Main;