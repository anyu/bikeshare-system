import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const memberEndpoints = ['GET /members', 'POST /members', 'GET /members/:id', 'POST /members/:id', 'DELETE /members/:id', 'GET /members/:id/ride_count',
                             'GET /members/:id/status', 'GET  /members/:id/toggle_access_level'];
    const stationEndpoints = ['GET /stations', 'GET /stations/:id', 'PUT /stations/:id', 'DELETE /stations/:id', 'GET /stations/:id/bike_count', 
                              'GET /stations/:id/bikes', 'GET /stations/:id/volume', 'POST /stations/:id/rent', 'POST /stations/:id/return'];
    const bikeEndpoints = ['GET /bikes', 'POST /bikes', 'GET /bikes/:id', 'POST /bikes/:id', 'DELETE /bikes/:id', 'GET /bikes/:id/availability', 
                           'GET /bikes/:id/station', 'GET /bikes/:id/last_rider'];

    return (
        <div className="sidebar">
          <h4>Overview</h4>

          <h3>Members</h3>
            {memberEndpoints.map((item, i) => 
              <li key={i}><a href="#">{item}</a></li>
            )}
          <h3>Stations</h3>
            {stationEndpoints.map((item, i) => 
              <li key={i}><a href="#">{item}</a></li>
            )}
          <h3>Bikes</h3>
            {bikeEndpoints.map((item, i) => 
              <li key={i}><a href="#">{item}</a></li>
            )}
        </div>
    );
  }
}

export default Sidebar;