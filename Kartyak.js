import Kartya from "./Kartya.js"
export default class Kartyak{
#lista=[]
    constructor(lista,szuloElem){
        this.#lista=lista
        this.szuloElem=szuloElem
        this.#kartyakKiir()

    }

    #kartyakKiir(){
        this.#lista.forEach(element => {
            // egyKutyaKiirasa(element)
            // console.log(element)
            new Kartya(element,this.szuloElem)
            
        });
    }
}5