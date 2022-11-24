"use strict";

var Enabled = true; // let cur_value ="";
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
  if (Enabled === true) {
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
} // if(second_operand !==""){
// const exp = document.form1.textview.value;
// if (exp) {
//      =eval(exp)
//      document.form1.textview.value =first_operand+ num;
//   cur_operator=num;}
// else{ 
// cur_operator=num;
// document.form1.textview.value= first_operand + cur_operator;


function insertoperatorScientific(num) {
  if (Enabled === false) {
    if (document.form1.textview.value.slice(-1) === '*' || document.form1.textview.value.slice(-1) === '/' || document.form1.textview.value.slice(-1) === '+' || document.form1.textview.value.slice(-1) === '-') {
      document.form1.textview.value = document.form1.textview.value.slice(0, -1) + num;
    } else {
      document.form1.textview.value = document.form1.textview.value + num;
    }
  }
}

function alertNum(el) {
  alert(el);
}

function equal() {
  history();
  var exp = document.form1.textview.value;

  if (exp) {
    document.form1.textview.value = eval(exp);
  } /// add >> first_operand= eval(exp) ;
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
    document.getElementById("lump").style.backgroundColor = "orange";
  } else {
    var _calcScreen = document.querySelector(".calculator-screen");

    _calcScreen.style.backgroundColor = "white";
    document.getElementById("lump").style.backgroundColor = "lightblue";
  }
}

function power2() {
  document.form1.textview.value += "**(2)";
}

function power_y() {
  document.form1.textview.value += "**";
}

function root_2() {
  document.form1.textview.value += "**(0.5)";
}

function root_y() {
  document.form1.textview.value += "**(1/";
}

function PI() {
  document.form1.textview.value += "".concat(Math.PI.toFixed(4));
}

function history() {
  var exp = document.form1.textview.value;
  var history_test = "".concat(exp, " \n =").concat(eval(exp), "\n");
  span = document.getElementById("hist");
  span.style.fontSize = "35px";
  span.style.textAlign = "center";
  document.getElementById("hist").innerText += history_test;
  console.log(history_test);
}

function clear_history() {
  document.getElementById("hist").innerText = "";
}

document.getElementById("histdev").style.display = "none";

function history_on() {
  var calcScreen = document.getElementById("clocky");

  if (calcScreen.style.backgroundColor !== "orange") {
    calcScreen.style.backgroundColor = "orange";
    document.getElementById("histdev").style.display = "block";
  } else {
    var _calcScreen2 = document.getElementById("clocky");

    _calcScreen2.style.backgroundColor = "lightblue";
    document.getElementById("histdev").style.display = "none";
  }
}

document.getElementById("cont").style.display = "none";

function scientific_on() {
  clear_history();
  var calcScreen = document.getElementById("scientific");

  if (calcScreen.style.backgroundColor !== "orange") {
    calcScreen.style.backgroundColor = "orange";
    document.getElementById("cont").style.display = "block";
    Enabled = false;
  } else {
    var _calcScreen3 = document.getElementById("scientific");

    _calcScreen3.style.backgroundColor = "lightblue";
    document.getElementById("cont").style.display = "none";
    Enabled = true;
  }
} //(async ()=> {} =>{
// try{
//const response= await fetch(`http://api.mathjs.org/v4/?expr=${encodeURIComponent(string(document.form1.textview.value))}`);
//const result =await response.text();
//console.log(result);
//  }
//catch(err){
//     console.log(result);
// }
//})();


function loadGames() {
  var response, games;
  return regeneratorRuntime.async(function loadGames$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetchWithTimeout("http://api.mathjs.org/v4/?expr=".concat(encodeURIComponent(string(document.form1.textview.value))), {
            timeout: 2000
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          games = _context.sent;
          document.form1.textview.value = games;
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // Timeouts if the request takes
          // longer than 2 seconds
          console.log(_context.t0.name === 'AbortError');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}