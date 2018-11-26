
var fileName = "index.js";

var hello = function(name){
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called " + fileName);
};

var spanky = function(){
    console.log("I'm Spanky, but my app.js calls me John Brown");
};

module.exports = {
    hello:hello,  //method names here
    intro:intro,
    JohnBrown: spanky
};