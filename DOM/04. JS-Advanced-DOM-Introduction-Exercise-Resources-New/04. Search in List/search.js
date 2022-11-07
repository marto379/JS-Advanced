function search() {
  let townList = Array.from(document.querySelectorAll("ul li"));
  let searchText = document.getElementById("searchText").value;
  let count = 0;
  for(town of townList){
   let text = town.textContent;
   if(text.includes(searchText)){
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      count++;
   }
   else{
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";
   }
  }
  document.getElementById("result").innerText = `${count} matches found`;
}
