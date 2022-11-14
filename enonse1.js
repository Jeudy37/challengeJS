let som=0;
let tab=[];

let adres ="127.0.0.1"
adres= adres.split(".")
adres=adres.join("")
for(let i of adres){
    tab.push(i)
}
for(let i of tab){
    som+=parseInt(i)
}
let somasyon =som * Number(tab[0])


