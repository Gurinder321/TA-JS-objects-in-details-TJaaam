// let questionsMethods = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// Pseudoclassical pattern

// function CreateQuestion(title, options, correctAnswerIndex) {
//   this.title = title;
//   this.option = options;
//   this.correctAnswerIndex = correctAnswerIndex;
// }

// CreateQuestion.prototype = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// Class pattern

class CreateQuestion{
  constructor(title, options, correctAnswerIndex) {
  this.title = title;
  this.option = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

const firstQuestion = new CreateQuestion(
  "What is the capital of Jordan?",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
const secondQuestion = new CreateQuestion(
  "What is the capital of Jamaica?",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
