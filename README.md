# Tema 23
Manager bibliografii integrat cu easybib citation api
Integrare [EasyBib Citation Api](https://api.citation-api.com/demo/examples)

## Server (backend)
### Installation
`npm install --prefix backend`

### Start
`npx nodemon backend/server.js`
The server listens to port 8080

## Client (Frontend)
### Installation
`npm install --prefix frontend`

### Start
`npm start --prefix frontend`
The client run on port 3000

## Usage
### Create tables in server
Access in postman with `GET` [`http://localhost:8080/sync`](http://localhost:8080/sync) to create tables

### Seed data in server
Access in postman with `GET` [`http://localhost:8080/seed`](http://localhost:8080/seed) to generate 10 publications using [faker](https://www.npmjs.com/package/faker)

### CLient
Press `Add publication` button to manually add a publication

Press the **edit** button to edit an existing publication or **delete** button to delete a publication.

### TODO
- easybib api integration
    - ClientID: 05f3a2b2380d47b393564ce1f4da2de30a5c34b5cb2470f8bd4b24c715ab4081
    - ClientSecret: 188d40edc360d53ab997464b74c4814ba116aeaf4411ec6aa8c96dffc9d40508

___

### Author
[Ionut Grecu](https://grecu.eu)

https://github.com/ionutgrecu/easybib-integration-demo

