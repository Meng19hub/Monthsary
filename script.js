function nextPage(){
  page1.classList.remove("active");
  page2.classList.add("active");
}

function showLetter(){
  page2.classList.remove("active");
  page3.classList.add("active");
}

function backHome(){
  page3.classList.remove("active");
  page1.classList.add("active");
}