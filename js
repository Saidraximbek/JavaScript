

const computer = (com) => {
 if(com == 1){
    return `${com1} ${com1yil}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${com1narx}`;
 }
 else if(com == 2){
    return `${com2} ${com1yil}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${com2narx}` ;
 }
 else if(com == 3){
    return `${com3} ${com3yil}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${com3narx}`;
 }
 else if(com == 4){
    return `${com4} ${com3yil}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${com3narx}`;
 }
 else if(com == 5){
    return `${com5} ${com5yil}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${com5narx}`;
 }
 else 
 return `Bizda hozircha 5 ta kompyuter haqida ma'lumot bor`;
 }

const komputerlar = [1,2,3,4,5];
const com1 = ['Macbook 13 Air M1'];
const com1narx  = ['900$'];
const com1yil = ['2020'];
const com2 = ['Macbook 13 Pro M2'];
const com2narx = ['1080$'];
const com3 = ['Macbook 13 Air M2'];
const com3narx = ['1300$'];
const com3yil = ['2022'];
const com4 = ['Macbook 13 Pro M2'];
const com5 = ['IMac'];
const com5yil = ['2029'];
const com5narx = ['2900$']
console.log(computer(komputerlar[0]))
