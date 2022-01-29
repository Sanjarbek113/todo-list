const inputVazifa = document.querySelector(".input-vazifa");
const inputTime = document.querySelector(".input-time");
const inputBtn = document.querySelector(".input-btn");
const ulElemets = document.querySelectorAll(".box-list");



inputBtn.addEventListener("click", e =>{
  const numberLi =  document.createElement("li");
  const vazifaLi =  document.createElement("li");
  const vaqtLi = document.createElement("li");
  const li = document.createElement("li");
  const holatLi = document.createElement("button");
  holatLi.textContent = "bajarilmadi";

  vazifaLi.textContent = inputVazifa.value;
  vaqtLi.textContent = inputTime.value;
  
  ulElemets[0].appendChild(numberLi);
  ulElemets[1].appendChild(vazifaLi);
  ulElemets[2].appendChild(vaqtLi);
  li.appendChild(holatLi);
  ulElemets[3].appendChild(li);

  inputTime.value = "";
  inputVazifa.value ="";

  holatLi.addEventListener("click", e =>{
      holatLi.textContent = "bajarildi";
  })
  holatLi.classList.add("holatLi-btn");
})

