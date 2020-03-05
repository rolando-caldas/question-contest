import Contest from "../Entity/Contest";
import Question from "../Entity/Question";

export default class {
  constructor(db) {
    this._db = db;
    this._collection = this._db.collection('contest');
  }

  add(contest) {
    return this._collection.insertOne(contest)
      .then(result => result)
      .catch(err => { throw new Error(err.message) });
  }

  update(contest) {
    return this._collection.replaceOne(
      { _id: contest.id },
      contest
    )
      .then(result => result)
      .catch(err => { throw new Error(err.message) });
  }

  delete(id) {
    return this._collection.deleteOne({ _id: id })
      .then(result => result)
      .catch(err => { throw new Error(err.message) });
  }

  findAll() {
    return this._collection.find({}).toArray().then(items => {
      let data = [];
      for (let indexItem in items) {
        data.push(this._contestBuilder(items[indexItem]));
      }
      return data;
    })
      .catch(reason => console.error(reason));
  }

  find(id) {
    return this._collection.findOne({_id: id}).then(item => {
      if (item === null) {
        throw new Error(`Element not found`);
      }
      return this._contestBuilder(item);
    }).catch(reason => { throw new Error(reason.message)});
  }

  _contestBuilder(item) {
    let contest = new Contest(item._id, item._title, item._author, item._description);
    for (let indexQuestion in item._questions) {
      contest.addQuestion(this._questionBuilder(item._questions[indexQuestion]));
    }
    return contest;
  }

  _questionBuilder(item) {
    return new Question(item._question, item._options, item._valid);
  }
}