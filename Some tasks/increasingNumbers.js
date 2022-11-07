function IncreasingNumbers(arr){
    let res = [];
    let firstnum = arr[0];
    res.push(firstnum);
    let biggest = firstnum;
    for(let i = 1;i < arr.length;i++){
            
                if(arr[i] >= biggest){
                    biggest = arr[i];
                     res.push(arr[i])
        }
    }
    return res;
}
IncreasingNumbers([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )