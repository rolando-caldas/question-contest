'use strict'

import mongo from 'mongodb';
import App from './app';
import parameters from './App/Parameters';
import Container from './Repository/Container';

const mongoClient = new mongo.MongoClient(parameters.mongo.url);
mongoClient.connect()
  .then(() => {
    console.log('Connected successfully to server');
    const db = mongoClient.db(parameters.mongo.dbName);
    const container = new Container(db);

    new App(container).start();

  })
  .catch(err => console.log(err));