// Fetch student data
// class list add house
let myLink = "https://petlatkea.dk/2019/students1991.json";

const parent = document.querySelector("main");
const list = document.querySelector("main ul");
const filter = document.querySelector("main select");

function loadData(link) {
  fetch(link)
    .then(e => e.json())
    .then(data => show(data));
}

function show(data) {
  console.log(data);
  data.forEach(object => {
    //console.log(data);
    // clone the template

    // create list
    let newLi = document.createElement("li");

    let name = object.fullname;
    let house = object.house;

    newLi.textContent = name + ", " + house;
    newLi.style.cursor = "pointer";
    newLi.addEventListener("click", openModel);

    // append to the DOM
    list.appendChild(newLi);

    //fill modal
    function openModel() {
      console.log(object.fullname);
      modal.classList.remove("hide");
      document.querySelector("#modal h2").textContent = object.fullname;
      if (object.house == "Hufflepuff") {
        modal.classList.add("colorHuf");
        crest.classList.add("crestHuf");
      } else if (object.house == "Gryffindor") {
        modal.classList.add("colorGrif");
        crest.classList.add("crestGrif");
      } else if (object.house == "Ravenclaw") {
        modal.classList.add("colorRaven");
      } else {
        modal.classList.add("colorSlit");
        crest.classList.add("crestSlit");
      }
    }
    //filter
    let newOption = document.createElement("option");
    newOption.textContent = object.house;

    filter.appendChild(newOption);
  });
  ///const newArr = new Array(document.querySelectorAll("main ul li"));
}
loadData(myLink);
const modal = document.querySelector("#modal");
const crest = document.querySelector(".image");
const modalCloseBtn = document.querySelector("#modal button");

modalCloseBtn.addEventListener("click", modalClose);

function modalClose() {
  modal.classList = "";
  crest.classList = "";
  crest.classList.add("image");
  modal.classList.add("hide");
}

const sortFn = document.querySelector("#firstname");
const sortLn = document.querySelector("#lastname");

sortFn.addEventListener("click", sortFirstName);
sortLn.addEventListener("click", sortLastName);
let counter = 0;

function sortFirstName() {
  if (counter == 0) {
    sortFn.textContent = "First name (Z-A)";
    counter++;
  } else {
    sortFn.textContent = "First name (A-Z)";
    counter = 0;
  }
}
function sortLastName() {
  if (counter == 0) {
    sortLn.textContent = "Last name (Z-A)";
    counter++;
  } else {
    sortLn.textContent = "Last name (A-Z)";
    counter = 0;
  }
}

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
