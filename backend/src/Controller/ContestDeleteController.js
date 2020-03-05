'use strict'

export default class ContestDeleteController {
  constructor(repository) {
    this._repository = repository;
  }

  index(res, id) {
    this._repository.delete(id)
      .then(data => {
        res.status(200).send({});
      })
      .catch(reason => res.status(400).send(reason));
  }
}