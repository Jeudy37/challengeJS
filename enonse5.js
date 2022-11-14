let chenn= "5 45 123 12"
let multi=1;
chenn=chenn.split(" ")
for(let i=0; i<chenn.length; i++){
    let add=0
    for(let el=0; el<chenn[i].length; el++){
        let antye=parseInt(chenn[i][el])
        add+=antye;       
    }
    multi*=add;
}

console.log(multi);