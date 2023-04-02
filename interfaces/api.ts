export interface Choice {
  id: number;
  text: string;
}
export interface Question {
  id: number;
  text: string;
  choices: Choice[];
  answer: string;
}
export interface Questions {
  [key: string]: Question;
}
