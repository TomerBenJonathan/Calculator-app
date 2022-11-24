"use strict";

function promptAlert() {
  alert("Developer: Tomer Ben Jonathan" + "\n" + "Version: 0.1" + "\n" + "Description: Calculator App");
}

function myFunction() {
  var sel1 = document.getElementById('background').value;
  document.body.style.backgroundColor = sel1;
}

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var font = urlParams.get('font');
var color = urlParams.get('color');
var rating = urlParams.get('rating');

if (color === "green") {
  document.body.style.backgroundColor = "green";
} else if (color === "yellow") {
  document.body.style.backgroundColor = "yellow";
} else if (color === "blue") {
  document.body.style.backgroundColor = "blue";
} else if (color === "green") {
  document.body.style.backgroundColor = "green";
} else {
  document.body.style.backgroundColor = "white";
}

if (font === "serif") {
  document.body.style.fontFamily = "serif";
} else if (font === "monospace") {
  document.body.style.fontFamily = "monospace";
} else if (font === "fangsong") {
  document.body.style.fontFamily = "fangsong";
} else if (font === "ariel") {
  document.body.style.fontFamily = "ariel";
} else {
  document.body.style.fontFamily = "normal";
}

if (rating === 'dark') {
  document.getElementById("cury").classList.remove("calculator-light");
  document.getElementById("cury").classList.add("calculator-dark");
} else {
  document.getElementById("cury").classList.add("calculator-light");
  document.getElementById("cury").classList.remove("calculator-dark");
}