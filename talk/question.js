var answer = "Now that's a good question";
var answerTwo ="Peaches and Creme, of course";

module.exports.ask= function(question){   //alternative way of assigning to exports
    console.log(question);
    return answer;
};

module.exports.askTwo = function(question){
    console.log(question);
    return answerTwo;
}