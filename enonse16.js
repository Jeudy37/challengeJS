let alphabet ="abcdefghijklmnopqrstuvwxyz";

function toDecript(kriptaj){
    kriptaj = kriptaj.toLowerCase()
    kriptaj =kriptaj.split(" ");
    let kole="";
    let a="";
    for (let el of kriptaj){
        if (el[0] == ">"){
            a = alphabet.indexOf((el.slice(-1)));
            a  = alphabet[a + parseInt(el.slice(1,-1))];
            kole+=a;
        }
         if (el[0] == "<"){
             a = alphabet.indexOf((el.slice(-1)));
             a  = alphabet[a - parseInt(el.slice(1,-1))];
             kole+=a;
         }
    }
    return kole.toUpperCase();
}

let Decript = toDecript("<14P <1V <1H >4O");
console.log(Decript)