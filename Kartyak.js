import Kartya from "./Kartya.js"
export default class Kartyak{
#lista=[]
    constructor(lista,szuloElem){
        this.#lista=lista
        this.szuloElem=szuloElem
        this.szuloElem.empty();
        this.#kartyakKiir()

    }

    #kartyakKiir(){
        this.#lista.forEach(element => {
            // egyKutyaKiirasa(element)
            // console.log(element)
            new Kartya(element,this.szuloElem)
            
        });
    }
}