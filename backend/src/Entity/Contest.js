'use strict'

import * as uuid4 from 'uuid4';

export default class Contest {
  constructor(id, title, author, description) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._description = description;
    this.clearQuestions();
  }

  get id() {
    return this._id;
  }

  set title(value) {
    this._title = value;
  }

  get title() {
    return this._title;
  }

  set author(value) {
    this._author = value;
  }

  get author() {
    return this._author;
  }

  set description(value) {
    this._description = value;
  }

  get description() {
    return this._description;
  }

  addQuestion(question) {
    this._questions.push(question);
  }

  allQuestions() {
    return this._questions;
  }

  clearQuestions() {
    this._questions = [];
  }
}
