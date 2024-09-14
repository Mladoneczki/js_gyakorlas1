import {
  cimKiiras,
  // osszeskutyaKiirasa,
} from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";

let nav = "Dézi";
const cim = "Kutyák minden mennyiségben";
const kutya1 = {
  nev: "Floki",
  kor: 12,
  nem: "kan",
};
const kutya2 = {
  nev: "Dézi",
  kor: 2,
  nem: "szuka",
};
// console.log(kutya1);
// console.log(cim);

const nevlista = ["Dézi", "Jenő", "béla"];
const szamlista = [1, 2, 3, 4, 2, 32, 2323];
nevlista[0] = "Loki";

// header h1hez fűzzük hozzá a címet

cimKiiras(cim);


// osszeskutyaKiirasa(kutyaLista);

const hely = $(".tartalom");

new Kartyak(kutyaLista,hely)

