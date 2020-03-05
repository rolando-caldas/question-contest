'use strict'

export default class Question {
  constructor(question, options, valid) {
    this._question = question;
    this._options = options;
    this._valid = valid;
  }

  set question(value) {
    this._question = value;
  }

  get question() {
    return this._question;
  }

  set valid(value) {
    this._valid = value;
  }

  get valid() {
    return this._valid;
  }

  get options() {
    return this._options;
  }

}