const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
var app = express();

app.get('/', function(req, res) {
    res.render('calculator.html');
});

function meanFunction() {
  // var i;
  // var y;
  // var total;
  // var x = document.getElementsByTagName("input");
  // for(i=1; i<12; i=i+3){
  //   y = x[i] / x[i+1];
  //   total = total + y;
  // }
  var a11 = document.getElementById("A1Grade1").value;
  var a12 = document.getElementById("A1Grade2").value;
  var a21 = document.getElementById("A2Grade1").value;
  var a22 = document.getElementById("A2Grade2").value;
  var a31 = document.getElementById("A3Grade1").value;
  var a32 = document.getElementById("A3Grade2").value;
  var a41 = document.getElementById("A4Grade1").value;
  var a42 = document.getElementById("A4Grade2").value;
  document.getElementById("res").innerHTML = ((a11/a12)+(a21/a22)+(a31/a32)+(a41/a42))/4;
}
