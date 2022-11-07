function solve(arr){
    let res = [];
    let sorted = arr.sort((a,b) => a - b);

    while(sorted.length > 0){
        let smallNum = sorted.shift();
        res.push(smallNum);
        let bigNum = sorted.pop();
        res.push(bigNum);
    }
    return res;

}