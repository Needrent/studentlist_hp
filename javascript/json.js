// products JSON
//const link = "https://spreadsheets.google.com/feeds/list/10k5FHg8AolohKoybFTJarvWLSzhzOe-jr8HbHa6KZwU/od6/public/values?alt=json";

let myLink = "http://petlatkea.dk/2019/students1991.json";

const template = document.querySelector("template").content;
const parent = document.querySelector("main");

function loadData(link) {
    fetch(link).then(e => e.json()).then(data => show(data));
}

function show(data) {
    data.forEach(object => {
    console.log(object);
    // clone the template
    const clone = template.cloneNode(true);

    // populate the template
    clone.querySelector("ul li").textContent = object.fullname;
    clone.querySelector("h3").textContent = object.house;


    // append to the DOM
    parent.appendChild(clone);

    });

}
loadData(myLink);
