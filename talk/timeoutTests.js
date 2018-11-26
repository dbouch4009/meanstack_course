var child_process = require('child_process');  //lib for child processes

var newProcess = child_process.spawn('node',['./talk/fibonacci.js'],{
    stdio:'inherit'
});

var holdOnAsync = async function(){
    console.log("1: Start async app");
    console.log("2: In the async set-timeout");
    await sleep(2000);  //async, allows goodbye() to run
    console.log("3: End async app");
};

var holdOnSync = async function(){
    console.log("1: Start sync app");
    console.log("2: In the sync set-timeout");
    sleep(2000);  
    console.log("3: End sync app");
};



//console.log(recursive(42));

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

module.exports.timeOutTestAsync = function(){
    holdOnAsync();
}

module.exports.timeOutTestSync = function(){
    holdOnSync();
}

module.exports.aSyncFibboTest = function(){
    var child_process = require('child_process');  //lib for child processes

    var newProcess = child_process.spawn('node',['./talk/fibonacci.js'],{
        stdio:'inherit'
    });

}