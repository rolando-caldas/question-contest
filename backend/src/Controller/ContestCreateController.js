'use strict'

import mongo from "mongodb";
import Contest from "../Entity/Contest";
import Question from "../Entity/Question";

export default class ContestCreateController {
  constructor(repository) {
    this._repository = repository;
  }

  index(res, data) {
    let contest;
    try {
      contest = this.createContestOrFail(data);
    } catch (e) {
      console.log(e.message);
      return res.status(500).send();
    }

    this._repository.add(contest)
      .then(result => res.status(200).send())
      .catch(error => {console.log('erroe2'); return res.status(500).send()});
  }

  createContestOrFail(body) {
    this.bodyIsValidOrFail(body);
    const contest = new Contest(body.id, body.title, body.author, body.description);
    for (let question in body.questions) {
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
    return question.hasOwnProperty('question') ||
      question.hasOwnProperty('options') ||
      question.hasOwnProperty('valid');
  }

}

