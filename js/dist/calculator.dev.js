"use strict";

var cur_value = null;
var first_operand = null;
var cur_operator = null;
var second_operand = null;

function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}

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
}

function alertNum(el) {
  alert(el);
}

function equal() {
  var exp = document.form1.textview.value;

  if (exp) {
    document.form1.textview.value = eval(exp);
  }

  alertNum(eval(exp));
}

function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length - 1);
}

function clear() {
  var cur_value;
  var first_operand;
  var first_operator;
  var second_operand;
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
}