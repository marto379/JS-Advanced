function PrintNnum(arr,num){
   let res = [];
   for (let index = 0; index < arr.length; index += num) {
    res.push(arr[index])
    
   }
   return res;
}

console.table(PrintNnum(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))
