function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let textArr = text.split(" ");
  let res = "";
  
  switch(convention){
    case "Camel Case":
      textArr.forEach((el,i) => {
        if(i === 0){
             return res += el.toLowerCase();
        }
        return res += el[0].toUpperCase() + el.substring(1).toLowerCase();
        
      });
      break;
      case "Pascal Case":
        textArr.forEach((el,i) => {
         el = el.toLowerCase();
          return res += el[0].toUpperCase() + el.substring(1);
        })
        break;
        default: res = "Error!";
  }
  document.getElementById("result").textContent = res;
}