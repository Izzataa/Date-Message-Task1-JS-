"use strict";

function message() {
  var d = new Date();
  var currentHour = d.getHours();

  if (currentHour >= 0 && currentHour < 6) {
    alert("Good night!");
  } else if (currentHour >= 6 && currentHour < 12) {
    alert("Good morning!");
  } else if (currentHour >= 12 && currentHour < 18) {
    alert("Good afternoon!");
  } else {
    alert("Good evening!");
  }
}

message();