'use strict'

import mongo from "mongodb";
import Contest from "../Entity/Contest";
import Question from "../Entity/Question";

export default class ContestUpdateController {
  constructor(repository) {
    this._repository = repository;
  }

  index(res, id, data) {
    let contest;
    try {
      if (id !== data.id) {
        throw new Error('Id not valid');
      }
      contest = this.createContestOrFail(data);
    } catch (e) {
      return res.status(500).send();
    }

    this._repository.update(contest)
      .then(result => res.status(200).send())
      .catch(error => res.status(500).send());
  }

  createContestOrFail(body) {
    this.bodyIsValidOrFail(body);
    const contest = new Contest(body.id, body.title, body.author, body.description);
    for (let questionIndex in body.questions) {
      const question = body.questions[questionIndex];
      if (false === this.questionIsValid(question)) {
        continue;
      }
      contest.addQuestion(new Question(question.question, question.options, question.valid));
    }
    return contest;
  }

  bodyIsValidOrFail(body) {
    if (
      !body.hasOwnProperty('title') ||
      !body.hasOwnProperty('author') ||
      !body.hasOwnProperty('description') ||
      !body.hasOwnProperty('questions')
    ) {
      throw new Error('Body not valid');
    }
  }

  questionIsValid(question) {
    console.log(question.hasOwnProperty('question'));
    console.log(question.hasOwnProperty('options'));
    console.log(question.hasOwnProperty('valid'));
    return question.hasOwnProperty('question') ||
      question.hasOwnProperty('options') ||
      question.hasOwnProperty('valid');
  }

}

