require('dotenv').config();

module.exports = {
  text: {
    'Overview' : {
      summary: 'The CityBike REST API allows you to query information about the members, stations, and bikes in the system. You can also perform operations such as renting and returning bikes.'
    },    
    'Retrieve all members':
      {
        summary: 'Returns all members in the system', 
        resource_url: process.env.ROOT_URL + '/api/members',
        response: `[{"id":1,"first_name":"Khalid","last_name":"Sanford","email":"Marcel.Watsica@yahoo.com","status":"inactive","access_level":"none","ride_count":157},
                    {"id":2,"first_name":"Manley","last_name":"Wisozk","email":"Gerald.Upton@gmail.com","status":"active","access_level":"none","ride_count":112},
                    {"id":3,"first_name":"Emmalee","last_name":"Greenholt","email":"Jamil57@hotmail.com","status":"inactive","access_level":"none","ride_count":42}]`
      },
      'Add a member':
      {
        summary: 'Adds a new member to the system.', 
        resource_url: process.env.ROOT_URL + '/api/members',
        params: [{ 
          name : 'first_name',
          required: 'required',
          description: 'First name associated with the profile.',
          example: 'Lynn'
        },
        { 
          name : 'last_name',
          required: 'required',
          description: 'Last name associated with the profile.',
          example: 'Hill'
        },
        { 
          name : 'email',
          required: 'required',
          description: 'Email associated with the profile.',
          example: 'lynnhill@gmail.com'
        },
        { 
          name : 'status',
          required: 'optional',
          description: "Whether or not the member is on a ride. Defaults to 'inactive'",
          example: 'inactive'
        },
        { 
          name : 'access_level',
          required: 'optional',
          description: "Whether or not the member can rent a bike. Defaullts to 'full'",
          example: 'full'
        },
        { 
          name : 'ride_count',
          required: 'optional',
          description: 'Number of rides the member has taken. Defaults to 0.',
          example: '0'
        }           
      ],
        response: ``
      },
      'Retrieve a member':
      {
        summary: 'Returns a member by the given ID.', 
        resource_url: process.env.ROOT_URL + '/api/members/:id',
        params: [{ 
          name : 'member_id',
          required: 'required',
          description: 'some text',
          example: 'example'
        }],
        response: ``
    },  
    'Update a member':
    {
      summary: "Modifies a member by the given ID. Only specified parameters will be updated.",
      resource_url: process.env.ROOT_URL + '/api/members/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      },
      {
        name : 'first_name',
        required: 'optional',
        description: 'First name associated with the profile.',
        example: 'Lynn'
      },
      { 
        name : 'last_name',
        required: 'optional',
        description: 'Last name associated with the profile.',
        example: 'Hill'
      },
      { 
        name : 'email',
        required: 'optional',
        description: 'Email associated with the profile.',
        example: 'lynnhill@gmail.com'
      },
      { 
        name : 'status',
        required: 'optional',
        description: "Whether or not the member is on a ride. Defaults to 'inactive'",
        example: 'inactive'
      },
      { 
        name : 'access_level',
        required: 'optional',
        description: "Whether or not the member can rent a bike. Defaullts to 'full'",
        example: 'full'
      },
      { 
        name : 'ride_count',
        required: 'optional',
        description: 'Number of rides the member has taken. Defaults to 0.',
        example: '0'
      }],
      response: ``
    },
    'Delete a member':
    {
      summary: 'Removes a member from the system by the given ID.',
      resource_url: process.env.ROOT_URL + '/api/members/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      }],
      response: ``
    },
    "Retrieve ride count":
    {
      summary: 'Returns the number of rides taken by the member with the given id.',
      resource_url: process.env.ROOT_URL + '/api/members/:id/ride_count',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      }],
      response: ``
    },
    'Retrieve status':
    {
      summary: 'Returns the status of the member with the given id (whether or not the member is currently on a ride)',
      resource_url: process.env.ROOT_URL + '/api/members/:id/status',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      }],
      response: ``
    },
    'Retrieve access level':
    {
      summary: 'Returns the access level of the member with the given id (their ability to rent bikes)',
      resource_url: process.env.ROOT_URL + '/api/members/:id/toggle_access_level',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      }],
      response: ``
    },
    'Retrieve all stations':
    {
      summary: 'Returns all stations in the system.',
      resource_url: process.env.ROOT_URL + '/api/stations',
      response: `[{"id":1,"bike_count":0,"available_docks":19,"max_capacity":30},
                  {"id":2,"bike_count":33,"available_docks":17,"max_capacity":50}]`
    },   
    'Add a station':
    {
      summary: 'Adds a new station to the system.', 
      resource_url: process.env.ROOT_URL + '/api/stations',
      params: [{ 
        name : 'bike_count',
        required: 'required',
        description: 'some text',
        example: 9
      },
      { 
        name : 'available_docks',
        required: 'required',
        description: 'some text',
        example: 1
      },
      { 
        name : 'max_capacity',
        required: 'required',
        description: 'some text',
        example: 10
      }],
      response: ``
    },     
    'Retrieve a station':
    {       
      summary: 'Returns a station by the given ID.', 
      resource_url: process.env.ROOT_URL + '/api/stations/:id',
      params: [{ 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      }],
      response: `` 
    }, 
    'Update a station':
    {
      summary: "Modifies a station by the given ID. Only specified parameters will be updated.",      
      resource_url: process.env.ROOT_URL + '/api/stations/:id',
      params: [
      { 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 1
      },
      { 
        name : 'bike_count',
        required: 'optional',
        description: 'some text',
        example: 9
      },
      { 
        name : 'available_docks',
        required: 'optional',
        description: 'some text',
        example: 1
      },
      { 
        name : 'max_capacity',
        required: 'optional',
        description: 'some text',
        example: 10
      }],
      response: ``      
    }, 
    'Delete a station':
    {
      summary: 'Removes a station from the system by the given ID.',
      resource_url: process.env.ROOT_URL + '/api/stations/:id',
      params: [{ 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 10
      }],
      response: ``
    }, 
    'Retrieve bike count':
    {
      summary: 'Returns the number of bikes at the station with the given ID.',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/bike_count',
      params: [{ 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 10
      }],
      response: ``
    }, 
    'Retrieve list of bikes':
    {
      summary: 'Returns all bikes currently docked at the station with the given ID.',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/bikes',
      params: [{ 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 'example'
      }],
      response: 10
    }, 
    'Retrieve volume':
    {
      summary: 'Returns whether or not the station with the given ID is empty.',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/volume',
      params: [{ 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 10
      }],
      response: ``
    }, 
    'Rent a bike':
    {
      summary: 'Endpoint for members to rent a bike at the station with the given ID.',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/rent',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 501
      },
      { 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 9
      },
      { 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 5
      }],
      response: ``
    }, 
    'Return a bike':
    {
      summary: 'Endpoint for members to return a bike at the station with the given ID.',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/return',
      params: [{ 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 501
      },
      { 
        name : 'station_id',
        required: 'required',
        description: 'some text',
        example: 9
      },
      { 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 5
      }],
      response: ``
    },   
    'Retrieve all bikes':
    {
      summary: 'Returns all bikes in the system',
      resource_url: process.env.ROOT_URL + '/api/bikes',
      response: `[{"id":1,"is_available":false,"docked_station_id":8,"active_rider_id":331,"last_rider_id":383},
                  {"id":2,"is_available":false,"docked_station_id":3,"active_rider_id":419,"last_rider_id":639},
                  {"id":3,"is_available":true,"docked_station_id":8,"active_rider_id":883,"last_rider_id":577}]`
    },   
    'Add a bike':
    {
      summary: 'Adds a new bike to the system.',
      resource_url: process.env.ROOT_URL + '/api/bikes',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 2
      },
      { 
        name : 'member_id',
        required: 'required',
        description: 'some text',
        example: 501
      }]
    }, 
    'Retrieve a bike':
    {
      summary: 'Returns a station by the given ID.', 
      resource_url: process.env.ROOT_URL + '/api/bikes/:id',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 2
      }]
    }, 
    'Update a bike':
    {
      summary: "Modifies a station by the given ID. Only specified parameters will be updated.", 
      resource_url: process.env.ROOT_URL + '/api/bikes/:id',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 2
      },
      { 
        name : 'is_available',
        required: 'required',
        description: 'some text',
        example: 'true'
      },
      { 
        name : 'docked_station_id',
        required: 'required',
        description: 'some text',
        example: 8
      },
      { 
        name : 'active_rider_id',
        required: 'required',
        description: 'some text',
        example: 253
      },
      { 
        name : 'last_rider_id',
        required: 'required',
        description: 'some text',
        example: 421
      }
    ]
    }, 
    'Delete a bike':
    {
      summary: 'Removes a bike from the system by the given ID.',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 18
      }]
    },     
    'Retrieve availability':
    {
      summary: 'Returns whether or not the bike with the given ID is available for rent.',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id/availability',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 18
      }]
    }, 
    'Retrieve docked station':
    {
      summary: 'Returns the station where the bike with the given ID is docked.',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id/station',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 18
      }]
    }, 
    'Retrieve last rider':
    {
      summary: 'Returns the last member who rode the bike with the given ID.',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id/last_rider',
      params: [{ 
        name : 'bike_id',
        required: 'required',
        description: 'some text',
        example: 45
      }]
    }                                        
  }
}
