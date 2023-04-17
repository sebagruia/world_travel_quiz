export interface Choice {
  id: number;
  text: string;
}
export interface Question {
  id: string;
  name: string;
  text: string;
  choices: Choice[];
  correctAnswer: string;
  answerDescription: string;
  backgoundImage: string;
}
export interface Questions {
  [key: string]: Question;
}
