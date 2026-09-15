// NO THANKS button
const noBtn = document.getElementById("noBtn");

if(noBtn){
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("click", () =>{
    location.href="sure.html";
  });
}

function moveButton(){
  const x = Math.random()*200-100;
  const y = Math.random()*120-60;

  noBtn.style.transform=`translate(${x}px,${y}px)`;
}

// Fade-in animation
window.onload=()=>{
  document.body.style.opacity="1";
};