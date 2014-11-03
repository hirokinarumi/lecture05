// 答えを出力する関数
var showAnswer = function(message){
var output = document.querySelector("answer");
output.value = message;
};

// ボタンが押されたら、実行される関数
var add1 = function(event){
var inputA = document.getElementByld("input-a").value;
var inputB = document.getElementByld("input-b").value;



var answer = input-a+input-b;

console.log("helloWorld: start");
showAnswer(answer);
console.log("helloWorld: end");
};

//　初期設定を行う関数
var boot = function(event){
console.log("boot: start");
var button = document.querySelector("button");
button.addEventListener("click", add);
console.log("boot: end");
};

// loadイベント発生時にbootを呼ぶように設定
window.addEventListener("load", boot);
