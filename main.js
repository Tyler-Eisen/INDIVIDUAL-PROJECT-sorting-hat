const students=[
  {
    id:1,
    name: "Godric",
    house: "Gryffindor",
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
  house:"Hufflepuff",

},
];

const houses =[
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff"
];

const deathEaters=[
  {
    id: 1,
    name: "Draco",
    
  }
];

// Hides and displays the form//
const startBtn = document.querySelector("#startBtn");
const form = document.querySelector('form');
form.style.visibility= 'hidden';

startBtn.addEventListener ('click', () => {
  // console.log("btnpressed");
  

  if (form.style.visibility === 'hidden'){
    form.style.visibility = 'visible';
  } else {
    form.style.visibility = 'hidden'
  }
});




// Creates card for the student sorted//

const cardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += 
`<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${member.name}</h5>
  <p class="card-text"> ${member.house}.</p>
  <button style="width:100%; position:absolute, bottom:0, margin:0 auto" class="btn btn-danger expelBtn" id="delete--${member.id}">Expel</button>
  
</div>
</div>`
;
  }
  renderToDom("#root", domString);
}

// Creates card for student expelled//

const evilOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += 
`<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${member.name}</h5>
  
  
</div>
</div>`
;
  }
  renderToDom("#root2", domString);
}

//Pulls from houses array randomly//
 const randomSort = () =>{
  let randomNum= [Math.floor(Math.random() * houses.length)];
  return houses[randomNum];
 }

// randomSort(houses)

// Tells how to push info to DOM//
function renderToDom(divId, htmlToRender) {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}


// renderToDom('#root', cardsOnDom)

 //Creates new student and house assignment result from randomSort then pushes it to student array//
 const createStudent=(e)=>{
  e.preventDefault();
 
  const newStudentObj={
   id: students.length +1,
   name: document.querySelector('#name').value,
    house: randomSort(),
 }
students.push(newStudentObj)
cardsOnDom(students)
addEventListenerToExpelButtons()
form.reset();
 }
 
form.addEventListener('submit', createStudent);

// //Moves from students array to deathEater array and displays it//
// const app = document.querySelector("#root");
// app.addEventListener('click', (e) => {
  
//   if (e.target.id.includes("delete")) {
//     const [, id] = e.target.id.split("--");
//     const index = students.findIndex(e => e.id === Number(id));
//     students.splice(index, 1);
//     deathEaters.push(students[i])
//     renderToDom("#root2",deathEaters);
//   }
// });






  // Grab all the expel btns//
  const addEventListenerToExpelButtons=() =>{
const expelButtons= document.querySelectorAll(".expelBtn");
  

  for (const button of expelButtons) {
    button.addEventListener('click', (e)=> {
      const [, id] = e.target.id.split("--");
      // console.log(id);

// find the index of the student object with specific ID
      index = students.findIndex(student => student.id === Number(id))
      console.log(index)

      // 'cut' out the student to be expelled
      studentToExpel = students.splice(index, 1)[0]
      console.log(studentToExpel)

      // 'add' the expelled student to deathEaters
      deathEaters.push(studentToExpel)

      cardsOnDom(students);
      evilOnDom(deathEaters);
      addEventListenerToExpelButtons()
    })
  }

}

const startApp= () =>{
  cardsOnDom(students);
  evilOnDom(deathEaters);
  addEventListenerToExpelButtons()
}

startApp();
