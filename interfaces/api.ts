export interface Choice {
  id: number;
  text: string;
}
export interface Question {
  id: number;
  text: string;
  choices: Choice[];
  correctAnswer: string;
  answerDescription: string;
}
export interface Questions {
  [key: string]: Question;
}
