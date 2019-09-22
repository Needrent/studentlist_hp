"use strict";

// Listen for the browser to load the DOM
window.addEventListener("DOMContentLoaded", start);

//Empty array for the student list
const allStudents = [];

//Start
function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  document
    .querySelector(`[data-sort=firstName]`)
    .addEventListener("click", check);
  document
    .querySelector(`[data-sort=lastName]`)
    .addEventListener("click", check);
  document.querySelector(`[data-sort=house]`).addEventListener("click", check);

  loadJSON();
}
function check() {
  console.log("click");
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

    const nameArr = jsonObject.fullname.split(" "); // Catch all names and make them an array

    // Clean the House name by removing the spaces (trim) and the making the first char uppercase
    // https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    const lower = jsonObject.house.trim().toLowerCase();
    const upper = lower.charAt(0).toUpperCase() + lower.substring(1);
    // End

    // Removes Array objects that are empty because of extra spaces
    // https://tecadmin.net/remove-array-element-by-value-in-javascript/
    var index = nameArr.indexOf("");

    if (index > -1) {
      nameArr.splice(index, 1);
    }
    // End

    //Looks how many names the student has and write them out accordingly
    //TODO interpret jsonObject into their properties
    if (nameArr.length >= 3) {
      student.firstName = nameArr[0];
      student.middelName = nameArr[1];
      student.lastName = nameArr[2];
      student.splitLastName = nameArr[0].split("");
    } else if (nameArr.length >= 2) {
      student.firstName = nameArr[0];
      student.lastName = nameArr[1];
      student.splitLastName = nameArr[0].split("");
    } else {
      student.firstName = nameArr[0];
    }

    if (student.lastName == null) {
      student.img = "placeholder";
    } else {
      student.img = `${student.lastName.toLowerCase()}_${student.splitLastName[0].toLowerCase()}`;
    }
    student.gender = jsonObject.gender;
    student.house = upper;

    allStudents.push(student);
  });
  filterList(allStudents);
}
function filterList(list) {
  // TODO: Add filtering, according to setting
  const filteredList = list; // right now, just don't filter anything
  sortList(filteredList);
}

function sortList(list) {
  // TODO: Sort the list that is received, before displaying it
  displayList(list);
}

function displayList(student) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  student.forEach(displayStudent);
}

function displayStudent(student) {
  // create clone
  const clone = document
    .querySelector("template#student")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=firstName]").textContent = student.firstName;
  clone.querySelector("[data-field=lastName]").textContent = student.lastName;
  clone.querySelector("[data-field=house]").textContent = student.house;
  clone.querySelector(
    "[data-field=studentImage] img"
  ).src = `images/${student.img}.png`;
  clone.querySelector(
    "[data-field=studentImage] img"
  ).alt = `${student.firstName}`;

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
