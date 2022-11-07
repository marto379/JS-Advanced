function SortedList(arrOfNames){
    arrOfNames.sort((a,b) => a.localeCompare(b))

    for(let i = 0;i < arrOfNames.length;i++){
        console.log(`${i + 1}.${arrOfNames[i]}`)
    }
}
SortedList(["John", "Bob", "Christina", "Ema"])