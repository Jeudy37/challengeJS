let vale = [0,1,2,3,4]

//let nskans = [...(vale.slice(0,4)).reverse(), ...vale.slice(-1)];

for (let i = 0 ; i < vale.length; i++){
    if (i==0){
        vale = vale.reverse();
        console.log(vale);
    }
    else{
        vale = [...(vale.slice(0,(vale.length)-i)).reverse(), ...vale.slice(-i)];
        console.log(vale);
    }
    
}

console.log(`index 3 se ==>${vale.indexOf(3)}`)