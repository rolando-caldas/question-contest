import ContestRepository from "./ContestRepository";

export default class Container {
  constructor(db) {
    this._db = db;
  }
  get(entityName) {
    if (entityName === 'Contest') {
      return new ContestRepository(this._db);
    }
  }
}