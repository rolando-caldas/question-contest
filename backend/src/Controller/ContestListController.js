'use strict'

export default class ContestListController {
  constructor(repository) {
    this._repository = repository;
  }

  index(res) {
    this._repository.findAll()
      .then(data => {
        res.status(200).send({data});
      })
      .catch(reason => res.status(400).send(reason));
  }
}


