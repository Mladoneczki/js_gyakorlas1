import Kartya from "./Kartya.js";

export function cimKiiras(cim){
    const h1Elem=$("header");
console.log(h1Elem);
// h1Elem.innerHTML+="<p>"+cim+"</p>"
h1Elem.append(`<p>${cim}</p>`)

};


// export function kutyaAdatokMegjelenitese(lista){
//     const hely=document.querySelector(".tartalom")
//     const tartalomDiv=document.createElement("div")

//     for (let index = 0; index < lista.length; index++) {
//         const element = lista[index];
//         const nev=document.createElement("h3")
//         nev.append(element.nev)
//         const kor=document.createElement("p")
//         kor.append(element.kor)
//         const nem=document.createElement("p")
//         nem.append(element.nem)
//         tartalomDiv.append(nev,kor,nem)



        
//     }
//     hely.append(tartalomDiv)
    
// }

// Átkerült a kártya osztályba:
// export function egyKutyaKiirasa(kutya){
//     const hely=$(".tartalom")
//     hely.append(`<div class="col-lg-4 col-md-6 card">
//         <h3>${kutya.nev}</h3>
//         <p>${kutya.kor}</p>
//         <p>${kutya.nem}</p>
//         <button class="kivalaszt btn btn-primary" type="button">kiválaszt</button>
//         </div>`)
// }

// export function osszeskutyaKiirasa(lista){
//     const hely=$(".tartalom")
//     for (let index = 0; index < lista.length; index++) {
//                 const element = lista[index];
//                 hely.append(`<div>
//                     <h3>${kutya.nev}</h3>
//                     <p>${kutya.kor}</p>
//                     <p>${kutya.nem}</p>
//                     </div>`)

// }}
// const hely = $(".tartalom");
// export function osszeskutyaKiirasa(lista){
    // lista.forEach(element => {
    //     // egyKutyaKiirasa(element)
    //     // console.log(element)
    //     new Kartya(element,hely)
        
    // });
// }
