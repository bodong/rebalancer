## Rebalancer App

Mini application using ES6 code running on node js environment

### Environment

This code is built and tested using :

- node js version v18.11.0
- npm version 8.19.2
- jest and babel jest version 29.4.3
- babel preset-env 7.20.2

### How To Run the Application

- with local node & npm : `npm start {budget values}`, while budget values is number with minimum value `10000`
- with docker : (make sure you are login to docker hub)
  - `docker run -e BUDGET=100000 sarwo/rebalancer:1.0.0`, you can change the budget into your desire amount as long as greater than or equal to `10000`
- with docker-compose : you can modify the `docker-compose.yml` to update the budget
  - `docker compose up`

### How To Run Test

> jest and babel jest need to install in your local to run this test, asumming you have node.js installed. Run following to install jest `npm install --save-dev jest babel-jest @babel/preset-env`

execute following command : `npm test`
