function sameNumbers(num){
    let numToString = num.toString();
    let sum = 0;
    let first = numToString[0];
    let isSame = true;
    for (let index = 0; index < numToString.length; index++) {
        if(first !== numToString[index]){
            isSame = false;
        }
        sum += Number(numToString[index]);
        
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);