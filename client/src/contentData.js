require('dotenv').config();

module.exports = {
  text: {
    'Overview' : {
      summary: 'This is the documentation for... sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. magna aliquyam'
    },    
    'GET /members':
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
      'POST /members':
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
      'GET /members/:id':
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
    'POST /members/:id':
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
    'DELETE /members/:id':
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
    'GET /members/:id/ride_count':
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
    'GET /members/:id/status':
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
    'GET /members/:id/toggle_access_level':
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
    'GET /stations':
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
    'POST /stations':
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
    'GET /stations/:id':
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
    'PUT /stations/:id':
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
    'DELETE /stations/:id':
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
    'GET /stations/:id/bike_count':
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
    'GET /stations/:id/bikes':
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
    'GET /stations/:id/volume':
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
    'POST /stations/:id/rent':
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
    'POST /stations/:id/return':
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
    'GET /bikes':
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
    'POST /bikes':
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
    'GET /bikes/:id':
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
    'POST /bikes/:id':
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
    'DELETE /bikes/:id':
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
    'GET /bikes/:id/availability':
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
    'GET /bikes/:id/station':
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
    'GET /bikes/:id/last_rider':
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
