# CityBike Data Model & API

API Documentation: https://citybike-developers.herokuapp.com

## Development

### Installing dependencies

```
brew install npm
brew install postgresql
```

From within the root directory:

```
npm install
```

## Database creation/initialization

Start up `postgres`:

```
psql postgres
```
or if that doesn't work, try:
```
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

In postgres, create a local database:
```
CREATE DATABASE databaseName;
```

Check the user associated with the database:

```
\l
```

Duplicate the example.env file and rename it to:
```
.env
```
Replace the contents with your local database info.

### Run migration & seed data

In terminal, from the root directory:

```
knex migrate:latest
knex seed:run
```

## Running the app

```
npm run build
npm start
```

To run tests: 
```
npm run test
```
Note: There's currently no separate DB/migration/seed file for testing, so running these tests will perform rollback/migrate/seed/rollback. You'll have to run migrations/seed the data for development.

---


## Motivate Coding Project

You are responsible for building a bike share system.
* The bike share has 200 bikes, 1000 members, and 10 stations.
* Bikes are stored at stations when not in use. Each bike can only be used by one member at a time. 
* Members are able to take bikes out of stations and return them to different stations.
* A station that is empty cannot have bikes rented.

Build a data model and API for this bike share system. 
* It should have at least (but not limited to) RESTful resources for Bikes, Stations, and Members. 
* It should be able to rent and return bikes, view whether or not they are available, see which station they are docked at, and who the last member who rode them was.
* It should be able to view the number of bikes at a station, see which bikes they are, and whether a station is empty.
* It should be able to tell how many rides a member has taken, whether or not they are currently riding a bike, and enable/disable their ability to rent a bike.

You may use any languages or tools to build this, but be ready to explain your tool choices, especially if they are exotic. Anything not explicitly specified above is left to your own judgement. 

Please write functional and unit tests to ensure the proper functioning of this system. Also include any documentation necessary to run this project and execute the tests, as well as any other documentation you think would be helpful to understanding and operating the system.

You have 2 weeks to complete this project.  Please commit your results to this repository.

This is not expected to be perfect. Be ready to talk about your results, the decisions that you made, the tradeoffs involved, and to extend it in the future.

If you have any questions, please contact danielfried@motivateco.com
