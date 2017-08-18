# CityBike Data Model & API

A data model and RESTful API for a concept bike share system. API supports: 
* RESTful resources for bikes, stations, and members. 
* Viewing the number of bikes at a station, seeing which bikes they are.
* Viewing how many rides a member has taken, whether or not they're currently riding a bike, and enabling/disabling their ability to rent a bike.
* Renting/returning bikes at different stations, viewing whether or not a bike is available, seeing which station they're docked at, and who the last rider was.
* Getting the number of active trips, getting total trip counts by year.

Full API Documentation and demo: https://citybike-developers.herokuapp.com

The demo is currently seeded with data for 200 bikes, 1000 members, 10 stations, and 500 trips.

## Development

### Installing dependencies

```
brew install npm
brew install postgresql
```

From within the root directory:

```
npm install
npm install --save-dev nodemon  //to autodetect server code changes
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

In Postgres, create a local database:
```
CREATE DATABASE bikeshare;
```

Check the user associated with the bikeshare database:

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
