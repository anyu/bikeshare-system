import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const memberEndpoints = ['Retrieve all members', 'Add a member', 'Retrieve a member', 'Update a member', 'Delete a member', 'Retrieve ride count',
                             'Retrieve status', 'Toggle access level'];
    const stationEndpoints = ['Retrieve all stations', 'Add a station', 'Retrieve a station', 'Update a station', 'Delete a station', 'Retrieve bike count', 
                              'Retrieve list of bikes', 'Check if empty', 'Rent a bike', 'Return a bike'];
    const bikeEndpoints = ['Retrieve all bikes', 'Add a bike', 'Retrieve a bike', 'Update a bike', 'Delete a bike', 'Retrieve availability', 
                           'Retrieve docked station', 'Retrieve last rider'];
    const tripEndpoints = ['Retrieve all trips', 'Retrieve a trip'];                           

    return (
        <div className="sidebar">
          <h4 className="sidebarLink" onClick ={ (e) => this.props.togglePage(e, "Overview") }>Overview</h4>
          <h3>Members</h3>
            {memberEndpoints.map((item, i) => 
              <li key={i} className="sidebarLink" onClick ={ (e) => this.props.togglePage(e, item) } >{item}</li>
            )}
          <h3>Stations</h3>
            {stationEndpoints.map((item, i) => 
              <li key={i} className="sidebarLink" onClick ={ (e) => this.props.togglePage(e, item) } >{item}</li>
            )}
          <h3>Bikes</h3>
            {bikeEndpoints.map((item, i) => 
              <li key={i} className="sidebarLink" onClick ={ (e) => this.props.togglePage(e, item) } >{item}</li>
            )}
          <h3>Trips</h3>
          {tripEndpoints.map((item, i) => 
            <li key={i} className="sidebarLink" onClick ={ (e) => this.props.togglePage(e, item) } >{item}</li>
          )}            
        </div>
    );
  }
}

export default Sidebar;