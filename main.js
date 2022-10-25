const students=[
  {
    id:1,
    name: "Godric",
    House: "Gryffindor",
  },
{
  id: 2,
  name: "Salazar",
  house: "Slytherin",
},
{
  id: 3,
  name: "Rowena",
  house: "Ravenclaw",
},
{
  id: 4,
  name: "Helga",
  house:"Hufflepuf",

},
];

const houses =[
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff"
];



// Hides and displays the form//
const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener ('click', () => {
  console.log("btnpressed");
  const form = document.getElementById ('form');

  if (form.style.display === 'none'){
    form.style.display = 'block';
  } else {
    form.style.display = 'none'
  }
});

// Targets the submit button//
const subBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener('click', ()=>{
  console.log ("submitted");

});


//Pulls from houses array randomly//
 const randomSort = (houses) =>{
  houses[Math.floor(Math.random() * houses.length)];
  return randomSort;
 }

randomSort()

// Tells how to push info to DOM//
function renderToDom(divId, htmlToRender) {
  const slectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

renderToDom()

 //Creates new student and house assignment result from randomSort//
 const createStudent=(e)=>{
  e.preventDefault();
 
 const newStudentObj={
  id: students.length +1,
  name: document.querySelector('#name').value,
  house: randomSort(houses),
 }
students.push(newStudentObj)
cardsOnDom(students)
form.reset();
 }
 
form.addEventListener('submit', createStudent);

// Creates card for the student sorted//

const cardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += 
`<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${students.name}</h5>
  <p class="card-text">Congratulations! You have been sorted into ${students.house}.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
;
  }
  renderToDom("#root", domString);
}
cardsOnDom(students)

const submitButton = document.querySelector("submit");
