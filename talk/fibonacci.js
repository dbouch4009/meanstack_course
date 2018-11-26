var asyncFibboTest = function(){
console.log("Start of async fibbo");
var recursive = function(num){
        if(num<=2){
            return 1;
        } else{
            console.log(num);
            return recursive(num-1) + recursive(num-2);
        }
    };
    console.log("End of async fibbo");
}


module.exports.fibonacciSync = function(){
    console.log("Sync Start Fibbo");
    console.log(recursive(42));
    console.log("Sync End Fibbo");
}

module.exports.fibonacciAsync = function(){
    console.log("Async Start Fibbo");
    console.log(recursive(42));
    console.log("Async End Fibbo");
}

module.exports.aSyncFibboTest = function(){
    asyncFibboTest();
}