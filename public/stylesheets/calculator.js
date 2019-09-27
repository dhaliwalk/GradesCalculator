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
  var total = ((a11/a12)+(a21/a22)+(a31/a32)+(a41/a42))/4;
  document.getElementById("res").innerHTML = (total*100).toFixed(2)+"/100";
}
function weightedFunction() {
  var a11 = document.getElementById("A1Grade1").value;
  var a12 = document.getElementById("A1Grade2").value;
  var a1w = document.getElementById("A1Weight").value;

  var a21 = document.getElementById("A2Grade1").value;
  var a22 = document.getElementById("A2Grade2").value;
  var a2w = document.getElementById("A2Weight").value;

  var a31 = document.getElementById("A3Grade1").value;
  var a32 = document.getElementById("A3Grade2").value;
  var a3w = document.getElementById("A3Weight").value;

  var a41 = document.getElementById("A4Grade1").value;
  var a42 = document.getElementById("A4Grade2").value;
  var a4w = document.getElementById("A4Weight").value;
  var divider  = a1w*1+a2w*1+a3w*1+a4w*1;
  var total = (((a11/a12)*a1w)+((a21/a22)*a2w)+((a31/a32)*a3w)+((a41/a42)*a4w));
  var result = (total/divider)*100;
  document.getElementById("res").innerHTML = result.toFixed(2)+"/100";
}

function A1per() {
  var a = document.getElementById("A1Grade1").value;
  var b = document.getElementById("A1Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A1Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A1Percent").innerHTML = "Percentage Too High!";
  }
}
function A2per() {
  var a = document.getElementById("A2Grade1").value;
  var b = document.getElementById("A2Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A2Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A2Percent").innerHTML = "Percentage Too High!";
  }
}
function A3per() {
  var a = document.getElementById("A3Grade1").value;
  var b = document.getElementById("A3Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A3Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A3Percent").innerHTML = "Percentage Too High!";
  }
}
function A4per() {
  var a = document.getElementById("A4Grade1").value;
  var b = document.getElementById("A4Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A4Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A4Percent").innerHTML = "Percentage Too High!";
  }
}
