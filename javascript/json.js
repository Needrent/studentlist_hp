"use strict";

// Listen for the browser to load the DOM
window.addEventListener("DOMContentLoaded", start);

//Empty array for the student list
const allStudents = [];

//Start
function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons

  loadJSON();
}

function loadJSON() {
  fetch("http://petlatkea.dk/2019/hogwartsdata/students.json")
    .then(response => response.json())
    .then(jsonData => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach(jsonObject => {
    // TODO: Create new object with cleaned data
    const student = Object.create(Student);

    //TODO interpret jsonObject into their properties
    student.firstName = jsonObject.fullname.split(" ")[0];
    student.lastName = jsonObject.fullname.split(" ")[2];
    student.gender = jsonObject.gender;
    student.house = jsonObject.house;

    allStudents.push(student);
    //  console.log(student);
  });
}

function displayList(student) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = " ";

  // build a new list
  student.forEach(displayStudent);
}

function displayStudent(student) {
  // create clone
  const clone = document
    .querySelector("template#student")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=firstName]").textContent = "dims01";
  clone.querySelector("[data-field=lastName]").textContent = "dims02";
  clone.querySelector("[data-field=house]").textContent = "dims03";

  /*
    student.firstName = jsonObject.fullname.split(" ")[0];
    student.lastName = jsonObject.fullname.split(" ")[2];
    student.gender = jsonObject.gender;
    student.house = jsonObject.house;
  */

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

// Student Object Prototype
const Student = {
  name: "-name-",
  house: "-type-",
  gender: "-boy/girl-",
  blood: "-muggle-",
  prefect: false,
  expelled: false,
  id: 0,
  inquisitor: false
};
