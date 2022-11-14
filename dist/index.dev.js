"use strict";

function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}

function insertoperator(num) {
  equal();
  document.form1.textview.value = document.form1.textview.value + num;
}

function equal() {
  var exp = document.form1.textview.value;

  if (exp) {
    document.form1.textview.value = eval(exp);
  }
}

function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length - 1);
}

function promptAlert() {
  alert("Developer: Tomer Ben Jonathan" + "\n" + "Version: 0.1" + "\n" + "Description: Calculator App");
}