import {Question} from "./Question";

export class Contest {
  _id: string;
  _title: string;
  _author: string;
  _description: string;
  _questions: Array<Question>;
}
