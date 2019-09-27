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

  if (a11.length == 0) {
    a11 = 0;
  }
  if (a12.length == 0) {
    a12 = 0;
  }
  if (a21.length == 0) {
    a21 = 0;
  }
  if (a22.length == 0) {
    a22 = 0;
  }
  if (a31.length == 0) {
    a131 = 0;
  }
  if (a32.length == 0) {
    a32 = 0;
  }
  if (a41.length == 0) {
    a41 = 0;
  }
  if (a42.length == 0) {
    a42 = 0;
  }

  var a1perc = a11/a12;
  var a2perc = a21/a22;
  var a3perc = a31/a32;
  var a4perc = a41/a42;
  var count = 4;
  if (a1perc > 101 || a12 == 0) {
    a1perc = 0;
    count--;
  }
  if (a2perc > 101 || a22 == 0) {
    a2perc = 0;
    count--;
  }
  if (a3perc > 101 || a32 == 0) {
    a3perc = 0;
    count--;
  }
  if (a4perc > 101 || a42 == 0) {
    a4perc = 0;
    count--;
  }
  if (count == 0) {
    document.getElementById("res").innerHTML = "Invalid Inputs";
  }
  else {
  var total = (a1perc*1+a2perc*1+a3perc*1+a4perc*1)/count;
  document.getElementById("res").innerHTML = (total*100).toFixed(2)+"/100";
  }
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

  if (a11.length == 0) {
    a11 = 0;
  }
  if (a12.length == 0) {
    a12 = 0;
  }
  if (a21.length == 0) {
    a21 = 0;
  }
  if (a22.length == 0) {
    a22 = 0;
  }
  if (a31.length == 0) {
    a131 = 0;
  }
  if (a32.length == 0) {
    a32 = 0;
  }
  if (a41.length == 0) {
    a41 = 0;
  }
  if (a42.length == 0) {
    a42 = 0;
  }
  if (a1w.length == 0) {
    a1w = 0;
  }
  if (a2w.length == 0) {
    a2w = 0;
  }
  if (a3w.length == 0) {
    a3w = 0;
  }
  if (a4w.length == 0) {
    a4w = 0;
  }

  var a1perc = a11/a12;
  var a2perc = a21/a22;
  var a3perc = a31/a32;
  var a4perc = a41/a42;
  if (a1perc > 101 || a12 == 0) {
    a1perc = 0;
    a1w = 0;
  }
  if (a2perc > 101 || a22 == 0) {
    a2perc = 0;
    a2w = 0;
  }
  if (a3perc > 101 || a32 == 0) {
    a3perc = 0;
    a3w = 0;
  }
  if (a4perc > 101 || a42 == 0) {
    a4perc = 0;
    a4w = 0;
  }
  var count = a1w*1+a2w*1+a3w*1+a4w*1;
  if (count == 0) {
    document.getElementById("res").innerHTML = "Invalid Inputs";
  }
  else {
    var total = ((a1perc*a1w)+(a2perc*a2w)+(a3perc*a3w)+(a4perc*a4w));
    var result = (total/count)*100;
    document.getElementById("res").innerHTML = result.toFixed(2)+"/100";
  }
}

function A1per() {
  var a = document.getElementById("A1Grade1").value;
  var b = document.getElementById("A1Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A1Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A1Percent").innerHTML = "Percentage invalid for other calculations!";
  }
}
function A2per() {
  var a = document.getElementById("A2Grade1").value;
  var b = document.getElementById("A2Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A2Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A2Percent").innerHTML = "Percentage invalid for other calculations!";
  }
}
function A3per() {
  var a = document.getElementById("A3Grade1").value;
  var b = document.getElementById("A3Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A3Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A3Percent").innerHTML = "Percentage invalid for other calculations!";
  }
}
function A4per() {
  var a = document.getElementById("A4Grade1").value;
  var b = document.getElementById("A4Grade2").value;
  var total = (a/b)*100;
  if (total < 101) {
    document.getElementById("A4Percent").innerHTML = (total).toFixed(2)+"%";
  } else {
    document.getElementById("A4Percent").innerHTML = "Percentage invalid for other calculations!";
  }
}
