function rotate(arr,num){
    let res = [];
    for(let i = 0;i < num;i++){
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}
console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

));