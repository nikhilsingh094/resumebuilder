function workExperience() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.setAttribute("rows", 2);
  newNode.classList.add("mt-2");

  let workExp = document.getElementById("we");
  let addBtn = document.getElementById("weAddBtn");

  workExp.insertBefore(newNode, addBtn);
}

function skills() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("mt-2");

  let skill = document.getElementById("skl");
  let addBtn = document.getElementById("skillAddBtn");

  skill.insertBefore(newNode, addBtn);
}

function quali() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.setAttribute("rows", 2);
  newNode.classList.add("mt-2");

  let qual = document.getElementById("qual");
  let addBtn = document.getElementById("qeAddBtn");

  qual.insertBefore(newNode, addBtn);
}

function generateResume() {
  let namef = document.getElementById("nameField").value;
  let namtetemp = document.getElementById("namet");
  namtetemp.innerHTML = namef;

  document.getElementById("namet2").innerHTML = namef;

  let contact = document.getElementById("contactField").value;
  let contactt = document.getElementById("contact-t");
  contactt.innerHTML = contact;

  document.getElementById('emailt').innerHTML = document.getElementById('emailField').value;

  let address = document.getElementById("addressField").value;
  let addt = document.getElementById("addt");
  addt.innerHTML = address;

  document.getElementById('linkt1').innerHTML = document.getElementById('linkedField').value;
  document.getElementById('link2t').innerHTML = document.getElementById('gitField').value;
  

  document.getElementById('object-t').innerHTML = document.getElementById('objectiveField').value;

// workExperience

  let workEXp = document.getElementsByClassName('weField');

  let  str ='';

  for(let e of workEXp){
   str = str + `<li> ${e.value} </li>`;
}

document.getElementById('wet').innerHTML = str;

// Skill

let skill = document.getElementsByClassName('sk');

let  str2 ='';

for(let e of skill){
 str2 = str2 + `<li> ${e.value} </li>`;
}

document.getElementById('sklt').innerHTML = str2;

// qualification

let qualification = document.getElementsByClassName('edq');

let  str3 ='';

for(let e of qualification){
 str3 = str3 + `<li> ${e.value} </li>`;
}

document.getElementById('edt').innerHTML = str3;

}
