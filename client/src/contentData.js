require('dotenv').config();

module.exports = {
  text: {
    'Overview' : {
      summary: 'The CityBike REST API allows you to query information about the members, stations, and bikes in the system. You can also perform operations such as renting and returning bikes.'
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
            "status": "inactive",
            "access_level": "none",
            "ride_count": 157
          },
          {
            "id":2,
            "first_name": "Manley",
            "last_name": "Wisozk",
            "email": "Gerald.Upton@gmail.com",
            "status": "active",
            "access_level": "none",
            "ride_count": 112
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
          name : 'status',
          type: 'string',
          required: 'optional',
          description: "Whether or not the member is on a ride. Defaults to 'inactive' if not specified.",
          example: 'inactive'
        },
        { 
          name : 'access_level',
          type: 'string',
          required: 'optional',
          description: "Whether or not the member can rent a bike. Defaults to 'full' if not specified.",
          example: 'full'
        },
        { 
          name : 'ride_count',
          type: 'integer',
          required: 'optional',
          description: 'Number of rides the member has taken. Defaults to 0 if not specified.',
          example: '0'
        }           
      ],
        response: 
        `{
          "first_name": "Beth",
          "last_name": "Rodden",
          "email": "bethrodden@gmail.com",
          "status": "active",
          "access_level": "full",
          "ride_count": 0,
          "id": 8
        }`
      },
      'Retrieve a member':
      {
        summary: 'Returns a member by the given ID.', 
        method: 'GET',
        resource_url: '/api/members/:id',
        params: [{ 
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
          "status": "active",
          "access_level": "none",
          "ride_count": 112
        }`
    },  
    'Update a member':
    {
      summary: "Modifies a member by the given ID. Only specified parameters will be updated.",
      method: 'PUT',
      resource_url: '/api/members/:id',
      params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      },
      {
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
        name : 'status',
        type: 'string',
        required: 'optional',
        description: "Whether or not the member is on a ride. Defaults to 'inactive'",
        example: 'inactive'
      },
      { 
        name : 'access_level',
        type: 'string',
        required: 'optional',
        description: "Whether or not the member can rent a bike. Defaullts to 'full'",
        example: 'full'
      },
      { 
        name : 'ride_count',
        type: 'integer',
        required: 'optional',
        description: 'Number of rides the member has taken. Defaults to 0.',
        example: '0'
      }],
      response: `{
        "first_name": "Joe",
        "last_name": "Shmo",
        "email": "joeshmo@gmail.com",
        "status": "active",
        "access_level": "full",
        "ride_count": 0,
        "id": 8
      }`
    },
    'Delete a member':
    {
      summary: 'Removes a member from the system by the given ID.',
      method: 'DELETE',
      resource_url: '/api/members/:id',
      params: [{ 
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
      params: [{ 
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
      params: [{ 
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
    'Retrieve access level':
    {
      summary: 'Returns the access level of the member with the given id (their ability to rent bikes)',
      method: 'POST',
      resource_url: '/api/members/:id/toggle_access_level',
      params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: `ID associated with member`,
        example: 12
      }],
      response: `
      {
        "status": "full"
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
          "bike_count": 0,
          "max_capacity": 30
        },
        {
          "id": 2,
          "bike_count": 33,
          "max_capacity": 50
        }]`
    },   
    'Add a station':
    {
      summary: 'Adds a new station to the system.', 
      method: 'POST',
      resource_url: '/api/stations',
      params: [{ 
        name : 'bike_count',
        type: 'integer',
        required: 'required',
        description: 'Number of bikes docked at the station',
        example: 9
      },
      { 
        name : 'max_capacity',
        type: 'integer',
        required: 'required',
        description: 'Maximum number of bikes that can be docked at the station',
        example: 10
      }],
      response: `{
        "bike_count": "2",
        "max_capacity": "20",
        "id": 1
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
        "id": 2,
        "bike_count": 33,
        "max_capacity": 50
      }` 
    }, 
    'Update a station':
    {
      summary: "Modifies a station by the given ID. Only specified parameters will be updated.",      
      method: 'PUT',
      resource_url: '/api/stations/:id',
      params: [
      { 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 1
      },
      { 
        name : 'bike_count',
        type: 'integer',
        required: 'optional',
        description: 'Number of bikes docked at the station',
        example: 9
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
        "bike_count": "2",
        "max_capacity": "20",
        "id": 1
      }`      
    }, 
    'Delete a station':
    {
      summary: 'Removes a station from the system by the given ID.',
      method: 'DELETE',
      resource_url: '/api/stations/:id',
      params: [{ 
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
      params: [{ 
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
      params: [{ 
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
    'Retrieve volume':
    {
      summary: 'Returns whether or not the station with the given ID is empty.',
      method: 'GET',
      resource_url: '/api/stations/:id/volume',
      params: [{ 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with station',
        example: 10
      }],
      response: 
      `{
        "bike_count": 33
      }`
    }, 
    'Rent a bike':
    {
      summary: 'Endpoint for members to rent a bike at the station with the given ID.',
      method: 'POST',
      resource_url: '/api/stations/:id/rent',
      params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the member renting the bike',
        example: 501
      },
      { 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the station being rented from',
        example: 9
      },
      { 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike being rented',
        example: 5
      }],
      response: `{
        "bike": {
          "id": 2,
          "is_available": false,
          "docked_station_id": 1,
          "active_rider_id": 2,
          "last_rider_id": 233
        },
        "station": {
          "id": 2,
          "bike_count": 3,
          "max_capacity": 20
        },
        "member": {
          "id": 2,
          "first_name": "Sage",
          "last_name": "Orn",
          "email": "Marisol.Roberts11@yahoo.com",
          "status": "active",
          "access_level": "full",
          "ride_count": 46
        }
      }`
    }, 
    'Return a bike':
    {
      summary: 'Endpoint for members to return a bike at the station with the given ID.',
      method: 'POST',
      resource_url: '/api/stations/:id/return',
      params: [{ 
        name : 'member_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the member returning the bike',
        example: 501
      },
      { 
        name : 'station_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the station the bike is being returned to',
        example: 9
      },
      { 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike being returned',
        example: 5
      }],
      response: `{
        "bike": {
          "id": 2,
          "is_available": false,
          "docked_station_id": 1,
          "active_rider_id": 2,
          "last_rider_id": 233
        },
        "station": {
          "id": 2,
          "bike_count": 3,
          "max_capacity": 20
        },
        "member": {
          "id": 2,
          "first_name": "Sage",
          "last_name": "Orn",
          "email": "Marisol.Roberts11@yahoo.com",
          "status": "active",
          "access_level": "full",
          "ride_count": 46
        }
      }`
    },   
    'Retrieve all bikes':
    {
      summary: 'Returns all bikes in the system.',
      method: 'GET',
      resource_url: '/api/bikes',
      response: `[
        {
          "id":1,
          "is_available": false,
          "docked_station_id": 8,
          "active_rider_id": 331,
          "last_rider_id": 383
        },
        {
          "id": 2,
          "is_available": false,
          "docked_station_id": 3,
          "active_rider_id": 419,
          "last_rider_id": 639
        }]`
    },   
    'Add a bike':
    {
      summary: 'Adds a new bike to the system.',
      method: 'POST',
      resource_url: '/api/bikes',
      params: [{ 
        name : 'is_available',
        type: 'boolean',
        required: 'required',
        description: 'Whether or not the bike is available for rent',
        example: 2
      },
      { 
        name : 'docked_station_id',
        type: 'integer',
        required: 'required',
        description: 'Station where the bike is docked',
        example: 501
      },
      {
        name : 'active_rider_id',
        type: 'integer',
        required: 'optional',
        description: 'ID of the member currently riding the bike',
        example: 2
      },
      {
        name : 'last_rider_id',
        type: 'integer',
        required: 'optional',
        description: 'ID of the member who last rode the bike',
        example: 2
      }      
    ],
      response: `
      {
        "id": 2,
        "is_available": true,
        "docked_station_id": 1,
        "active_rider_id": 5,
        "last_rider_id": 626
      }`
    }, 
    'Retrieve a bike':
    {
      summary: 'Returns a bike by the given ID.', 
      method: 'GET',
      resource_url: '/api/bikes/:id',
      params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 2
      }],
      response: `
      {
        "id": 2,
        "is_available": false,
        "docked_station_id": 1,
        "active_rider_id": 5,
        "last_rider_id": 626
      }`
    }, 
    'Update a bike':
    {
      summary: "Modifies a bike by the given ID. Only specified parameters will be updated.", 
      method: 'PUT',
      resource_url: '/api/bikes/:id',
      params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 2
      },
      { 
        name : 'is_available',
        type: 'boolean',
        required: 'optional',
        description: 'Whether or not the bike is available for rent',
        example: 'true'
      },
      { 
        name : 'docked_station_id',
        type: 'integer',
        required: 'optional',
        description: 'Station where the bike is docked',
        example: 8
      },
      { 
        name : 'active_rider_id',
        type: 'integer',
        required: 'optional',
        description: 'ID of the member currently riding the bike',
        example: 253
      },
      { 
        name : 'last_rider_id',
        type: 'integer',
        required: 'optional',
        description: 'ID of the member who last rode the bike',
        example: 421
      }],
      response: `      
      {
        "id": 2,
        "is_available": false,
        "docked_station_id": 1,
        "active_rider_id": 5,
        "last_rider_id": 626
      }`
    }, 
    'Delete a bike':
    {
      summary: 'Removes a bike from the system by the given ID.',
      method: 'DELETE',
      resource_url: '/api/bikes/:id',
      params: [{ 
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
      params: [{ 
        name : 'bike_id',
        type: 'integer',
        required: 'required',
        description: 'ID associated with the bike',
        example: 18
      }],
      response: `
      {
        "is_available": 'true'
      }`
    }, 
    'Retrieve docked station':
    {
      summary: 'Returns the station where the bike with the given ID is docked.',
      method: 'GET',
      resource_url: '/api/bikes/:id/station',
      params: [{ 
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
      params: [{ 
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
    }                                        
  }
}
