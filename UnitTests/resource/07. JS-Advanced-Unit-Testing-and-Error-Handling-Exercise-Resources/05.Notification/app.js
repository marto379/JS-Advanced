function notify(message) {
  let divContent = document.getElementById("notification");
  divContent.innerText = message;
  divContent.style.display = "block";
  divContent.addEventListener("click",DisplayStyle)

  function DisplayStyle(e){
    e.target.style.display = "none";
  }
}