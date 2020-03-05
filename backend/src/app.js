'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import Router from './App/Router';
import parameters from "./App/Parameters";

export default class App {
  constructor(repositoryContainer) {
    this._repositoryContainer = repositoryContainer;
  }

  start() {
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });
    app.use('/', (new Router(this._repositoryContainer)).routes);

    app.listen(parameters.server.port, () => {
      console.log(`Server running on http://localhost:${parameters.server.port}`);
    });
  }
}
