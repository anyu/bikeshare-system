require('dotenv').config();

module.exports = {
  text: {
    'Overview' : {
      summary: 'The CityBike REST API allows you to query information about the members, stations, and bikes in the system. You can also perform operations such as renting and returning bikes.'
    },    
    'Retrieve all members':
      {
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
        resource_url: process.env.ROOT_URL + '/api/members',
        params: [{ 
          name : 'member_id',
          required: 'required',
          descrip: 'some text',
          example: 'example'
        },
        { 
          name : 'station_id',
          required: 'optional',
          description: 'some text',
          example: 'example'
        }],
        response: `{ message: 'poster'}`
      },
      'Add a member':
      {
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
        resource_url: process.env.ROOT_URL + '/api/members',
        params: [{ 
          name : 'member_id',
          required: 'required',
          descrip: 'some text',
          example: 'example'
        },
        { 
          name : 'station_id',
          required: 'optional',
          descrip: 'some text',
          example: 'example'
        }]
      },
      'Retrieve a member':
      {
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
        resource_url: process.env.ROOT_URL + '/api/members/:id',
        params: [{ 
          name : 'member_id',
          required: 'required',
          descrip: 'some text',
          example: 'example'
        },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },  
    'Update a member':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/members/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },
    'Delete a member':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/members/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },
    "Retrieve ride count":
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/members/:id/ride_count',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },
    'Retrieve status':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/members/:id/status',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },
    'Retrieve access level':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/members/:id/toggle_access_level',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },
    'Retrieve all stations':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },   
    'Add a station':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },     
    'Retrieve a station':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Update a station':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Delete a station':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Retrieve bike count':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/bike_count',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Retrieve list of bikes':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/bikes',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Retrieve volume':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/volume',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Rent a bike':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/rent',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Return a bike':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/stations/:id/return',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },   
    'Retrieve all bikes':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },   
    'Add a bike':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Retrieve a bike':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Update a bike':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Delete a bike':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    },     
    'Retrieve availability':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id/availability',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Retrieve docked station':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id/station',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }, 
    'Retrieve last rider':
    {
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam',
      resource_url: process.env.ROOT_URL + '/api/bikes/:id/last_rider',
      params: [{ 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      },
      { 
        name : 'member_id',
        required: 'required',
        descrip: 'some text',
        example: 'example'
      }]
    }                                        
  }
}
