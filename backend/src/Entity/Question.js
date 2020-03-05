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

let p = {
  "id": "5e5e7701bee335021d392039",
  "title": "Example",
  "author": "Rolando",
  "description": "balblabal",
  "questions": [
    {
      "question": "Pregunta 1",
      "options": [
        "uno",
        "dos",
        "tres"
      ],
      "valid": "dos"
    },
    {
      "question": "Pregunta 2",
      "options": [
        "uno",
        "dos",
        "tres"
      ],
      "valid": "uno"
    }
  ]
};

let a = {
  "data": {
    "_title": "Holitas",
    "_author": "Rolando",
    "_description": "test",
    "_questions":
      [
        {
          "_question": "pepe",
          "_options": null,
          "_valid": null
        }
      ]
  }
}