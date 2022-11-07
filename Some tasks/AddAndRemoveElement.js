function AddAndRemove(arrOfCommands){
    let res = [];
    let num = 1;

    for(let command of arrOfCommands){
        switch(command){
            case 'add':
                res.push(num);
                num++;
                break;
            case 'remove':
                    res.pop();
                    num++;
                    break;
                
        }
    }
    if(res.length === 0){
        console.log('Empty');
    }
    else{
        console.log(res.join('\n'));
    }
   
}
AddAndRemove(['add', 
'add', 
'add', 
'add']
)
AddAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)
AddAndRemove(['remove', 
'remove', 
'remove']
)