"use strict";

// let cur_value ="";
// let first_operand= "";
// let cur_operator = "";
// let second_operand = "";
function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
} // if (cur_operator===""){
// first_operand=first_operand + num;}
// else if(cur_operator!==""){
// second_operand =  second_operand + num;} 
// document.form1.textview.value= first_operand+ cur_operator+ second_operand;  


function insertoperator(num) {
  if (document.form1.textview.value.slice(-1) === '*' || document.form1.textview.value.slice(-1) === '/' || document.form1.textview.value.slice(-1) === '+' || document.form1.textview.value.slice(-1) === '-') {
    document.form1.textview.value = document.form1.textview.value.slice(0, -1) + num;
  } else {
    var exp = document.form1.textview.value;

    if (exp) {
      document.form1.textview.value = eval(exp);
      document.form1.textview.value = document.form1.textview.value + num;
    }
  }
} // if(second_operand !==""){
// const exp = document.form1.textview.value;
// if (exp) {
//      =eval(exp)
//      document.form1.textview.value =first_operand+ num;
//   cur_operator=num;}
// else{ 
// cur_operator=num;
// document.form1.textview.value= first_operand + cur_operator;


function alertNum(el) {
  alert(el);
}

function equal() {
  var exp = document.form1.textview.value;

  if (exp) {
    document.form1.textview.value = eval(exp);
  }

  alertNum(eval(exp)); /// add >> first_operand= eval(exp) ;
  ///              cur_value =eval(exp) ;
  /// cur_operator = "";
  /// second_operand = "";
}

function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length - 1);
} // if(second_operand !==""){
//const exp = second_operand;
//second_operand= exp.substring(0, exp.length - 1);
//}else if(cur_opraor!==""){
//cur_opraor="";
//}else if(first_operand!==""){
//const exp = first_operand;
//first_operand= exp.substring(0, exp.length - 1);
//}
// first_operand + first_operator + second_operand;


function clear() {//cur_value="" ;
  // first_operand="";
  // first_operator="" ;
  // second_operand="" ;
  // document.form1.textview.value= first_operand + first_operator + second_operand;
}

function power() {
  var exp = document.form1.textview.value;

  if (exp) {
    document.form1.textview.value = Math.pow(eval(exp), 2);
  }
}

function promptAlert() {
  alert("Developer: Tomer Ben Jonathan" + "\n" + "Version: 0.1" + "\n" + "Description: Calculator App");
}

function myFunction() {
  var sel1 = document.getElementById('background').value;
  document.body.style.backgroundColor = sel1;
  backspace();
} // function mylight() {
//     var divEle = document.getElementById("cury"),
//         current_class = divEle.className;
//     divEle.className = (current_class == "calculator-light") ? "calculator-dark" : "calculator-light";
// }


function handleLight() {
  var calcScreen = document.querySelector(".calculator-screen");

  if (calcScreen.style.backgroundColor !== "yellow") {
    calcScreen.style.backgroundColor = "yellow";
  } else {
    var _calcScreen = document.querySelector(".calculator-screen");

    _calcScreen.style.backgroundColor = "white";
  }
}