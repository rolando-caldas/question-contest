'use strict'

import * as express from 'express';
import ContestListController from '../Controller/ContestListController'
import ContestGetController from '../Controller/ContestGetController';
import ContestCreateController from '../Controller/ContestCreateController';
import ContestUpdateController from '../Controller/ContestUpdateController';
import ContestDeleteController from '../Controller/ContestDeleteController';

export default class Router {

  constructor(repositoryContainer) {
    this._repositoryContainer = repositoryContainer;
    this._router = express.Router();
  }
  get routes() {

    this._router.get('', (req, res) => {
      (new ContestListController(this._repositoryContainer.get('Contest'))).index(res)
    });

    this._router.get('/contest', (req, res) => {
      (new ContestListController(this._repositoryContainer.get('Contest'))).index(res)
    });

    this._router.post('/contest', (req, res) => {
      (new ContestCreateController(this._repositoryContainer.get('Contest'))).index(res, req.body)
    });

    this._router.get('/contest/:id', (req, res) => {
      (new ContestGetController(this._repositoryContainer.get('Contest'))).index(res, req.params.id)
    });

    this._router.put('/contest/:id', (req, res) => {
      (new ContestUpdateController(this._repositoryContainer.get('Contest'))).index(res, req.params.id, req.body)
    });

    this._router.delete('/contest/:id', (req, res) => {
      (new ContestDeleteController(this._repositoryContainer.get('Contest'))).index(res, req.params.id)
    });

    return this._router;
  }
}