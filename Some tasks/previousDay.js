function date(year,month,day){
    let expectedDate = new Date(year,month -1 ,day);
    expectedDate.setDate(expectedDate.getDate() - 1)
    console.log(`${expectedDate.getFullYear()}-${expectedDate.getMonth() + 1}-${expectedDate.getDate()}`);
}

date(2016, 9, 30);
date(2016, 10, 1);