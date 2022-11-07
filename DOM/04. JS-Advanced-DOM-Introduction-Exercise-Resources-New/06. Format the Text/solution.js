function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  output.innerHTML = "";
  let arrayInput = input.split(".").filter(x => x.length > 0);

  for(let i = 0;i < arrayInput.length;i += 3){
    let sentenses = [];
    for(let x = 0;x < 3;x++){
      if(arrayInput[x + i]){
        sentenses.push(arrayInput[x + i])
      }
    }
    let res = sentenses.join(".") + ".";
    output.innerHTML += `<p>${res}</p>`;
  }
  
}