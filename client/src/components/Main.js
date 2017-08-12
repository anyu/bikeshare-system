import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="main">
          <h1 className="page_title">GET /members</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <h2>Resource URL</h2>
          <p>http://localhost:3000/api/members/</p>
          <h2>Parameters</h2>
          <table>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Required</th> 
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>member_id</td>
              <td>required</td> 
              <td>...</td> 
              <td>12</td>
            </tr>
            <tr>
              <td>station_id</td>
              <td>required</td> 
              <td>...</td> 
              <td>8</td>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default Main;