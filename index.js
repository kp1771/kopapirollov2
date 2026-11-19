/* 1. Az új játék gombra kattintva legyen új játékterünk */

/* Ha a játékos a kő/papír/olló gombokra kattint, akkor a megfelelő kép jelenjen meg */

const ujJatekGomb=document.getElementById("ujjatek");/*megfogtuk aaz ujatekgombot tipusa: dom elem ha ramegyunk egybol jelzi és meg tujuk fogni  */
const jatekTer=document.getElementsByClassName("jatekter");/*tipusa: lista html dom elemekbol alo lista és ezt nem lehet egybol megfogni */

console.log(jatekTer)
ujJatekGomb.addEventListener("click", megjelenit);/*ujatekgombhoz hozzarakkja a megjelenit fugvenyt és aha raclickelunk akkor megjelent a megjelenit fugveny*/

function megjelenit(){/*itt van maga a html kod amit megjelenitunk a megjelenit fugvennyel*/
    const htmlKod=`
    <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)/**/
    const gombElemek=document.querySelectorAll(".gombok button") /* listát kapunk megfogjuk a gombokat*/
    gombElemek[0].addEventListener("click", kivalaszt)/*elsore kattintva  kivalaszt fugveny lefut*/
    gombElemek[1].addEventListener("click", kivalaszt)/*masodik*/
    gombElemek[2].addEventListener("click", kivalaszt)/*harmadik*/
    
}

function kivalaszt(event){
  const kep=document.querySelector("#jatekos img")/*megfogjuk a kepet html dom elet kapunk vissza*/
  console.log(event.target)
  console.log(event.target.id)/*az az elem ami kivaltotta az esemenyt .id miatt pedig kiirja az atributumat*/
  kep.src=`kepek/${event.target.id}.PNG`/*atributom megvaltoztatasa*/
 /*kep.src="kepek/ko.PNG"*/  /*atributom megvaltoztatasa*/
  gepValasztasa(event.target.id)
}

function gepValasztasa(jValasztasa){
  //meg kell fogni a gép képet//
  //generálunk egy véletlen számot - véletlen számnak megfelelően ko.Png...//
  const kep = document.querySelector("#gep img")
  console.log(kep)
  let veletlen =Math.floor(Math.random()*3)/*math.floor=  leszedi a generalt szamokrol a a tizedesjegyeket <->math.random=random szamgeneralas */
  console.log(veletlen)/*ha veletlen 0 akkor ko kepet jelenit meg ha veletlen 1 , akkor a papirt kulonben az ollo-t*/
  if (veletlen == 1){
    kep.src = "kepek/ko.PNG"
  }else if(veletlen == 1){
    kep.src = "kepek/papir.PNG"
  }else{
    kep.src = "kepek/ollo.PNG"
  }
  ellenorzes(veletlen, jValasztasa)
}
function ellenorzes(veletlen, jValasztasa){
/*ha veletlen,jatekos tipp
veletlen: 0 1 2
jvalasztas: ko papir ollo
*/ 
/*mikor  nyer a jatekos?
veletlen:   |0     |1    |2
jvalasztas: |papir |ollo |ko
*/
let eredmeny = ""
/*felteteleket hozunk letre*/
/*esetek:*/

/*jatekos nyer*/
let f1=(veletlen===0 && jValasztasa==="papir")/*feltetelek*/
let f2=(veletlen===1 && jValasztasa==="ollo")
let f3=(veletlen===2 && jValasztasa==="ko")
/*dontetlen*/
let f4=(veletlen===0 && jValasztasa==="ko")/*feltetelek*/
let f5=(veletlen===1 && jValasztasa==="papir")
let f6=(veletlen===2 && jValasztasa==="ollo")
if (f1||f2||f3){
  eredmeny= "Jatekos nyer"
  

}else if (f4||f5||f6){
  eredmeny="dontetlen"
  }else{
    eredmeny="gep nyert"
  }
const kiirElem= document.getElementById("győztes")
kiirElem.innerHTML`<p>${eredmeny}</p>`;
}



