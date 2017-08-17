require('dotenv').config();

module.exports = {
  text: {
    'Overview' : {
      summary: 'The CityBike REST API allows you to query information about the members, stations, bikes, and trips in the system. You can also perform operations such as renting and returning bikes. And much more!'
    },    
    'Retrieve all members':
      {
        summary: 'Returns all members in the system.', 
        method: 'GET',
        resource_url: '/api/members',
        response: `[{
            "id":1,
            "first_name": "Khalid",
            "last_name": "Sanford",
            "email": "Marcel.Watsica@yahoo.com",
            "access_level": "none"
          },
          {
            "id":2,
            "first_name": "Manley",
            "last_name": "Wisozk",
            "email": "Gerald.Upton@gmail.com",
            "access_level": "none",
        }]`
      },
      'Add a member':
      {
        summary: 'Adds a new member to the system.', 
        method: 'POST',
        resource_url: '/api/members',
        params: [{ 
          name : 'first_name',
          type: 'string',
          required: 'required',
          description: `Member's first name`,
          example: 'Lynn'
        },
        { 
          name : 'last_name',
          type: 'string',
          required: 'required',
          description: `Member's last name`,
          example: 'Hill'
        },
        { 
          name : 'email',
          type: 'string',
          required: 'required',
          description: `Member's email`,
          example: 'lynnhill@gmail.com'
        },
        { 
          name : 'access_level',
          type: 'string',
          required: 'optional',
          description: "'full' if a member can rent a bike, 'none' if they can't. Defaults to 'full' if not specified.",
          example: 'full'
        }        
      ],
        response: 
        `{
          "id": 8,
          "first_name": "Beth",
          "last_name": "Rodden",
          "email": "bethrodden@gmail.com",
          "access_level": "full"
        }`
      },
      'Retrieve a member':
      {
        summary: 'Returns a member by the given ID.', 
        method: 'GET',
        resource_url: '/api/members/:id',
        query_params: [{ 
          name : 'member_id',
          type: 'integer',
          required: 'required',
          description: `ID associated with member`,
          example: 12
        }],
        response: `
        {
          "id": 2,
          "first_name": "Manley",
          "last_name": "Wisozk", 
          "email": "Gerald.Upton@gmail.com",
          "access_level": "none"
        }`
    },  
    'Update a member':
    {
      summary: "Modifies a member by the given ID. Only specified parameters will be updated.",
      method: 'PUT',
      resource_url: '/api/members/:id',
      query_params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      }],
      req_body_params: [{ 
        name : 'first_name',
        type: 'string',
        required: 'optional',
        description: 'First name associated with the profile.',
        example: 'Lynn'
      },
      { 
        name : 'last_name',
        type: 'string',
        required: 'optional',
        description: 'Last name associated with the profile.',
        example: 'Hill'
      },
      { 
        name : 'email',
        type: 'string',
        required: 'optional',
        description: 'Email associated with the profile.',
        example: 'lynnhill@gmail.com'
      },
      { 
        name : 'access_level',
        type: 'string',
        required: 'optional',
        description: "Whether or not the member can rent a bike. Defaullts to 'full'",
        example: 'full'
      }],
      response: `{
        "id": 8,        
        "first_name": "Joe",
        "last_name": "Shmo",
        "email": "joeshmo@gmail.com",
        "access_level": "full"
      }`
    },
    'Delete a member':
    {
      summary: 'Removes a member from the system by the given ID.',
      method: 'DELETE',
      resource_url: '/api/members/:id',
      query_params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      }],
      response: 'Member deleted'
    },
    "Retrieve ride count":
    {
      summary: 'Returns the number of rides taken by the member with the given id.',
      method: 'GET',
      resource_url: '/api/members/:id/ride_count',
      query_params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      }],
      response: `
      {
        "ride_count": 42
      }`
    },
    'Retrieve status':
    {
      summary: 'Returns the status of the member with the given id (whether or not the member is currently on a ride)',
      method: 'GET',
      resource_url: '/api/members/:id/status',
      query_params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      }],
      response: `
      {
        "status": "active"
      }`
    },
    'Toggle access level':
    {
      summary: "Enables/disables a member's ability to rent a bike",
      method: 'POST',
      resource_url: '/api/members/:id/toggle_access_level',
      query_params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      }],
      response: `
      {
        "id": 2,
        "first_name": "Gunner",
        "last_name": "VonRueden",
        "email": "Shanel74@hotmail.com",
        "access_level": "none"
      }`
    },
    'Retrieve all stations':
    {
      summary: 'Returns all stations in the system.',
      method: 'GET',
      resource_url: '/api/stations',
      response: `[
        {
          "id":1,
          "name": 'Folsom St & 8th St',
          "zipcode": '94103',
          "max_capacity": 30
        },
        {
          "id": 2,
          "name": 'King St & 4th St',
          "zipcode": '94104',          
          "max_capacity": 50
        }]`
    },   
    'Add a station':
    {
      summary: 'Adds a new station to the system.', 
      method: 'POST',
      resource_url: '/api/stations',
      req_body_params: [{ 
        name : 'name',
        type: 'string',
        required: 'required',
        description: 'Name of the station (cross streets)',
        example: 'King St & 4th St'
      },
      { 
        name : 'zipcode',
        type: 'string',
        required: 'required',
        description: 'Zipcode where the station is located',
        example: '94122'
      },      
      { 
        name : 'max_capacity',
        type: 'integer',
        required: 'required',
        description: 'Maximum number of bikes that can be docked at the station',
        example: 10
      }],
      response: `{
        "id": 1,        
        "name": "King St & 4th St",
        "zipcode": "94122",
        "max_capacity": "20"
      }`
    },     
    'Retrieve a station':
    {       
      summary: 'Returns a station by the given ID.', 
      method: 'GET',
      resource_url: '/api/stations/:id',
      params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 10
      }],
      response: `
      {
        "id": 1,        
        "name": "King St & 4th St",
        "zipcode": "94122",
        "max_capacity": "20"
      }` 
    }, 
    'Update a station':
    {
      summary: "Modifies a station by the given ID. Only specified parameters will be updated.",      
      method: 'PUT',
      resource_url: '/api/stations/:id',
      query_params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 1
      }],
      req_body_params: [{
        name : 'name',
        type: 'string',
        required: 'optional',
        description: 'Name of the station (cross streets)',
        example: 'King St & 4th St'
      },
      { 
        name : 'zipcode',
        type: 'string',
        required: 'optional',
        description: 'Zipcode where the station is located',
        example: '945122'
      },      
      { 
        name : 'max_capacity',
        type: 'integer',
        required: 'optional',
        description: 'Maximum number of bikes that can be docked at the station',
        example: 10
      }],
      response: `
      {
        "id": 1,        
        "name": "King St & 4th St",
        "zipcode": "94122",
        "max_capacity": "20"
      }`      
    }, 
    'Delete a station':
    {
      summary: 'Removes a station from the system by the given ID.',
      method: 'DELETE',
      resource_url: '/api/stations/:id',
      query_params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 10
      }],
      response: `Station deleted`
    }, 
    'Retrieve bike count':
    {
      summary: 'Returns the number of bikes at the station with the given ID.',
      method: 'GET',
      resource_url: '/api/stations/:id/bike_count',
      query_params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 10
      }],
      response: `
      {
        "bike_count": 33
      }`
    }, 
    'Retrieve list of bikes':
    {
      summary: 'Returns all bikes currently docked at the station with the given ID.',
      method: 'GET',
      resource_url: '/api/stations/:id/bikes',
      query_params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 10
      }],
      response: 
      `{
        "bikeIDs": [11, 27, 31, 37, 164, 175, 194]
      }`
    }, 
    'Check if empty':
    {
      summary: 'Returns whether or not the station with the given ID is empty.',
      method: 'GET',
      resource_url: '/api/stations/:id/is_empty',
      query_params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 10
      }],
      response: 
      `{
        "is_empty": false
      }`
    }, 
    'Rent a bike':
    {
      summary: 'Endpoint for members to rent a bike at the station with the given ID.',
      method: 'POST',
      resource_url: '/api/stations/:id/rent',
      query_params: [{
          name : 'station_id',
          type: 'integer',
          required: 'required',
          description: 'ID of associated with station being rented from',
          example: 9
      }],
      req_body_params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with member renting the bike',
        example: 501
      }],
      response: `{
        "bike": {
          "id": 48,
          "status": "unavailable",
          "docked_station_id": null
        },
        "trip": {
          "id": 501,
          "status": "ongoing",
          "start_time": "2017-08-16T23:25:29.204Z",
          "end_time": null,
          "rider_id": 8,
          "bike_id": 48,
          "start_station_id": 2,
          "end_station_id": null
        }
      }`
    }, 
    'Return a bike':
    {
      summary: 'Endpoint for members to return a bike at the station with the given ID.',
      method: 'POST',
      resource_url: '/api/stations/:id/return',
      query_params: [{
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID of associated with station being rented from',
        example: 9
      }],      
      req_body_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike being returned',
        example: 5
      }],
      response: `{
        "bike": {
          "id": 156,
          "status": "available",
          "docked_station_id": "2"
        },
        "trip": {
          "id": 258,
          "status": "ended",
          "start_time": "2017-05-31T23:06:14.265Z",
          "end_time": "2017-08-16T23:39:32.532Z",
          "rider_id": 71,
          "bike_id": 156,
          "start_station_id": 7,
          "end_station_id": "2"
        }
      }`
    },   
    'Retrieve all bikes':
    {
      summary: 'Returns all bikes in the system.',
      method: 'GET',
      resource_url: '/api/bikes',
      response: `[{
          "id":1,
          "status": "available",
          "docked_station_id": 8,
        },
        {
          "id": 2,
          "status": "unavailable",
          "docked_station_id": null
      }]`
    },   
    'Add a bike':
    {
      summary: 'Adds a new bike to the system.',
      method: 'POST',
      resource_url: '/api/bikes',
      req_body_params: [{ 
        name : 'status',
        type: 'string',
        required: 'optional',
        description: "'available' if the bike can be rented, 'unavailable' if not",
        example: "available"
      },         
      { 
        name : 'docked_station_id',
        type: 'integer',
        required: 'required',
        description: 'Station where the bike is docked',
        example: 501
      }   
    ],
      response: `
      {
        "id": 2,
        "status": "available",
        "docked_station_id": 1
      }`
    }, 
    'Retrieve a bike':
    {
      summary: 'Returns a bike by the given ID.', 
      method: 'GET',
      resource_url: '/api/bikes/:id',
      query_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 2
      }],
      response: `
      {
        "id": 2,
        "status": "available",
        "docked_station_id": 1
      }`
    }, 
    'Update a bike':
    {
      summary: "Modifies a bike by the given ID. Only specified parameters will be updated.", 
      method: 'PUT',
      resource_url: '/api/bikes/:id',
      query_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 2
      }],
      req_body_params: [{       
        name : 'status',
        type: 'string',
        required: 'optional',
        description: 'Whether or not the bike is available for rent',
        example: 'available'
      },
      { 
        name : 'docked_station_id',
        type: 'integer',
        required: 'optional',
        description: 'Station where the bike is docked',
        example: 8
      }],
      response: `      
      {
        "id": 2,
        "status": "available",
        "docked_station_id": 1
      }`
    }, 
    'Delete a bike':
    {
      summary: 'Removes a bike from the system by the given ID.',
      method: 'DELETE',
      resource_url: '/api/bikes/:id',
      query_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 18
      }],
      response: `Bike deleted`
    },     
    'Retrieve availability':
    {
      summary: 'Returns whether or not the bike with the given ID is available for rent.',
      method: 'GET',
      resource_url: '/api/bikes/:id/availability',
      query_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 18
      }],
      response: `
      {
        "status": "unavailable"
      }`
    }, 
    'Retrieve docked station':
    {
      summary: 'Returns the station where the bike with the given ID is docked.',
      method: 'GET',
      resource_url: '/api/bikes/:id/station',
      query_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 18
      }],
      response: `
      {
        "docked_station_id": 1
      }`
    }, 
    'Retrieve last rider':
    {
      summary: 'Returns the last member who rode the bike with the given ID.',
      method: 'GET',
      resource_url: '/api/bikes/:id/last_rider',
      query_params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 45
      }],
      response: `
      {
        "last_rider_id": 626
      }`
    },     
    'Retrieve all trips':
    {
      summary: 'Returns all trips in the system.', 
      method: 'GET',
      resource_url: '/api/trips',
      response: `[{
        "id": 2,
        "status": "ended",
        "start_time": "2017-07-17T23:06:14.264Z",
        "end_time": "2017-08-17T00:06:14.264Z",
        "rider_id": 11,
        "bike_id": 86,
        "start_station_id": 7,
        "end_station_id": 2
      },
      {
          "id": 3,
          "status": "ended",
          "start_time": "2017-05-16T23:06:14.264Z",
          "end_time": "2017-08-17T07:06:14.264Z",
          "rider_id": 20,
          "bike_id": 26,
          "start_station_id": 6,
          "end_station_id": 7
      }]`
    },
    'Retrieve a trip':
    {
      summary: 'Returns a trip by the given ID.', 
      method: 'GET',
      resource_url: '/api/trips/:id',
      query_params: [{ 
        name : 'trip_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with trip`,
        example: 12
      }],
      response: `
      {
        "id": 1,
        "status": "ended",
        "start_time": "2017-07-15T23:06:14.264Z",
        "end_time": "2017-08-17T04:06:14.264Z",
        "rider_id": 23,
        "bike_id": 52,
        "start_station_id": 2,
        "end_station_id": 3
      }`                                               
    }
  }
}
