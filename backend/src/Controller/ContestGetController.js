'use strict'

export default class ContestGetController {
  constructor(repository) {
    this._repository = repository;
  }

  index(res, id) {
    this._repository.find(id)
      .then(data => {
        res.status(200).send({data});
      })
      .catch(reason => res.status(400).send(reason));
  }
}


