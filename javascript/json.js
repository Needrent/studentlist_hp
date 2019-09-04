// Fetch student data
// class list add house
let myLink = "https://petlatkea.dk/2019/students1991.json";

const parent = document.querySelector("main");
const list = document.querySelector("main ul");

function loadData(link) {
  fetch(link)
    .then(e => e.json())
    .then(data => show(data));
}

function show(data) {
  data.forEach(object => {
    //console.log(data);
    // clone the template

    // create list
    let newLi = document.createElement("li");

    let name = object.fullname;
    let house = object.house;

    newLi.textContent = name + ", " + house;

    // append to the DOM
    list.appendChild(newLi);
  });
  const newArr = new Array(document.querySelectorAll("main ul li"));

  console.log(newArr["0"]["0"].innerText);
}
loadData(myLink);

// sort first name by asc (.sort)
// if first name is asc use desc (.reverse)

// sort last name by asc (.sort)
// if last name is asc use desc (.reverse)

// set filter all to standard
// show all
// if gryffindor is clicked, hide hufflepuff, ravenclaw, slytherin
// if else hufflepuff is clicked, hide gryffindor, ravenclaw, slytherin
// if else ravenclaw is clicked, hide hufflepuff, gryffindor, slytherin
// if else slytherin is clicked, hide hufflepuff, ravenclaw, gryffindor

//modal make student click event (names and house)
//Open model

//click modal to close
