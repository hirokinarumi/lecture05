
var greeting = function(message){
  window.alert(message);
};

var helloWorld = function(event){
  var input = document.querySelector("input");
  var inputText = input.value;
  console.log("helloWorld: start");
  greeting("Hello, world");
  console.log("helloWorld: end");
};


var boot = function(event){
  console.log("boot: start");
  var button = document.querySelector("h1");
  button.addEventListener("click", helloWorld);
  button.addEventListener("dblclic",helloworld);
  console.log("boot: end");
};

window.addEventListener("load", boot);
