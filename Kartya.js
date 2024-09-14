export default class Kartya {
    // Privát adattag:
    #kutya={}

  // konstuktor-iniciaéizálja az adattagokat
  constructor(kutya,szuloElem) {
    console.log(kutya)
    this.#kutya=kutya
    this.szuloElem=szuloElem
    this.#egyKutyaKiirasa()
    this.gombElem = $(".kivalaszt:last");
    this.#esemenyKezelo()
  }
  #esemenyKezelo(){
    this.gombElem.on("click", (event) => {
      console.log(event.target);
    });}

    // nyíl fügvény és a function között a különbség hogy a this a nyílt fügvény esetén a konkrét osztálypéldányra mítat mig a function esetén a html elemre ami kiváltotta az eseményt

  #egyKutyaKiirasa() {
    
    this.szuloElem.append(`<div class="col-lg-4 col-md-6 card">
            <h3>${this.#kutya.nev}</h3>
            <p>${this.#kutya.kor}</p>
            <p>${this.#kutya.nem}</p>
            <button class="kivalaszt btn btn-primary" type="button">kiválaszt</button>
            </div>`);
           
  }
}
