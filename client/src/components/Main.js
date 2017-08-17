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
        <p>{ contentData.text[this.props.currentPage].summary }</p>
          { this.props.currentPage === 'Overview' ?
          <div>
            <h4>Database Schema</h4>
            <img src="assets/images/db_schema.png"/>
          </div> : null
          }
        { contentData.text[this.props.currentPage].method ? 
          <div>
            <h2>Method</h2>
            <p>{ contentData.text[this.props.currentPage].method }</p> 
          </div>: null 
        }        
        { contentData.text[this.props.currentPage].resource_url ? 
          <div>
            <h2>Resource URL</h2>
            <p>{ contentData.text[this.props.currentPage].resource_url }</p> 
          </div>: null 
        }
        { contentData.text[this.props.currentPage].query_params ? 
          <div className="params">
            <h2>Query String Parameters</h2>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th> 
                <th>Description</th>
                <th>Example</th>
              </tr>
                { contentData.text[this.props.currentPage].query_params.map((param, i) => 
                  <tr key={i}>
                    <td>{ param.name }</td>
                    <td>{ param.type }</td> 
                    <td>{ param.required }</td> 
                    <td>{ param.description }</td> 
                    <td>{ param.example }</td>
                  </tr> 
              )}
              </tbody>
            </table>
          </div> : null 
        }        
        { contentData.text[this.props.currentPage].req_body_params ? 
          <div className="params">
            <h2>Request Body Parameters</h2>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th> 
                <th>Description</th>
                <th>Example</th>
              </tr>
                { contentData.text[this.props.currentPage].req_body_params.map((param, i) => 
                  <tr key={i}>
                    <td>{ param.name }</td>
                    <td>{ param.type }</td> 
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