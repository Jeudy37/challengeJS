let title="ayiti se yon bel peyi ki gen pyebwa";
let tit2=[];
for(el of title.split(" ")){
    tit2.push((el[0]).toUpperCase()+el.slice(1))
}tit2=tit2.join(" ")
console.log(tit2)
