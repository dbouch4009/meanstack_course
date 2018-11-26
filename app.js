require("./instanthello.js");

var goodBye = require("./talk/goodbye.js");
var talk = require("./talk");  //will find the 'index.html' automatically
var question = require('./talk/question');
var setTimeout = require('./talk/timeoutTests');
var fibboTests = require('./talk/fibonacci');

talk.intro();
talk.hello("Damian");
talk.JohnBrown();

var answer = question.ask("What is the meaning of life?");
console.log(answer);

var answerTwo = question.askTwo("What is the best pie?");
console.log(answerTwo);

//setTimeout.timeOutTestAsync();
//setTimeout.timeOutTestSync();
//fibboTests.fibonacciSync();
//setTimeout.aSyncFibboTest();
fibboTests.aSyncFibboTest();
setTimeout.aSyncFibboTest();

goodBye();  //exposed from other file, so we can invoke it