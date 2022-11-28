

const computer = (com) => {
 if(com == 1){
    return `${MacAirM1[0]} ${MacAirM1[1]}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${MacAirM1[2]}`;
 }
 else if(com == 2){
    return `${MacAirM1[0]} ${MacProM1[1]}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${MacProM1[2]}` ;
 }
 else if(com == 3){
    return `${MacAirM2[0]} ${MacAirM2[1]}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${MacAirM2[2]}`;
 }
 else if(com == 4){
    return `${MacProM2[0]} ${MacProM2[1]}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${MacProM2[2]}`;
 }
 else if(com == 5){
    return `${IMac[0]} ${IMac[1]}-yil ishlab chiqarilgan. Hozirgi kundagi narxi ${IMac[2]}`;
 }
 else 
 return `Bizda hozircha 5 ta kompyuter haqida ma'lumot bor`;
 }

const komputerlar = [1,2,3,4,5];
const MacAirM1 = ['Macbook 13 Air M1', '2020', '$900'];
const MacProM1 = ['Macbook 13 Pro M1', '2020', '$1080'];
const MacAirM2 = ['Macbook 13 Air M2', '2022', '$1300'];
const MacProM2 = ['Macbook 13 Pro M2','2022', '1300$'];
const IMac = ['IMac', '2022', '$4000'];
console.log(computer(komputerlar[3]))
