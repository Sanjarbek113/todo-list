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

  numberLi.classList.add("yozuv-active");
  vazifaLi.classList.add("yozuv-active");
  vaqtLi.classList.add("yozuv-active");

  holatLi.addEventListener("click", e =>{
      holatLi.textContent = "bajarildi";
  })
  holatLi.classList.add("holatLi-btn");
})




const vidioElement = document.querySelector("#vidio");
const playbtn = document.querySelector("#play");

playbtn.addEventListener("click", async() =>{
  let media = await window.navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  vidioElement.srcObject = media;
})
