let a=2;
let b=3;
nonbA=[];
nonbB=[];
nonbA_B=[];
nonb0=[];

let arr = Array.from(Array(20), (_, index) => index + 1);
for(let i of arr){
    if(i % a==0 && i% b !=0){
        nonbA.push(i)
    }if(i% a !=0 && i% b==0){
        nonbB.push(i)
    }if(i %a ==0 && i% b==0){
        nonbA_B.push(i)
    }if(i %a !=0 && i% b !=0){
        nonb0.push(i)
    }
}
console.log(`${nonbA} ===> total nonbA yo se ${nonbA.length}`);
console.log(`${nonbB} ===> total nonbB yo se ${nonbB.length}`);
console.log(`${nonbA_B} ===> total nonbA_B yo se ${nonbA_B.length}`);
console.log(`${nonb0} ===> total nonb0 yo se ${nonb0.length}`);