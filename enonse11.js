let nonb=[1,-1,3,5,76,34,81,14,22,65]
let gro=nonb[0], piti=nonb[0];
for(let i=0;i<nonb.length;i++){
    if(nonb[i]>gro) {gro=nonb[i]};
    if(nonb[i]<piti) {piti=nonb[i]};
}console.log(`maximum lan se==> ${gro}`)
console.log( `minimum lan se ==>${piti}`)