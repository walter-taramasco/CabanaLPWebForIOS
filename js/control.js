//Nombre Conejo
let alertaPositiva = document.querySelector(".alert-success");
var divRemove = document.getElementById('remove-conejo-name');
var padre = divRemove.parentNode;
var pNombre = document.getElementById('nombredelconejo');
var limpiar = document.getElementById('limpiar');
var a;
var minimo = 3;
let conejoName = document.getElementById("conejoname");

/* Eliminar el input confirmar y el de texto, esto tambien confirma el nombre del conejo */
document.querySelector(".confirmacion").addEventListener("click", () => {
  if(conejoName.value.length > 0) {
  a = document.getElementById('conejoname').value;
  padre.removeChild(divRemove);
  limpiar.style.display = 'inline';
  pNombre.textContent = a;
  localStorage.setItem('nombredelconejo-1' , a);
  // alerta para avisar que se colocó bien el nombre
  alertaPositiva.textContent = "Se ha añadido correctamente el nombre del conejo!"
  alertaPositiva.style.display = "flex";
  setTimeout(() => {
  location.reload();
  }, "1500")
}
});

// Al tocar Cambiar nombre se limpia el parrafo donde se almacenaba el texto y el input para escribir
document.querySelector(".resetear").addEventListener("click", () => {
padre.appendChild(divRemove);
document.getElementById('conejoname').value="";
document.getElementById('nombredelconejo').textContent="";
limpiar.style.display = 'none';
localStorage.removeItem('nombredelconejo-1');
document.getElementById('localNombre').textContent="";
  alertaPositiva.textContent = "Se ha eliminado correctamente el nombre del conejo!"
  alertaPositiva.style.display = "flex";
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var nombreStorageConejo = localStorage.getItem('nombredelconejo-1');
document.getElementById('localNombre').textContent = nombreStorageConejo;

if(nombreStorageConejo.length > minimo) {
padre.removeChild(divRemove);
limpiar.style.display = 'inline';
}

if(nombreStorageConejo.length < minimo) {
padre.appendChild(divRemove);
document.getElementById('localNombre').textContent="";
limpiar.style.display = 'none';
}


// Fechas antiparasitarios
var fechaDeNacimiento = document.getElementById('fechaNacimiento');
var dosis1 = document.getElementById('primeradosis');
var dosis2 = document.getElementById('segundadosis');
var dosis3 = document.getElementById('terceradosis');
var dosis4 = document.getElementById('cuartadosis');
var dosis5 = document.getElementById('quintadosis');
var dosis6 = document.getElementById('sextadosis');
var dosis7 = document.getElementById('septimadosis');
var dosis8 = document.getElementById('octavadosis');
var dosis9 = document.getElementById('novenadosis');
var dosis10 = document.getElementById('decimadosis');
var dosis11 = document.getElementById('decimoprimeradosis');
var dosis12 = document.getElementById('decimosegundadosis');
var dosis13 = document.getElementById('decimoterceradosis');
var dosis14 = document.getElementById('decimocuartadosis');
var dosis15 = document.getElementById('decimoquintadosis');
var dosis16 = document.getElementById('decimosextadosis');
var dosis17 = document.getElementById('decimoseptimadosis');
var dosis18 = document.getElementById('decimooctavadosis');
var dosis19 = document.getElementById('decimonovenadosis');
var dosis20 = document.getElementById('veintedosis');
var dosis21 = document.getElementById('veintiunodosis');
var dosis22 = document.getElementById('veintidosdosis');
var dosis23 = document.getElementById('veintitresdosis');
var dosis24 = document.getElementById('veinticuatrodosis');
var dosis25 = document.getElementById('veinticincodosis');
var dosis26 = document.getElementById('veintiseisdosis');
var dosis27 = document.getElementById('veintisietedosis');
var dosis28 = document.getElementById('veintiochodosis');
var dosis29 = document.getElementById('veintinuevedosis');
var dosis30 = document.getElementById('treintadosis');
var dosis31 = document.getElementById('treintaunodosis');
var dosis32 = document.getElementById('treintadosdosis');
var dosis33 = document.getElementById('treintatresdosis');
var dosis34 = document.getElementById('treintacuatrodosis');
var dosis35 = document.getElementById('treintacincodosis');
var dosis36 = document.getElementById('treintaseisdosis');
var dosis37 = document.getElementById('treintasietedosis');
var dosis38 = document.getElementById('treintaochodosis');
var dosis39 = document.getElementById('treintanuevedosis');
var dosis40 = document.getElementById('cuarentadosis');
var dosis41 = document.getElementById('cuarentaunodosis');
var dosis42 = document.getElementById('cuarentadosdosis');
var dosis43 = document.getElementById('cuarentatresdosis');
var dosis44 = document.getElementById('cuarentacuatrodosis');
var dosis45 = document.getElementById('cuarentacincodosis');
var dosis46 = document.getElementById('cuarentaseisdosis');
var dosis47 = document.getElementById('cuarentasietedosis');
var dosis48 = document.getElementById('cuarentaochodosis');
var dosis49 = document.getElementById('cuarentanuevedosis');
var dosis50 = document.getElementById('cincuentadosis');
var dosis51 = document.getElementById('cincuentaunodosis');
var dosis52 = document.getElementById('cincuentadosdosis');
var dosis53 = document.getElementById('cincuentatresdosis');
var dosis54 = document.getElementById('cincuentacuatrodosis');
var dosis55 = document.getElementById('cincuentacincodosis');
var dosis56 = document.getElementById('cincuentaseisdosis');
var dosis57 = document.getElementById('cincuentasietedosis');
var dosis58 = document.getElementById('cincuentaochodosis');
var dosis59 = document.getElementById('cincuentanuevedosis');
var dosis60 = document.getElementById('sesentadosis');
var dosis61 = document.getElementById('sesentaunodosis');
var dosis62 = document.getElementById('sesentadosdosis');
var dosis63 = document.getElementById('sesentatresdosis');
var dosis64 = document.getElementById('sesentacuatrodosis');

//Fecha Introducida + dias para sumar
var divRemoveFecha = document.getElementById('divRemoverFecha');
var pFechaLocal = document.getElementById('fechaGuardada');
var pFechaLocal1 = document.getElementById('fechaGuardada1');
var pFechaLocal2 = document.getElementById('fechaGuardada2');
var pFechaLocal3 = document.getElementById('fechaGuardada3');
var pFechaLocal4 = document.getElementById('fechaGuardada4');
var pFechaLocal5 = document.getElementById('fechaGuardada5');
var pFechaLocal6 = document.getElementById('fechaGuardada6');
var pFechaLocal7 = document.getElementById('fechaGuardada7');
var pFechaLocal8 = document.getElementById('fechaGuardada8');
var pFechaLocal9 = document.getElementById('fechaGuardada9');
var pFechaLocal10 = document.getElementById('fechaGuardada10');
var pFechaLocal11 = document.getElementById('fechaGuardada11');
var pFechaLocal12 = document.getElementById('fechaGuardada12');
var pFechaLocal13 = document.getElementById('fechaGuardada13');
var pFechaLocal14 = document.getElementById('fechaGuardada14');
var pFechaLocal15 = document.getElementById('fechaGuardada15');
var pFechaLocal16 = document.getElementById('fechaGuardada16');
var pFechaLocal17 = document.getElementById('fechaGuardada17');
var pFechaLocal18 = document.getElementById('fechaGuardada18');
var pFechaLocal19 = document.getElementById('fechaGuardada19');
var pFechaLocal20 = document.getElementById('fechaGuardada20');
var pFechaLocal21 = document.getElementById('fechaGuardada21');
var pFechaLocal22 = document.getElementById('fechaGuardada22');
var pFechaLocal23 = document.getElementById('fechaGuardada23');
var pFechaLocal24 = document.getElementById('fechaGuardada24');
var pFechaLocal25 = document.getElementById('fechaGuardada25');
var pFechaLocal26 = document.getElementById('fechaGuardada26');
var pFechaLocal27 = document.getElementById('fechaGuardada27');
var pFechaLocal28 = document.getElementById('fechaGuardada28');
var pFechaLocal29 = document.getElementById('fechaGuardada29');
var pFechaLocal30 = document.getElementById('fechaGuardada30');
var pFechaLocal31 = document.getElementById('fechaGuardada31');
var pFechaLocal32 = document.getElementById('fechaGuardada32');
var pFechaLocal33 = document.getElementById('fechaGuardada33');
var pFechaLocal34 = document.getElementById('fechaGuardada34');
var pFechaLocal35 = document.getElementById('fechaGuardada35');
var pFechaLocal36 = document.getElementById('fechaGuardada36');
var pFechaLocal37 = document.getElementById('fechaGuardada37');
var pFechaLocal38 = document.getElementById('fechaGuardada38');
var pFechaLocal39 = document.getElementById('fechaGuardada39');
var pFechaLocal40 = document.getElementById('fechaGuardada40');
var pFechaLocal41 = document.getElementById('fechaGuardada41');
var pFechaLocal42 = document.getElementById('fechaGuardada42');
var pFechaLocal43 = document.getElementById('fechaGuardada43');
var pFechaLocal44 = document.getElementById('fechaGuardada44');
var pFechaLocal45 = document.getElementById('fechaGuardada45');
var pFechaLocal46 = document.getElementById('fechaGuardada46');
var pFechaLocal47 = document.getElementById('fechaGuardada47');
var pFechaLocal48 = document.getElementById('fechaGuardada48');
var pFechaLocal49 = document.getElementById('fechaGuardada49');
var pFechaLocal50 = document.getElementById('fechaGuardada50');
var pFechaLocal51 = document.getElementById('fechaGuardada51');
var pFechaLocal52 = document.getElementById('fechaGuardada52');
var pFechaLocal53 = document.getElementById('fechaGuardada53');
var pFechaLocal54 = document.getElementById('fechaGuardada54');
var pFechaLocal55 = document.getElementById('fechaGuardada55');
var pFechaLocal56 = document.getElementById('fechaGuardada56');
var pFechaLocal57 = document.getElementById('fechaGuardada57');
var pFechaLocal58 = document.getElementById('fechaGuardada58');
var pFechaLocal59 = document.getElementById('fechaGuardada59');
var pFechaLocal60 = document.getElementById('fechaGuardada60');
var pFechaLocal61 = document.getElementById('fechaGuardada61');
var pFechaLocal62 = document.getElementById('fechaGuardada62');
var pFechaLocal63 = document.getElementById('fechaGuardada63');
var pFechaLocal64 = document.getElementById('fechaGuardada64');
var pFecha = document.getElementById('fechinhaTemporal');
var fechaIntroducida;
var dias15 = 15;
var mes1 = 3;


// Evento click confirmar fecha
document.querySelector(".confirmar-fecha").addEventListener("click", () => {
if(fechaDeNacimiento.value.length > 0) {
fechaIntroducida = fechaDeNacimiento.value;
var fechaP = new Date(fechaIntroducida);
fechaP.setMinutes(fechaP.getMinutes() + fechaP.getTimezoneOffset());
pFecha.innerText = fechaP.getDate() + '/' + (fechaP.getMonth() + 1) + '/' + fechaP.getFullYear();
pFecha.style.display = 'inline';
//1
var laFecha1 = new Date(fechaIntroducida);
laFecha1.setMinutes(laFecha1.getMinutes() + laFecha1.getTimezoneOffset());
laFecha1.setMonth(laFecha1.getMonth() + mes1);
dosis1.innerText = laFecha1.getDate() + '/' + (laFecha1.getMonth() + 1) + '/' + laFecha1.getFullYear();
var laFecha2 = new Date(fechaIntroducida);
laFecha2.setMinutes(laFecha2.getMinutes() + laFecha2.getTimezoneOffset());
laFecha2.setMonth(laFecha2.getMonth() + mes1);
laFecha2.setDate(laFecha2.getDate() + dias15 );
dosis2.innerText = laFecha2.getDate() + '/' + (laFecha2.getMonth() + 1) + '/' + laFecha2.getFullYear();
//2
var laFecha3 = new Date(fechaIntroducida);
laFecha3.setMinutes(laFecha3.getMinutes() + laFecha3.getTimezoneOffset());
laFecha3.setMonth(laFecha3.getMonth() + mes1 * 2);
dosis3.innerText = laFecha3.getDate() + '/' + (laFecha3.getMonth() + 1) + '/' + laFecha3.getFullYear();
var laFecha4 = new Date(fechaIntroducida);
laFecha4.setMinutes(laFecha4.getMinutes() + laFecha4.getTimezoneOffset());
laFecha4.setMonth(laFecha4.getMonth() + mes1 * 2);
laFecha4.setDate(laFecha4.getDate() + dias15 );
dosis4.innerText = laFecha4.getDate() + '/' + (laFecha4.getMonth() + 1) + '/' + laFecha4.getFullYear();
//3
var laFecha5 = new Date(fechaIntroducida);
laFecha5.setMinutes(laFecha5.getMinutes() + laFecha5.getTimezoneOffset());
laFecha5.setMonth(laFecha5.getMonth() + mes1  * 3);
dosis5.innerText = laFecha5.getDate() + '/' + (laFecha5.getMonth() + 1) + '/' + laFecha5.getFullYear();
var laFecha6 = new Date(fechaIntroducida);
laFecha6.setMinutes(laFecha6.getMinutes() + laFecha6.getTimezoneOffset());
laFecha6.setMonth(laFecha6.getMonth() + mes1 * 3);
laFecha6.setDate(laFecha6.getDate() + dias15 );
dosis6.innerText = laFecha6.getDate() + '/' + (laFecha6.getMonth() + 1) + '/' + laFecha6.getFullYear();
//4
var laFecha7 = new Date(fechaIntroducida);
laFecha7.setMinutes(laFecha7.getMinutes() + laFecha7.getTimezoneOffset());
laFecha7.setMonth(laFecha7.getMonth() + mes1 * 4);
dosis7.innerText = laFecha7.getDate() + '/' + (laFecha7.getMonth() + 1) + '/' + laFecha7.getFullYear();
var laFecha8 = new Date(fechaIntroducida);
laFecha8.setMinutes(laFecha8.getMinutes() + laFecha8.getTimezoneOffset());
laFecha8.setMonth(laFecha8.getMonth() + mes1 * 4);
laFecha8.setDate(laFecha8.getDate() + dias15 );
dosis8.innerText = laFecha8.getDate() + '/' + (laFecha8.getMonth() + 1) + '/' + laFecha8.getFullYear();
//5
var laFecha9 = new Date(fechaIntroducida);
laFecha9.setMinutes(laFecha9.getMinutes() + laFecha9.getTimezoneOffset());
laFecha9.setMonth(laFecha9.getMonth() + mes1 * 5);
dosis9.innerText = laFecha9.getDate() + '/' + (laFecha9.getMonth() + 1) + '/' + laFecha9.getFullYear();
var laFecha10 = new Date(fechaIntroducida);
laFecha10.setMinutes(laFecha10.getMinutes() + laFecha10.getTimezoneOffset());
laFecha10.setMonth(laFecha10.getMonth() + mes1 * 5);
laFecha10.setDate(laFecha10.getDate() + dias15 );
dosis10.innerText = laFecha10.getDate() + '/' + (laFecha10.getMonth() + 1) + '/' + laFecha10.getFullYear();
//6
var laFecha11 = new Date(fechaIntroducida);
laFecha11.setMinutes(laFecha11.getMinutes() + laFecha11.getTimezoneOffset());
laFecha11.setMonth(laFecha11.getMonth() + mes1 * 6);
dosis11.innerText = laFecha11.getDate() + '/' + (laFecha11.getMonth() + 1) + '/' + laFecha11.getFullYear();
var laFecha12 = new Date(fechaIntroducida);
laFecha12.setMinutes(laFecha12.getMinutes() + laFecha12.getTimezoneOffset());
laFecha12.setMonth(laFecha12.getMonth() + mes1 * 6);
laFecha12.setDate(laFecha12.getDate() + dias15 );
dosis12.innerText = laFecha12.getDate() + '/' + (laFecha12.getMonth() + 1) + '/' + laFecha12.getFullYear();
//7
var laFecha13 = new Date(fechaIntroducida);
laFecha13.setMinutes(laFecha13.getMinutes() + laFecha13.getTimezoneOffset());
laFecha13.setMonth(laFecha13.getMonth() + mes1 * 7);
dosis13.innerText = laFecha13.getDate() + '/' + (laFecha13.getMonth() + 1) + '/' + laFecha13.getFullYear();
var laFecha14 = new Date(fechaIntroducida);
laFecha14.setMinutes(laFecha14.getMinutes() + laFecha14.getTimezoneOffset());
laFecha14.setMonth(laFecha14.getMonth() + mes1 * 7);
laFecha14.setDate(laFecha14.getDate() + dias15 );
dosis14.innerText = laFecha14.getDate() + '/' + (laFecha14.getMonth() + 1) + '/' + laFecha14.getFullYear();
//8
var laFecha15 = new Date(fechaIntroducida);
laFecha15.setMinutes(laFecha15.getMinutes() + laFecha15.getTimezoneOffset());
laFecha15.setMonth(laFecha15.getMonth() + mes1 * 8);
dosis15.innerText = laFecha15.getDate() + '/' + (laFecha15.getMonth() + 1) + '/' + laFecha15.getFullYear();
var laFecha16 = new Date(fechaIntroducida);
laFecha16.setMinutes(laFecha16.getMinutes() + laFecha16.getTimezoneOffset());
laFecha16.setMonth(laFecha16.getMonth() + mes1 * 8);
laFecha16.setDate(laFecha16.getDate() + dias15 );
dosis16.innerText = laFecha16.getDate() + '/' + (laFecha16.getMonth() + 1) + '/' + laFecha16.getFullYear();
//9
var laFecha17 = new Date(fechaIntroducida);
laFecha17.setMinutes(laFecha17.getMinutes() + laFecha17.getTimezoneOffset());
laFecha17.setMonth(laFecha17.getMonth() + mes1 * 9);
dosis17.innerText = laFecha17.getDate() + '/' + (laFecha17.getMonth() + 1) + '/' + laFecha17.getFullYear();
var laFecha18 = new Date(fechaIntroducida);
laFecha18.setMinutes(laFecha18.getMinutes() + laFecha2.getTimezoneOffset());
laFecha18.setMonth(laFecha18.getMonth() + mes1 * 9);
laFecha18.setDate(laFecha18.getDate() + dias15 );
dosis18.innerText = laFecha18.getDate() + '/' + (laFecha18.getMonth() + 1) + '/' + laFecha18.getFullYear();
//10
var laFecha19 = new Date(fechaIntroducida);
laFecha19.setMinutes(laFecha19.getMinutes() + laFecha19.getTimezoneOffset());
laFecha19.setMonth(laFecha19.getMonth() + mes1 * 10);
dosis19.innerText = laFecha19.getDate() + '/' + (laFecha19.getMonth() + 1) + '/' + laFecha19.getFullYear();
var laFecha20 = new Date(fechaIntroducida);
laFecha20.setMinutes(laFecha20.getMinutes() + laFecha20.getTimezoneOffset());
laFecha20.setMonth(laFecha20.getMonth() + mes1 * 10);
laFecha20.setDate(laFecha20.getDate() + dias15 );
dosis20.innerText = laFecha20.getDate() + '/' + (laFecha20.getMonth() + 1) + '/' + laFecha20.getFullYear();
//11
var laFecha21 = new Date(fechaIntroducida);
laFecha21.setMinutes(laFecha21.getMinutes() + laFecha21.getTimezoneOffset());
laFecha21.setMonth(laFecha21.getMonth() + mes1 * 11);
dosis21.innerText = laFecha21.getDate() + '/' + (laFecha21.getMonth() + 1) + '/' + laFecha21.getFullYear();
var laFecha22 = new Date(fechaIntroducida);
laFecha22.setMinutes(laFecha22.getMinutes() + laFecha22.getTimezoneOffset());
laFecha22.setMonth(laFecha22.getMonth() + mes1 * 11);
laFecha22.setDate(laFecha22.getDate() + dias15 );
dosis22.innerText = laFecha22.getDate() + '/' + (laFecha22.getMonth() + 1) + '/' + laFecha22.getFullYear();
//12
var laFecha23 = new Date(fechaIntroducida);
laFecha23.setMinutes(laFecha23.getMinutes() + laFecha23.getTimezoneOffset());
laFecha23.setMonth(laFecha23.getMonth() + mes1 * 12);
dosis23.innerText = laFecha23.getDate() + '/' + (laFecha23.getMonth() + 1) + '/' + laFecha23.getFullYear();
var laFecha24 = new Date(fechaIntroducida);
laFecha24.setMinutes(laFecha24.getMinutes() + laFecha24.getTimezoneOffset());
laFecha24.setMonth(laFecha24.getMonth() + mes1 * 12);
laFecha24.setDate(laFecha24.getDate() + dias15 );
dosis24.innerText = laFecha24.getDate() + '/' + (laFecha24.getMonth() + 1) + '/' + laFecha24.getFullYear();
//13
var laFecha25 = new Date(fechaIntroducida);
laFecha25.setMinutes(laFecha25.getMinutes() + laFecha25.getTimezoneOffset());
laFecha25.setMonth(laFecha25.getMonth() + mes1 * 13);
dosis25.innerText = laFecha25.getDate() + '/' + (laFecha25.getMonth() + 1) + '/' + laFecha25.getFullYear();
var laFecha26 = new Date(fechaIntroducida);
laFecha26.setMinutes(laFecha26.getMinutes() + laFecha26.getTimezoneOffset());
laFecha26.setMonth(laFecha26.getMonth() + mes1 * 13);
laFecha26.setDate(laFecha26.getDate() + dias15 );
dosis26.innerText = laFecha26.getDate() + '/' + (laFecha26.getMonth() + 1) + '/' + laFecha26.getFullYear();
//14
var laFecha27 = new Date(fechaIntroducida);
laFecha27.setMinutes(laFecha27.getMinutes() + laFecha27.getTimezoneOffset());
laFecha27.setMonth(laFecha27.getMonth() + mes1 * 14);
dosis27.innerText = laFecha27.getDate() + '/' + (laFecha27.getMonth() + 1) + '/' + laFecha27.getFullYear();
var laFecha28 = new Date(fechaIntroducida);
laFecha28.setMinutes(laFecha28.getMinutes() + laFecha28.getTimezoneOffset());
laFecha28.setMonth(laFecha28.getMonth() + mes1 * 14);
laFecha28.setDate(laFecha28.getDate() + dias15 );
dosis28.innerText = laFecha28.getDate() + '/' + (laFecha28.getMonth() + 1) + '/' + laFecha28.getFullYear();
//15
var laFecha29 = new Date(fechaIntroducida);
laFecha29.setMinutes(laFecha29.getMinutes() + laFecha29.getTimezoneOffset());
laFecha29.setMonth(laFecha29.getMonth() + mes1 * 15);
dosis29.innerText = laFecha29.getDate() + '/' + (laFecha29.getMonth() + 1) + '/' + laFecha29.getFullYear();
var laFecha30 = new Date(fechaIntroducida);
laFecha30.setMinutes(laFecha30.getMinutes() + laFecha30.getTimezoneOffset());
laFecha30.setMonth(laFecha30.getMonth() + mes1 * 15);
laFecha30.setDate(laFecha30.getDate() + dias15 );
dosis30.innerText = laFecha30.getDate() + '/' + (laFecha30.getMonth() + 1) + '/' + laFecha30.getFullYear();
//16
var laFecha31 = new Date(fechaIntroducida);
laFecha31.setMinutes(laFecha31.getMinutes() + laFecha31.getTimezoneOffset());
laFecha31.setMonth(laFecha31.getMonth() + mes1 * 16);
dosis31.innerText = laFecha31.getDate() + '/' + (laFecha31.getMonth() + 1) + '/' + laFecha31.getFullYear();
var laFecha32 = new Date(fechaIntroducida);
laFecha32.setMinutes(laFecha32.getMinutes() + laFecha32.getTimezoneOffset());
laFecha32.setMonth(laFecha32.getMonth() + mes1 * 16);
laFecha32.setDate(laFecha32.getDate() + dias15 );
dosis32.innerText = laFecha32.getDate() + '/' + (laFecha32.getMonth() + 1) + '/' + laFecha32.getFullYear();
//17
var laFecha33 = new Date(fechaIntroducida);
laFecha33.setMinutes(laFecha33.getMinutes() + laFecha33.getTimezoneOffset());
laFecha33.setMonth(laFecha33.getMonth() + mes1 * 17);
dosis33.innerText = laFecha33.getDate() + '/' + (laFecha33.getMonth() + 1) + '/' + laFecha33.getFullYear();
var laFecha34 = new Date(fechaIntroducida);
laFecha34.setMinutes(laFecha34.getMinutes() + laFecha34.getTimezoneOffset());
laFecha34.setMonth(laFecha34.getMonth() + mes1 * 17);
laFecha34.setDate(laFecha34.getDate() + dias15 );
dosis34.innerText = laFecha34.getDate() + '/' + (laFecha34.getMonth() + 1) + '/' + laFecha34.getFullYear();
//18
var laFecha35 = new Date(fechaIntroducida);
laFecha35.setMinutes(laFecha35.getMinutes() + laFecha35.getTimezoneOffset());
laFecha35.setMonth(laFecha35.getMonth() + mes1 * 18);
dosis35.innerText = laFecha35.getDate() + '/' + (laFecha35.getMonth() + 1) + '/' + laFecha35.getFullYear();
var laFecha36 = new Date(fechaIntroducida);
laFecha36.setMinutes(laFecha36.getMinutes() + laFecha36.getTimezoneOffset());
laFecha36.setMonth(laFecha36.getMonth() + mes1 * 18);
laFecha36.setDate(laFecha36.getDate() + dias15 );
dosis36.innerText = laFecha36.getDate() + '/' + (laFecha36.getMonth() + 1) + '/' + laFecha36.getFullYear();
//19
var laFecha37 = new Date(fechaIntroducida);
laFecha37.setMinutes(laFecha37.getMinutes() + laFecha37.getTimezoneOffset());
laFecha37.setMonth(laFecha37.getMonth() + mes1 * 19);
dosis37.innerText = laFecha37.getDate() + '/' + (laFecha37.getMonth() + 1) + '/' + laFecha37.getFullYear();
var laFecha38 = new Date(fechaIntroducida);
laFecha38.setMinutes(laFecha38.getMinutes() + laFecha38.getTimezoneOffset());
laFecha38.setMonth(laFecha38.getMonth() + mes1 * 19);
laFecha38.setDate(laFecha38.getDate() + dias15 );
dosis38.innerText = laFecha38.getDate() + '/' + (laFecha38.getMonth() + 1) + '/' + laFecha38.getFullYear();
//20
var laFecha39 = new Date(fechaIntroducida);
laFecha39.setMinutes(laFecha39.getMinutes() + laFecha39.getTimezoneOffset());
laFecha39.setMonth(laFecha39.getMonth() + mes1 * 20);
dosis39.innerText = laFecha39.getDate() + '/' + (laFecha39.getMonth() + 1) + '/' + laFecha39.getFullYear();
var laFecha40 = new Date(fechaIntroducida);
laFecha40.setMinutes(laFecha40.getMinutes() + laFecha40.getTimezoneOffset());
laFecha40.setMonth(laFecha40.getMonth() + mes1 * 20);
laFecha40.setDate(laFecha40.getDate() + dias15 );
dosis40.innerText = laFecha40.getDate() + '/' + (laFecha40.getMonth() + 1) + '/' + laFecha40.getFullYear();
//21
var laFecha41 = new Date(fechaIntroducida);
laFecha41.setMinutes(laFecha41.getMinutes() + laFecha41.getTimezoneOffset());
laFecha41.setMonth(laFecha41.getMonth() + mes1 * 21);
dosis41.innerText = laFecha41.getDate() + '/' + (laFecha41.getMonth() + 1) + '/' + laFecha41.getFullYear();
var laFecha42 = new Date(fechaIntroducida);
laFecha42.setMinutes(laFecha42.getMinutes() + laFecha42.getTimezoneOffset());
laFecha42.setMonth(laFecha42.getMonth() + mes1 * 21);
laFecha42.setDate(laFecha42.getDate() + dias15 );
dosis42.innerText = laFecha42.getDate() + '/' + (laFecha42.getMonth() + 1) + '/' + laFecha42.getFullYear();
//22
var laFecha43 = new Date(fechaIntroducida);
laFecha43.setMinutes(laFecha43.getMinutes() + laFecha43.getTimezoneOffset());
laFecha43.setMonth(laFecha43.getMonth() + mes1 * 22);
dosis43.innerText = laFecha43.getDate() + '/' + (laFecha43.getMonth() + 1) + '/' + laFecha43.getFullYear();
var laFecha44 = new Date(fechaIntroducida);
laFecha44.setMinutes(laFecha44.getMinutes() + laFecha44.getTimezoneOffset());
laFecha44.setMonth(laFecha44.getMonth() + mes1 * 22);
laFecha44.setDate(laFecha44.getDate() + dias15 );
dosis44.innerText = laFecha44.getDate() + '/' + (laFecha44.getMonth() + 1) + '/' + laFecha44.getFullYear();
//23
var laFecha45 = new Date(fechaIntroducida);
laFecha45.setMinutes(laFecha45.getMinutes() + laFecha45.getTimezoneOffset());
laFecha45.setMonth(laFecha45.getMonth() + mes1 * 23);
dosis45.innerText = laFecha45.getDate() + '/' + (laFecha45.getMonth() + 1) + '/' + laFecha45.getFullYear();
var laFecha46 = new Date(fechaIntroducida);
laFecha46.setMinutes(laFecha46.getMinutes() + laFecha46.getTimezoneOffset());
laFecha46.setMonth(laFecha46.getMonth() + mes1 * 23);
laFecha46.setDate(laFecha46.getDate() + dias15 );
dosis46.innerText = laFecha46.getDate() + '/' + (laFecha46.getMonth() + 1) + '/' + laFecha46.getFullYear();
//24
var laFecha47 = new Date(fechaIntroducida);
laFecha47.setMinutes(laFecha47.getMinutes() + laFecha47.getTimezoneOffset());
laFecha47.setMonth(laFecha47.getMonth() + mes1 * 24);
dosis47.innerText = laFecha47.getDate() + '/' + (laFecha47.getMonth() + 1) + '/' + laFecha47.getFullYear();
var laFecha48 = new Date(fechaIntroducida);
laFecha48.setMinutes(laFecha48.getMinutes() + laFecha48.getTimezoneOffset());
laFecha48.setMonth(laFecha48.getMonth() + mes1 * 24);
laFecha48.setDate(laFecha48.getDate() + dias15 );
dosis48.innerText = laFecha48.getDate() + '/' + (laFecha48.getMonth() + 1) + '/' + laFecha48.getFullYear();
//25
var laFecha49 = new Date(fechaIntroducida);
laFecha49.setMinutes(laFecha49.getMinutes() + laFecha49.getTimezoneOffset());
laFecha49.setMonth(laFecha49.getMonth() + mes1 * 25);
dosis49.innerText = laFecha49.getDate() + '/' + (laFecha49.getMonth() + 1) + '/' + laFecha49.getFullYear();
var laFecha50 = new Date(fechaIntroducida);
laFecha50.setMinutes(laFecha50.getMinutes() + laFecha50.getTimezoneOffset());
laFecha50.setMonth(laFecha50.getMonth() + mes1 * 25);
laFecha50.setDate(laFecha50.getDate() + dias15 );
dosis50.innerText = laFecha50.getDate() + '/' + (laFecha50.getMonth() + 1) + '/' + laFecha50.getFullYear();
//26
var laFecha51 = new Date(fechaIntroducida);
laFecha51.setMinutes(laFecha51.getMinutes() + laFecha51.getTimezoneOffset());
laFecha51.setMonth(laFecha51.getMonth() + mes1 * 26);
dosis51.innerText = laFecha51.getDate() + '/' + (laFecha51.getMonth() + 1) + '/' + laFecha51.getFullYear();
var laFecha52 = new Date(fechaIntroducida);
laFecha52.setMinutes(laFecha52.getMinutes() + laFecha52.getTimezoneOffset());
laFecha52.setMonth(laFecha52.getMonth() + mes1 * 26);
laFecha52.setDate(laFecha52.getDate() + dias15 );
dosis52.innerText = laFecha52.getDate() + '/' + (laFecha52.getMonth() + 1) + '/' + laFecha52.getFullYear();
//27
var laFecha53 = new Date(fechaIntroducida);
laFecha53.setMinutes(laFecha53.getMinutes() + laFecha53.getTimezoneOffset());
laFecha53.setMonth(laFecha53.getMonth() + mes1 * 27);
dosis53.innerText = laFecha53.getDate() + '/' + (laFecha53.getMonth() + 1) + '/' + laFecha53.getFullYear();
var laFecha54 = new Date(fechaIntroducida);
laFecha54.setMinutes(laFecha54.getMinutes() + laFecha54.getTimezoneOffset());
laFecha54.setMonth(laFecha54.getMonth() + mes1 * 27);
laFecha54.setDate(laFecha54.getDate() + dias15 );
dosis54.innerText = laFecha54.getDate() + '/' + (laFecha54.getMonth() + 1) + '/' + laFecha54.getFullYear();
//28
var laFecha55 = new Date(fechaIntroducida);
laFecha55.setMinutes(laFecha55.getMinutes() + laFecha55.getTimezoneOffset());
laFecha55.setMonth(laFecha55.getMonth() + mes1 * 28);
dosis55.innerText = laFecha55.getDate() + '/' + (laFecha55.getMonth() + 1) + '/' + laFecha55.getFullYear();
var laFecha56 = new Date(fechaIntroducida);
laFecha56.setMinutes(laFecha56.getMinutes() + laFecha56.getTimezoneOffset());
laFecha56.setMonth(laFecha56.getMonth() + mes1 * 28);
laFecha56.setDate(laFecha56.getDate() + dias15 );
dosis56.innerText = laFecha56.getDate() + '/' + (laFecha56.getMonth() + 1) + '/' + laFecha56.getFullYear();
//29
var laFecha57 = new Date(fechaIntroducida);
laFecha57.setMinutes(laFecha57.getMinutes() + laFecha57.getTimezoneOffset());
laFecha57.setMonth(laFecha57.getMonth() + mes1 * 29);
dosis57.innerText = laFecha57.getDate() + '/' + (laFecha57.getMonth() + 1) + '/' + laFecha57.getFullYear();
var laFecha58 = new Date(fechaIntroducida);
laFecha58.setMinutes(laFecha58.getMinutes() + laFecha58.getTimezoneOffset());
laFecha58.setMonth(laFecha58.getMonth() + mes1 * 29);
laFecha58.setDate(laFecha58.getDate() + dias15 );
dosis58.innerText = laFecha58.getDate() + '/' + (laFecha58.getMonth() + 1) + '/' + laFecha58.getFullYear();
//30
var laFecha59 = new Date(fechaIntroducida);
laFecha59.setMinutes(laFecha59.getMinutes() + laFecha59.getTimezoneOffset());
laFecha59.setMonth(laFecha59.getMonth() + mes1 * 30);
dosis59.innerText = laFecha59.getDate() + '/' + (laFecha59.getMonth() + 1) + '/' + laFecha59.getFullYear();
var laFecha60 = new Date(fechaIntroducida);
laFecha60.setMinutes(laFecha60.getMinutes() + laFecha60.getTimezoneOffset());
laFecha60.setMonth(laFecha60.getMonth() + mes1 * 30);
laFecha60.setDate(laFecha60.getDate() + dias15 );
dosis60.innerText = laFecha60.getDate() + '/' + (laFecha60.getMonth() + 1) + '/' + laFecha60.getFullYear();
//31
var laFecha61 = new Date(fechaIntroducida);
laFecha61.setMinutes(laFecha61.getMinutes() + laFecha61.getTimezoneOffset());
laFecha61.setMonth(laFecha61.getMonth() + mes1 * 31);
dosis61.innerText = laFecha61.getDate() + '/' + (laFecha61.getMonth() + 1) + '/' + laFecha61.getFullYear();
var laFecha62 = new Date(fechaIntroducida);
laFecha62.setMinutes(laFecha62.getMinutes() + laFecha2.getTimezoneOffset());
laFecha62.setMonth(laFecha62.getMonth() + mes1 * 31);
laFecha62.setDate(laFecha62.getDate() + dias15 );
dosis62.innerText = laFecha62.getDate() + '/' + (laFecha62.getMonth() + 1) + '/' + laFecha62.getFullYear();
//32
var laFecha63 = new Date(fechaIntroducida);
laFecha63.setMinutes(laFecha63.getMinutes() + laFecha63.getTimezoneOffset());
laFecha63.setMonth(laFecha63.getMonth() + mes1 * 32);
dosis63.innerText = laFecha63.getDate() + '/' + (laFecha63.getMonth() + 1) + '/' + laFecha63.getFullYear();
var laFecha64 = new Date(fechaIntroducida);
laFecha64.setMinutes(laFecha64.getMinutes() + laFecha64.getTimezoneOffset());
laFecha64.setMonth(laFecha64.getMonth() + mes1 * 32);
laFecha64.setDate(laFecha64.getDate() + dias15 );
dosis64.innerText = laFecha64.getDate() + '/' + (laFecha64.getMonth() + 1) + '/' + laFecha64.getFullYear();
divRemoveFecha.style.display = 'none';
document.getElementById('resetear-fecha').style.display = 'inline';
localStorage.setItem('LocalFecha', pFecha.innerText);
localStorage.setItem('LocalFecha1', dosis1.innerText);
localStorage.setItem('LocalFecha2', dosis2.innerText);
localStorage.setItem('LocalFecha3', dosis3.innerText);
localStorage.setItem('LocalFecha4', dosis4.innerText);
localStorage.setItem('LocalFecha5', dosis5.innerText);
localStorage.setItem('LocalFecha6', dosis6.innerText);
localStorage.setItem('LocalFecha7', dosis7.innerText);
localStorage.setItem('LocalFecha8', dosis8.innerText);
localStorage.setItem('LocalFecha9', dosis9.innerText);
localStorage.setItem('LocalFecha10', dosis10.innerText);
localStorage.setItem('LocalFecha11', dosis11.innerText);
localStorage.setItem('LocalFecha12', dosis12.innerText);
localStorage.setItem('LocalFecha13', dosis13.innerText);
localStorage.setItem('LocalFecha14', dosis14.innerText);
localStorage.setItem('LocalFecha15', dosis15.innerText);
localStorage.setItem('LocalFecha16', dosis16.innerText);
localStorage.setItem('LocalFecha17', dosis17.innerText);
localStorage.setItem('LocalFecha18', dosis18.innerText);
localStorage.setItem('LocalFecha19', dosis19.innerText);
localStorage.setItem('LocalFecha20', dosis20.innerText);
localStorage.setItem('LocalFecha21', dosis21.innerText);
localStorage.setItem('LocalFecha22', dosis22.innerText);
localStorage.setItem('LocalFecha23', dosis23.innerText);
localStorage.setItem('LocalFecha24', dosis24.innerText);
localStorage.setItem('LocalFecha25', dosis25.innerText);
localStorage.setItem('LocalFecha26', dosis26.innerText);
localStorage.setItem('LocalFecha27', dosis27.innerText);
localStorage.setItem('LocalFecha28', dosis28.innerText);
localStorage.setItem('LocalFecha29', dosis29.innerText);
localStorage.setItem('LocalFecha30', dosis30.innerText);
localStorage.setItem('LocalFecha31', dosis31.innerText);
localStorage.setItem('LocalFecha32', dosis32.innerText);
localStorage.setItem('LocalFecha33', dosis33.innerText);
localStorage.setItem('LocalFecha34', dosis34.innerText);
localStorage.setItem('LocalFecha35', dosis35.innerText);
localStorage.setItem('LocalFecha36', dosis36.innerText);
localStorage.setItem('LocalFecha37', dosis37.innerText);
localStorage.setItem('LocalFecha38', dosis38.innerText);
localStorage.setItem('LocalFecha39', dosis39.innerText);
localStorage.setItem('LocalFecha40', dosis40.innerText);
localStorage.setItem('LocalFecha41', dosis41.innerText);
localStorage.setItem('LocalFecha42', dosis42.innerText);
localStorage.setItem('LocalFecha43', dosis43.innerText);
localStorage.setItem('LocalFecha44', dosis44.innerText);
localStorage.setItem('LocalFecha45', dosis45.innerText);
localStorage.setItem('LocalFecha46', dosis46.innerText);
localStorage.setItem('LocalFecha47', dosis47.innerText);
localStorage.setItem('LocalFecha48', dosis48.innerText);
localStorage.setItem('LocalFecha49', dosis49.innerText);
localStorage.setItem('LocalFecha50', dosis50.innerText);
localStorage.setItem('LocalFecha51', dosis51.innerText);
localStorage.setItem('LocalFecha52', dosis52.innerText);
localStorage.setItem('LocalFecha53', dosis53.innerText);
localStorage.setItem('LocalFecha54', dosis54.innerText);
localStorage.setItem('LocalFecha55', dosis55.innerText);
localStorage.setItem('LocalFecha56', dosis56.innerText);
localStorage.setItem('LocalFecha57', dosis57.innerText);
localStorage.setItem('LocalFecha58', dosis58.innerText);
localStorage.setItem('LocalFecha59', dosis59.innerText);
localStorage.setItem('LocalFecha60', dosis60.innerText);
localStorage.setItem('LocalFecha61', dosis61.innerText);
localStorage.setItem('LocalFecha62', dosis62.innerText);
localStorage.setItem('LocalFecha63', dosis63.innerText);
localStorage.setItem('LocalFecha64', dosis64.innerText);

  alertaPositiva.textContent = "Se ha confirmado correctamente la fecha de nacimiento del conejo!"
  alertaPositiva.style.display = "flex";
  setTimeout(() => {
  location.reload();
  }, "1500")
}
});

//
var StorageFecha1 = localStorage.getItem('LocalFecha1');
pFechaLocal1.textContent = StorageFecha1;

if(StorageFecha1.length > minimo) {
pFechaLocal1.style.display = 'inline';
}

if(StorageFecha1.length < minimo) {
pFechaLocal1.style.display = 'none';
}

var StorageFecha2 = localStorage.getItem('LocalFecha2');
pFechaLocal2.textContent = StorageFecha2;

if(StorageFecha2.length > minimo) {
pFechaLocal2.style.display = 'inline';
}

if(StorageFecha2.length < minimo) {
pFechaLocal2.style.display = 'none';
}

var StorageFecha3 = localStorage.getItem('LocalFecha3');
pFechaLocal3.textContent = StorageFecha3;

if(StorageFecha3.length > minimo) {
pFechaLocal3.style.display = 'inline';
}

if(StorageFecha3.length < minimo) {
pFechaLocal3.style.display = 'none';
}

var StorageFecha4 = localStorage.getItem('LocalFecha4');
pFechaLocal4.textContent = StorageFecha4;

if(StorageFecha4.length > minimo) {
pFechaLocal4.style.display = 'inline';
}

if(StorageFecha4.length < minimo) {
pFechaLocal4.style.display = 'none';
}

var StorageFecha5 = localStorage.getItem('LocalFecha5');
pFechaLocal5.textContent = StorageFecha5;

if(StorageFecha5.length > minimo) {
pFechaLocal5.style.display = 'inline';
}

if(StorageFecha5.length < minimo) {
pFechaLocal5.style.display = 'none';
}

var StorageFecha6 = localStorage.getItem('LocalFecha6');
pFechaLocal6.textContent = StorageFecha6;

if(StorageFecha6.length > minimo) {
pFechaLocal6.style.display = 'inline';
}

if(StorageFecha6.length < minimo) {
pFechaLocal6.style.display = 'none';
}

var StorageFecha7 = localStorage.getItem('LocalFecha7');
pFechaLocal7.textContent = StorageFecha7;

if(StorageFecha7.length > minimo) {
pFechaLocal7.style.display = 'inline';
}

if(StorageFecha7.length < minimo) {
pFechaLocal7.style.display = 'none';
}

var StorageFecha8 = localStorage.getItem('LocalFecha8');
pFechaLocal8.textContent = StorageFecha8;

if(StorageFecha8.length > minimo) {
pFechaLocal8.style.display = 'inline';
}

if(StorageFecha8.length < minimo) {
pFechaLocal8.style.display = 'none';
}

var StorageFecha9 = localStorage.getItem('LocalFecha9');
pFechaLocal9.textContent = StorageFecha9;

if(StorageFecha9.length > minimo) {
pFechaLocal9.style.display = 'inline';
}

if(StorageFecha9.length < minimo) {
pFechaLocal9.style.display = 'none';
}

var StorageFecha10 = localStorage.getItem('LocalFecha10');
pFechaLocal10.textContent = StorageFecha10;

if(StorageFecha10.length > minimo) {
pFechaLocal10.style.display = 'inline';
}

if(StorageFecha10.length < minimo) {
pFechaLocal10.style.display = 'none';
}

var StorageFecha11 = localStorage.getItem('LocalFecha11');
pFechaLocal11.textContent = StorageFecha11;

if(StorageFecha11.length > minimo) {
pFechaLocal11.style.display = 'inline';
}

if(StorageFecha11.length < minimo) {
pFechaLocal11.style.display = 'none';
}

var StorageFecha12 = localStorage.getItem('LocalFecha12');
pFechaLocal12.textContent = StorageFecha12;

if(StorageFecha12.length > minimo) {
pFechaLocal12.style.display = 'inline';
}

if(StorageFecha12.length < minimo) {
pFechaLocal12.style.display = 'none';
}

var StorageFecha13 = localStorage.getItem('LocalFecha13');
pFechaLocal13.textContent = StorageFecha13;

if(StorageFecha13.length > minimo) {
pFechaLocal13.style.display = 'inline';
}

if(StorageFecha13.length < minimo) {
pFechaLocal13.style.display = 'none';
}

var StorageFecha14 = localStorage.getItem('LocalFecha14');
pFechaLocal14.textContent = StorageFecha14;

if(StorageFecha14.length > minimo) {
pFechaLocal14.style.display = 'inline';
}

if(StorageFecha14.length < minimo) {
pFechaLocal14.style.display = 'none';
}

var StorageFecha15 = localStorage.getItem('LocalFecha15');
pFechaLocal15.textContent = StorageFecha15;

if(StorageFecha15.length > minimo) {
pFechaLocal15.style.display = 'inline';
}

if(StorageFecha15.length < minimo) {
pFechaLocal15.style.display = 'none';
}

var StorageFecha16 = localStorage.getItem('LocalFecha16');
pFechaLocal16.textContent = StorageFecha16;

if(StorageFecha16.length > minimo) {
pFechaLocal16.style.display = 'inline';
}

if(StorageFecha16.length < minimo) {
pFechaLocal16.style.display = 'none';
}

var StorageFecha17 = localStorage.getItem('LocalFecha17');
pFechaLocal17.textContent = StorageFecha17;

if(StorageFecha17.length > minimo) {
pFechaLocal17.style.display = 'inline';
}

if(StorageFecha17.length < minimo) {
pFechaLocal17.style.display = 'none';
}

var StorageFecha18 = localStorage.getItem('LocalFecha18');
pFechaLocal18.textContent = StorageFecha18;

if(StorageFecha18.length > minimo) {
pFechaLocal18.style.display = 'inline';
}

if(StorageFecha18.length < minimo) {
pFechaLocal18.style.display = 'none';
}

var StorageFecha19 = localStorage.getItem('LocalFecha19');
pFechaLocal19.textContent = StorageFecha19;

if(StorageFecha19.length > minimo) {
pFechaLocal19.style.display = 'inline';
}

if(StorageFecha19.length < minimo) {
pFechaLocal19.style.display = 'none';
}

var StorageFecha20 = localStorage.getItem('LocalFecha20');
pFechaLocal20.textContent = StorageFecha20;

if(StorageFecha20.length > minimo) {
pFechaLocal20.style.display = 'inline';
}

if(StorageFecha20.length < minimo) {
pFechaLocal20.style.display = 'none';
}

var StorageFecha21 = localStorage.getItem('LocalFecha21');
pFechaLocal21.textContent = StorageFecha21;

if(StorageFecha21.length > minimo) {
pFechaLocal21.style.display = 'inline';
}

if(StorageFecha21.length < minimo) {
pFechaLocal21.style.display = 'none';
}

var StorageFecha22 = localStorage.getItem('LocalFecha22');
pFechaLocal22.textContent = StorageFecha22;

if(StorageFecha22.length > minimo) {
pFechaLocal22.style.display = 'inline';
}

if(StorageFecha22.length < minimo) {
pFechaLocal22.style.display = 'none';
}

var StorageFecha23 = localStorage.getItem('LocalFecha23');
pFechaLocal23.textContent = StorageFecha23;

if(StorageFecha23.length > minimo) {
pFechaLocal23.style.display = 'inline';
}

if(StorageFecha23.length < minimo) {
pFechaLocal23.style.display = 'none';
}
var StorageFecha24 = localStorage.getItem('LocalFecha24');
pFechaLocal24.textContent = StorageFecha24;

if(StorageFecha24.length > minimo) {
pFechaLocal24.style.display = 'inline';
}

if(StorageFecha24.length < minimo) {
pFechaLocal24.style.display = 'none';
}

var StorageFecha25 = localStorage.getItem('LocalFecha25');
pFechaLocal25.textContent = StorageFecha25;

if(StorageFecha25.length > minimo) {
pFechaLocal25.style.display = 'inline';
}

if(StorageFecha25.length < minimo) {
pFechaLocal25.style.display = 'none';
}

var StorageFecha26 = localStorage.getItem('LocalFecha26');
pFechaLocal26.textContent = StorageFecha26;

if(StorageFecha26.length > minimo) {
pFechaLocal26.style.display = 'inline';
}

if(StorageFecha26.length < minimo) {
pFechaLocal26.style.display = 'none';
}

var StorageFecha27 = localStorage.getItem('LocalFecha27');
pFechaLocal27.textContent = StorageFecha27;

if(StorageFecha27.length > minimo) {
pFechaLocal27.style.display = 'inline';
}

if(StorageFecha27.length < minimo) {
pFechaLocal27.style.display = 'none';
}

var StorageFecha28 = localStorage.getItem('LocalFecha28');
pFechaLocal28.textContent = StorageFecha28;

if(StorageFecha28.length > minimo) {
pFechaLocal28.style.display = 'inline';
}

if(StorageFecha28.length < minimo) {
pFechaLocal28.style.display = 'none';
}

var StorageFecha29 = localStorage.getItem('LocalFecha29');
pFechaLocal29.textContent = StorageFecha29;

if(StorageFecha29.length > minimo) {
pFechaLocal29.style.display = 'inline';
}

if(StorageFecha29.length < minimo) {
pFechaLocal29.style.display = 'none';
}

var StorageFecha30 = localStorage.getItem('LocalFecha30');
pFechaLocal30.textContent = StorageFecha30;

if(StorageFecha30.length > minimo) {
pFechaLocal30.style.display = 'inline';
}

if(StorageFecha30.length < minimo) {
pFechaLocal30.style.display = 'none';
}

var StorageFecha31 = localStorage.getItem('LocalFecha31');
pFechaLocal31.textContent = StorageFecha31;

if(StorageFecha31.length > minimo) {
pFechaLocal31.style.display = 'inline';
}

if(StorageFecha31.length < minimo) {
pFechaLocal31.style.display = 'none';
}

var StorageFecha32 = localStorage.getItem('LocalFecha32');
pFechaLocal32.textContent = StorageFecha32;

if(StorageFecha32.length > minimo) {
pFechaLocal32.style.display = 'inline';
}

if(StorageFecha32.length < minimo) {
pFechaLocal32.style.display = 'none';
}

var StorageFecha33 = localStorage.getItem('LocalFecha33');
pFechaLocal33.textContent = StorageFecha33;

if(StorageFecha33.length > minimo) {
pFechaLocal33.style.display = 'inline';
}

if(StorageFecha33.length < minimo) {
pFechaLocal33.style.display = 'none';
}

var StorageFecha34 = localStorage.getItem('LocalFecha34');
pFechaLocal34.textContent = StorageFecha34;

if(StorageFecha34.length > minimo) {
pFechaLocal34.style.display = 'inline';
}

if(StorageFecha34.length < minimo) {
pFechaLocal34.style.display = 'none';
}

var StorageFecha35 = localStorage.getItem('LocalFecha35');
pFechaLocal35.textContent = StorageFecha35;

if(StorageFecha35.length > minimo) {
pFechaLocal35.style.display = 'inline';
}

if(StorageFecha35.length < minimo) {
pFechaLocal35.style.display = 'none';
}

var StorageFecha36 = localStorage.getItem('LocalFecha36');
pFechaLocal36.textContent = StorageFecha36;

if(StorageFecha36.length > minimo) {
pFechaLocal36.style.display = 'inline';
}

if(StorageFecha36.length < minimo) {
pFechaLocal36.style.display = 'none';
}

var StorageFecha37 = localStorage.getItem('LocalFecha37');
pFechaLocal37.textContent = StorageFecha37;

if(StorageFecha37.length > minimo) {
pFechaLocal37.style.display = 'inline';
}

if(StorageFecha37.length < minimo) {
pFechaLocal37.style.display = 'none';
}

var StorageFecha38 = localStorage.getItem('LocalFecha38');
pFechaLocal38.textContent = StorageFecha38;

if(StorageFecha38.length > minimo) {
pFechaLocal38.style.display = 'inline';
}

if(StorageFecha38.length < minimo) {
pFechaLocal38.style.display = 'none';
}

var StorageFecha39 = localStorage.getItem('LocalFecha39');
pFechaLocal39.textContent = StorageFecha39;

if(StorageFecha39.length > minimo) {
pFechaLocal39.style.display = 'inline';
}

if(StorageFecha39.length < minimo) {
pFechaLocal39.style.display = 'none';
}

var StorageFecha40 = localStorage.getItem('LocalFecha40');
pFechaLocal40.textContent = StorageFecha40;

if(StorageFecha40.length > minimo) {
pFechaLocal40.style.display = 'inline';
}

if(StorageFecha40.length < minimo) {
pFechaLocal40.style.display = 'none';
}

var StorageFecha41 = localStorage.getItem('LocalFecha41');
pFechaLocal41.textContent = StorageFecha41;

if(StorageFecha41.length > minimo) {
pFechaLocal41.style.display = 'inline';
}

if(StorageFecha41.length < minimo) {
pFechaLocal41.style.display = 'none';
}

var StorageFecha42 = localStorage.getItem('LocalFecha42');
pFechaLocal42.textContent = StorageFecha42;

if(StorageFecha42.length > minimo) {
pFechaLocal42.style.display = 'inline';
}

if(StorageFecha42.length < minimo) {
pFechaLocal42.style.display = 'none';
}

var StorageFecha43 = localStorage.getItem('LocalFecha43');
pFechaLocal43.textContent = StorageFecha43;

if(StorageFecha43.length > minimo) {
pFechaLocal43.style.display = 'inline';
}

if(StorageFecha43.length < minimo) {
pFechaLocal43.style.display = 'none';
}

var StorageFecha44 = localStorage.getItem('LocalFecha44');
pFechaLocal44.textContent = StorageFecha44;

if(StorageFecha44.length > minimo) {
pFechaLocal44.style.display = 'inline';
}

if(StorageFecha44.length < minimo) {
pFechaLocal44.style.display = 'none';
}

var StorageFecha45 = localStorage.getItem('LocalFecha45');
pFechaLocal45.textContent = StorageFecha45;

if(StorageFecha45.length > minimo) {
pFechaLocal45.style.display = 'inline';
}

if(StorageFecha45.length < minimo) {
pFechaLocal45.style.display = 'none';
}

var StorageFecha46 = localStorage.getItem('LocalFecha46');
pFechaLocal46.textContent = StorageFecha46;

if(StorageFecha46.length > minimo) {
pFechaLocal46.style.display = 'inline';
}

if(StorageFecha46.length < minimo) {
pFechaLocal46.style.display = 'none';
}

var StorageFecha47 = localStorage.getItem('LocalFecha47');
pFechaLocal47.textContent = StorageFecha47;

if(StorageFecha47.length > minimo) {
pFechaLocal47.style.display = 'inline';
}

if(StorageFecha47.length < minimo) {
pFechaLocal47.style.display = 'none';
}

var StorageFecha48 = localStorage.getItem('LocalFecha48');
pFechaLocal48.textContent = StorageFecha48;

if(StorageFecha48.length > minimo) {
pFechaLocal48.style.display = 'inline';
}

if(StorageFecha48.length < minimo) {
pFechaLocal48.style.display = 'none';
}

var StorageFecha49 = localStorage.getItem('LocalFecha49');
pFechaLocal49.textContent = StorageFecha49;

if(StorageFecha49.length > minimo) {
pFechaLocal49.style.display = 'inline';
}

if(StorageFecha49.length < minimo) {
pFechaLocal49.style.display = 'none';
}

var StorageFecha50 = localStorage.getItem('LocalFecha50');
pFechaLocal50.textContent = StorageFecha50;

if(StorageFecha50.length > minimo) {
pFechaLocal50.style.display = 'inline';
}

if(StorageFecha50.length < minimo) {
pFechaLocal50.style.display = 'none';
}

var StorageFecha51 = localStorage.getItem('LocalFecha51');
pFechaLocal51.textContent = StorageFecha51;

if(StorageFecha51.length > minimo) {
pFechaLocal51.style.display = 'inline';
}

if(StorageFecha51.length < minimo) {
pFechaLocal51.style.display = 'none';
}

var StorageFecha52 = localStorage.getItem('LocalFecha52');
pFechaLocal52.textContent = StorageFecha52;

if(StorageFecha52.length > minimo) {
pFechaLocal52.style.display = 'inline';
}

if(StorageFecha52.length < minimo) {
pFechaLocal52.style.display = 'none';
}

var StorageFecha53 = localStorage.getItem('LocalFecha53');
pFechaLocal53.textContent = StorageFecha53;

if(StorageFecha53.length > minimo) {
pFechaLocal53.style.display = 'inline';
}

if(StorageFecha53.length < minimo) {
pFechaLocal53.style.display = 'none';
}

var StorageFecha54 = localStorage.getItem('LocalFecha54');
pFechaLocal54.textContent = StorageFecha54;

if(StorageFecha54.length > minimo) {
pFechaLocal54.style.display = 'inline';
}

if(StorageFecha54.length < minimo) {
pFechaLocal54.style.display = 'none';
}

var StorageFecha55 = localStorage.getItem('LocalFecha55');
pFechaLocal55.textContent = StorageFecha55;

if(StorageFecha55.length > minimo) {
pFechaLocal55.style.display = 'inline';
}

if(StorageFecha55.length < minimo) {
pFechaLocal55.style.display = 'none';
}

var StorageFecha56 = localStorage.getItem('LocalFecha56');
pFechaLocal56.textContent = StorageFecha56;

if(StorageFecha56.length > minimo) {
pFechaLocal56.style.display = 'inline';
}

if(StorageFecha56.length < minimo) {
pFechaLocal56.style.display = 'none';
}

var StorageFecha57 = localStorage.getItem('LocalFecha57');
pFechaLocal57.textContent = StorageFecha57;

if(StorageFecha57.length > minimo) {
pFechaLocal57.style.display = 'inline';
}

if(StorageFecha57.length < minimo) {
pFechaLocal57.style.display = 'none';
}

var StorageFecha58 = localStorage.getItem('LocalFecha58');
pFechaLocal58.textContent = StorageFecha58;

if(StorageFecha58.length > minimo) {
pFechaLocal58.style.display = 'inline';
}

if(StorageFecha58.length < minimo) {
pFechaLocal58.style.display = 'none';
}

var StorageFecha59 = localStorage.getItem('LocalFecha59');
pFechaLocal59.textContent = StorageFecha59;

if(StorageFecha59.length > minimo) {
pFechaLocal59.style.display = 'inline';
}

if(StorageFecha59.length < minimo) {
pFechaLocal59.style.display = 'none';
}

var StorageFecha60 = localStorage.getItem('LocalFecha60');
pFechaLocal60.textContent = StorageFecha60;

if(StorageFecha60.length > minimo) {
pFechaLocal60.style.display = 'inline';
}

if(StorageFecha60.length < minimo) {
pFechaLocal60.style.display = 'none';
}

var StorageFecha61 = localStorage.getItem('LocalFecha61');
pFechaLocal61.textContent = StorageFecha61;

if(StorageFecha61.length > minimo) {
pFechaLocal61.style.display = 'inline';
}

if(StorageFecha61.length < minimo) {
pFechaLocal61.style.display = 'none';
}

var StorageFecha62 = localStorage.getItem('LocalFecha62');
pFechaLocal62.textContent = StorageFecha62;

if(StorageFecha62.length > minimo) {
pFechaLocal62.style.display = 'inline';
}

if(StorageFecha62.length < minimo) {
pFechaLocal62.style.display = 'none';
}

var StorageFecha63 = localStorage.getItem('LocalFecha63');
pFechaLocal63.textContent = StorageFecha63;

if(StorageFecha63.length > minimo) {
pFechaLocal63.style.display = 'inline';
}

if(StorageFecha63.length < minimo) {
pFechaLocal63.style.display = 'none';
}

var StorageFecha64 = localStorage.getItem('LocalFecha64');
pFechaLocal64.textContent = StorageFecha64;

if(StorageFecha64.length > minimo) {
pFechaLocal64.style.display = 'inline';
}

if(StorageFecha64.length < minimo) {
pFechaLocal64.style.display = 'none';
}


// Evento resetear fecha
document.querySelector(".reset").addEventListener('click', () => {
fechaDeNacimiento.value = "";
document.getElementById('resetear-fecha').style.display = 'none';
divRemoveFecha.style.display = 'inline';
pFechaLocal.textContent = "";
pFechaLocal.style.display = 'none';
pFecha.textContent = "";
pFecha.style.display = 'none';
dosis1.innerText = "";
dosis2.innerText = "";
dosis3.innerText = "";
dosis4.innerText = "";
dosis5.innerText = "";
dosis6.innerText = "";
dosis7.innerText = "";
dosis8.innerText = "";
dosis9.innerText = "";
dosis10.innerText = "";
dosis11.innerText = "";
dosis12.innerText = "";
dosis13.innerText = "";
dosis14.innerText = "";
dosis15.innerText = "";
dosis16.innerText = "";
dosis17.innerText = "";
dosis18.innerText = "";
dosis19.innerText = "";
dosis20.innerText = "";
dosis21.innerText = "";
dosis22.innerText = "";
dosis23.innerText = "";
dosis24.innerText = "";
dosis25.innerText = "";
dosis26.innerText = "";
dosis27.innerText = "";
dosis28.innerText = "";
dosis29.innerText = "";
dosis31.innerText = "";
dosis32.innerText = "";
dosis33.innerText = "";
dosis34.innerText = "";
dosis35.innerText = "";
dosis36.innerText = "";
dosis37.innerText = "";
dosis38.innerText = "";
dosis39.innerText = "";
dosis40.innerText = "";
dosis41.innerText = "";
dosis42.innerText = "";
dosis43.innerText = "";
dosis44.innerText = "";
dosis45.innerText = "";
dosis46.innerText = "";
dosis47.innerText = "";
dosis48.innerText = "";
dosis49.innerText = "";
dosis50.innerText = "";
dosis51.innerText = "";
dosis52.innerText = "";
dosis53.innerText = "";
dosis54.innerText = "";
dosis55.innerText = "";
dosis56.innerText = "";
dosis57.innerText = "";
dosis58.innerText = "";
dosis59.innerText = "";
dosis60.innerText = "";
dosis61.innerText = "";
dosis62.innerText = "";
dosis63.innerText = "";
dosis64.innerText = "";
localStorage.removeItem('LocalFecha');
localStorage.removeItem('LocalFecha1');
localStorage.removeItem('LocalFecha2');
localStorage.removeItem('LocalFecha3');
localStorage.removeItem('LocalFecha4');
localStorage.removeItem('LocalFecha5');
localStorage.removeItem('LocalFecha6');
localStorage.removeItem('LocalFecha7');
localStorage.removeItem('LocalFecha8');
localStorage.removeItem('LocalFecha9');
localStorage.removeItem('LocalFecha10');
localStorage.removeItem('LocalFecha11');
localStorage.removeItem('LocalFecha12');
localStorage.removeItem('LocalFecha13');
localStorage.removeItem('LocalFecha14');
localStorage.removeItem('LocalFecha15');
localStorage.removeItem('LocalFecha16');
localStorage.removeItem('LocalFecha17');
localStorage.removeItem('LocalFecha18');
localStorage.removeItem('LocalFecha19');
localStorage.removeItem('LocalFecha20');
localStorage.removeItem('LocalFecha21');
localStorage.removeItem('LocalFecha22');
localStorage.removeItem('LocalFecha23');
localStorage.removeItem('LocalFecha24');
localStorage.removeItem('LocalFecha25');
localStorage.removeItem('LocalFecha26');
localStorage.removeItem('LocalFecha27');
localStorage.removeItem('LocalFecha28');
localStorage.removeItem('LocalFecha29');
localStorage.removeItem('LocalFecha30');
localStorage.removeItem('LocalFecha31');
localStorage.removeItem('LocalFecha32');
localStorage.removeItem('LocalFecha33');
localStorage.removeItem('LocalFecha34');
localStorage.removeItem('LocalFecha35');
localStorage.removeItem('LocalFecha36');
localStorage.removeItem('LocalFecha37');
localStorage.removeItem('LocalFecha38');
localStorage.removeItem('LocalFecha39');
localStorage.removeItem('LocalFecha40');
localStorage.removeItem('LocalFecha41');
localStorage.removeItem('LocalFecha42');
localStorage.removeItem('LocalFecha43');
localStorage.removeItem('LocalFecha44');
localStorage.removeItem('LocalFecha45');
localStorage.removeItem('LocalFecha46');
localStorage.removeItem('LocalFecha47');
localStorage.removeItem('LocalFecha48');
localStorage.removeItem('LocalFecha49');
localStorage.removeItem('LocalFecha50');
localStorage.removeItem('LocalFecha51');
localStorage.removeItem('LocalFecha52');
localStorage.removeItem('LocalFecha53');
localStorage.removeItem('LocalFecha54');
localStorage.removeItem('LocalFecha55');
localStorage.removeItem('LocalFecha56');
localStorage.removeItem('LocalFecha57');
localStorage.removeItem('LocalFecha58');
localStorage.removeItem('LocalFecha59');
localStorage.removeItem('LocalFecha60');
localStorage.removeItem('LocalFecha61');
localStorage.removeItem('LocalFecha62');
localStorage.removeItem('LocalFecha63');
localStorage.removeItem('LocalFecha64');
pFechaLocal1.textContent = "";
pFechaLocal2.textContent = "";
pFechaLocal3.textContent = "";
pFechaLocal4.textContent = "";
pFechaLocal5.textContent = "";
pFechaLocal6.textContent = "";
pFechaLocal7.textContent = "";
pFechaLocal8.textContent = "";
pFechaLocal9.textContent = "";
pFechaLocal10.textContent = "";
pFechaLocal11.textContent = "";
pFechaLocal12.textContent = "";
pFechaLocal13.textContent = "";
pFechaLocal14.textContent = "";
pFechaLocal15.textContent = "";
pFechaLocal16.textContent = "";
pFechaLocal17.textContent = "";
pFechaLocal18.textContent = "";
pFechaLocal19.textContent = "";
pFechaLocal20.textContent = "";
pFechaLocal21.textContent = "";
pFechaLocal22.textContent = "";
pFechaLocal23.textContent = "";
pFechaLocal24.textContent = "";
pFechaLocal25.textContent = "";
pFechaLocal26.textContent = "";
pFechaLocal27.textContent = "";
pFechaLocal28.textContent = "";
pFechaLocal29.textContent = "";
pFechaLocal30.textContent = "";
pFechaLocal31.textContent = "";
pFechaLocal32.textContent = "";
pFechaLocal33.textContent = "";
pFechaLocal34.textContent = "";
pFechaLocal35.textContent = "";
pFechaLocal36.textContent = "";
pFechaLocal37.textContent = "";
pFechaLocal38.textContent = "";
pFechaLocal39.textContent = "";
pFechaLocal40.textContent = "";
pFechaLocal41.textContent = "";
pFechaLocal42.textContent = "";
pFechaLocal43.textContent = "";
pFechaLocal44.textContent = "";
pFechaLocal45.textContent = "";
pFechaLocal46.textContent = "";
pFechaLocal47.textContent = "";
pFechaLocal48.textContent = "";
pFechaLocal49.textContent = "";
pFechaLocal50.textContent = "";
pFechaLocal51.textContent = "";
pFechaLocal52.textContent = "";
pFechaLocal53.textContent = "";
pFechaLocal54.textContent = "";
pFechaLocal55.textContent = "";
pFechaLocal56.textContent = "";
pFechaLocal57.textContent = "";
pFechaLocal58.textContent = "";
pFechaLocal59.textContent = "";
pFechaLocal60.textContent = "";
pFechaLocal61.textContent = "";
pFechaLocal62.textContent = "";
pFechaLocal63.textContent = "";
pFechaLocal64.textContent = "";
localStorage.removeItem('ColorAplicado1');
localStorage.removeItem('NombreAplicado1');
document.getElementById('aplicada1id').style.backgroundColor = 'red';
document.getElementById('seaplico1').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado2');
localStorage.removeItem('NombreAplicado2');
document.getElementById('aplicada2id').style.backgroundColor = 'red';
document.getElementById('seaplico2').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado3');
localStorage.removeItem('NombreAplicado3');
document.getElementById('aplicada3id').style.backgroundColor = 'red';
document.getElementById('seaplico3').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado4');
localStorage.removeItem('NombreAplicado4');
document.getElementById('aplicada4id').style.backgroundColor = 'red';
document.getElementById('seaplico4').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado5');
localStorage.removeItem('NombreAplicado5');
document.getElementById('aplicada5id').style.backgroundColor = 'red';
document.getElementById('seaplico5').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado6');
localStorage.removeItem('NombreAplicado6');
document.getElementById('aplicada6id').style.backgroundColor = 'red';
document.getElementById('seaplico6').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado7');
localStorage.removeItem('NombreAplicado7');
document.getElementById('aplicada7id').style.backgroundColor = 'red';
document.getElementById('seaplico7').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado8');
localStorage.removeItem('NombreAplicado8');
document.getElementById('aplicada8id').style.backgroundColor = 'red';
document.getElementById('seaplico8').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado9');
localStorage.removeItem('NombreAplicado9');
document.getElementById('aplicada9id').style.backgroundColor = 'red';
document.getElementById('seaplico9').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado10');
localStorage.removeItem('NombreAplicado10');
document.getElementById('aplicada10id').style.backgroundColor = 'red';
document.getElementById('seaplico10').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado11');
localStorage.removeItem('NombreAplicado11');
document.getElementById('aplicada11id').style.backgroundColor = 'red';
document.getElementById('seaplico11').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado12');
localStorage.removeItem('NombreAplicado12');
document.getElementById('aplicada12id').style.backgroundColor = 'red';
document.getElementById('seaplico12').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado13');
localStorage.removeItem('NombreAplicado13');
document.getElementById('aplicada13id').style.backgroundColor = 'red';
document.getElementById('seaplico13').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado14');
localStorage.removeItem('NombreAplicado14');
document.getElementById('aplicada14id').style.backgroundColor = 'red';
document.getElementById('seaplico14').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado15');
localStorage.removeItem('NombreAplicado15');
document.getElementById('aplicada15id').style.backgroundColor = 'red';
document.getElementById('seaplico15').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado16');
localStorage.removeItem('NombreAplicado16');
document.getElementById('aplicada16id').style.backgroundColor = 'red';
document.getElementById('seaplico16').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado17');
localStorage.removeItem('NombreAplicado17');
document.getElementById('aplicada17id').style.backgroundColor = 'red';
document.getElementById('seaplico17').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado18');
localStorage.removeItem('NombreAplicado18');
document.getElementById('aplicada18id').style.backgroundColor = 'red';
document.getElementById('seaplico18').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado19');
localStorage.removeItem('NombreAplicado19');
document.getElementById('aplicada19id').style.backgroundColor = 'red';
document.getElementById('seaplico19').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado20');
localStorage.removeItem('NombreAplicado20');
document.getElementById('aplicada20id').style.backgroundColor = 'red';
document.getElementById('seaplico20').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado21');
localStorage.removeItem('NombreAplicado21');
document.getElementById('aplicada21id').style.backgroundColor = 'red';
document.getElementById('seaplico21').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado22');
localStorage.removeItem('NombreAplicado22');
document.getElementById('aplicada22id').style.backgroundColor = 'red';
document.getElementById('seaplico22').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado23');
localStorage.removeItem('NombreAplicado23');
document.getElementById('aplicada23id').style.backgroundColor = 'red';
document.getElementById('seaplico23').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado24');
localStorage.removeItem('NombreAplicado24');
document.getElementById('aplicada24id').style.backgroundColor = 'red';
document.getElementById('seaplico24').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado25');
localStorage.removeItem('NombreAplicado25');
document.getElementById('aplicada25id').style.backgroundColor = 'red';
document.getElementById('seaplico25').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado26');
localStorage.removeItem('NombreAplicado26');
document.getElementById('aplicada26id').style.backgroundColor = 'red';
document.getElementById('seaplico26').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado27');
localStorage.removeItem('NombreAplicado27');
document.getElementById('aplicada27id').style.backgroundColor = 'red';
document.getElementById('seaplico27').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado28');
localStorage.removeItem('NombreAplicado28');
document.getElementById('aplicada28id').style.backgroundColor = 'red';
document.getElementById('seaplico28').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado29');
localStorage.removeItem('NombreAplicado29');
document.getElementById('aplicada29id').style.backgroundColor = 'red';
document.getElementById('seaplico29').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado30');
localStorage.removeItem('NombreAplicado30');
document.getElementById('aplicada30id').style.backgroundColor = 'red';
document.getElementById('seaplico30').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado31');
localStorage.removeItem('NombreAplicado31');
document.getElementById('aplicada31id').style.backgroundColor = 'red';
document.getElementById('seaplico31').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado32');
localStorage.removeItem('NombreAplicado32');
document.getElementById('aplicada32id').style.backgroundColor = 'red';
document.getElementById('seaplico32').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado33');
localStorage.removeItem('NombreAplicado33');
document.getElementById('aplicada33id').style.backgroundColor = 'red';
document.getElementById('seaplico33').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado34');
localStorage.removeItem('NombreAplicado34');
document.getElementById('aplicada34id').style.backgroundColor = 'red';
document.getElementById('seaplico34').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado35');
localStorage.removeItem('NombreAplicado35');
document.getElementById('aplicada35id').style.backgroundColor = 'red';
document.getElementById('seaplico35').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado36');
localStorage.removeItem('NombreAplicado36');
document.getElementById('aplicada36id').style.backgroundColor = 'red';
document.getElementById('seaplico36').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado37');
localStorage.removeItem('NombreAplicado37');
document.getElementById('aplicada37id').style.backgroundColor = 'red';
document.getElementById('seaplico37').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado38');
localStorage.removeItem('NombreAplicado38');
document.getElementById('aplicada38id').style.backgroundColor = 'red';
document.getElementById('seaplico38').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado39');
localStorage.removeItem('NombreAplicado39');
document.getElementById('aplicada39id').style.backgroundColor = 'red';
document.getElementById('seaplico39').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado40');
localStorage.removeItem('NombreAplicado40');
document.getElementById('aplicada40id').style.backgroundColor = 'red';
document.getElementById('seaplico40').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado41');
localStorage.removeItem('NombreAplicado41');
document.getElementById('aplicada41id').style.backgroundColor = 'red';
document.getElementById('seaplico41').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado42');
localStorage.removeItem('NombreAplicado42');
document.getElementById('aplicada42id').style.backgroundColor = 'red';
document.getElementById('seaplico42').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado43');
localStorage.removeItem('NombreAplicado43');
document.getElementById('aplicada43id').style.backgroundColor = 'red';
document.getElementById('seaplico43').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado44');
localStorage.removeItem('NombreAplicado44');
document.getElementById('aplicada44id').style.backgroundColor = 'red';
document.getElementById('seaplico44').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado45');
localStorage.removeItem('NombreAplicado45');
document.getElementById('aplicada45id').style.backgroundColor = 'red';
document.getElementById('seaplico45').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado46');
localStorage.removeItem('NombreAplicado46');
document.getElementById('aplicada46id').style.backgroundColor = 'red';
document.getElementById('seaplico46').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado47');
localStorage.removeItem('NombreAplicado47');
document.getElementById('aplicada47id').style.backgroundColor = 'red';
document.getElementById('seaplico47').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado48');
localStorage.removeItem('NombreAplicado48');
document.getElementById('aplicada48id').style.backgroundColor = 'red';
document.getElementById('seaplico48').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado49');
localStorage.removeItem('NombreAplicado49');
document.getElementById('aplicada49id').style.backgroundColor = 'red';
document.getElementById('seaplico49').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado50');
localStorage.removeItem('NombreAplicado50');
document.getElementById('aplicada50id').style.backgroundColor = 'red';
document.getElementById('seaplico50').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado51');
localStorage.removeItem('NombreAplicado51');
document.getElementById('aplicada51id').style.backgroundColor = 'red';
document.getElementById('seaplico51').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado52');
localStorage.removeItem('NombreAplicado52');
document.getElementById('aplicada52id').style.backgroundColor = 'red';
document.getElementById('seaplico52').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado53');
localStorage.removeItem('NombreAplicado53');
document.getElementById('aplicada53id').style.backgroundColor = 'red';
document.getElementById('seaplico53').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado54');
localStorage.removeItem('NombreAplicado54');
document.getElementById('aplicada54id').style.backgroundColor = 'red';
document.getElementById('seaplico54').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado55');
localStorage.removeItem('NombreAplicado55');
document.getElementById('aplicada55id').style.backgroundColor = 'red';
document.getElementById('seaplico55').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado56');
localStorage.removeItem('NombreAplicado56');
document.getElementById('aplicada56id').style.backgroundColor = 'red';
document.getElementById('seaplico56').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado57');
localStorage.removeItem('NombreAplicado57');
document.getElementById('aplicada57id').style.backgroundColor = 'red';
document.getElementById('seaplico57').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado58');
localStorage.removeItem('NombreAplicado58');
document.getElementById('aplicada58id').style.backgroundColor = 'red';
document.getElementById('seaplico58').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado59');
localStorage.removeItem('NombreAplicado59');
document.getElementById('aplicada59id').style.backgroundColor = 'red';
document.getElementById('seaplico59').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado60');
localStorage.removeItem('NombreAplicado60');
document.getElementById('aplicada60id').style.backgroundColor = 'red';
document.getElementById('seaplico60').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado61');
localStorage.removeItem('NombreAplicado61');
document.getElementById('aplicada61id').style.backgroundColor = 'red';
document.getElementById('seaplico61').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado62');
localStorage.removeItem('NombreAplicado62');
document.getElementById('aplicada62id').style.backgroundColor = 'red';
document.getElementById('seaplico62').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado63');
localStorage.removeItem('NombreAplicado63');
document.getElementById('aplicada63id').style.backgroundColor = 'red';
document.getElementById('seaplico63').textContent = "No aplicada";

localStorage.removeItem('ColorAplicado64');
localStorage.removeItem('NombreAplicado64');
document.getElementById('aplicada64id').style.backgroundColor = 'red';
  document.getElementById('seaplico64').textContent = "No aplicada";

  alertaPositiva.textContent = "Se ha reseteado correctamente la fecha de nacimiento del conejo!"
  alertaPositiva.style.display = "flex";
  window.scrollTo(0, 0);
  setTimeout(() => {
  location.reload();
  }, "1500")

});

var StorageFecha = localStorage.getItem('LocalFecha');
pFechaLocal.textContent = StorageFecha;

if(StorageFecha.length > minimo) {
console.log("Yessss");
pFechaLocal.style.display = 'inline';
divRemoveFecha.style.display = 'none';
document.getElementById('resetear-fecha').style.display = 'inline';
}

if(StorageFecha.length < minimo) {
pFechaLocal.style.display = 'none';
}


// Evento click al apretar el contenedor
document.querySelector(".aplicada1").addEventListener('click', () => {
var seAplico1 = document.getElementById('seaplico1').textContent = "Aplicada";
var seAplicoColor1 = document.getElementById('aplicada1id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado1', seAplicoColor1);
localStorage.setItem('NombreAplicado1', seAplico1);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado1 = localStorage.getItem('NombreAplicado1');
if(storageNombreAplicado1.length > minimo) {
document.getElementById('seaplico1').textContent = storageNombreAplicado1;
}

var storageColorAplicado1 = localStorage.getItem('ColorAplicado1');
if(storageColorAplicado1.length > minimo) {
document.getElementById('aplicada1id').style.backgroundColor = 'green';
}

console.log("Hola");
document.querySelector(".aplicada2").addEventListener('click', () => {
var seAplico2 = document.getElementById('seaplico2').textContent = "Aplicada";
var seAplicoColor2 = document.getElementById('aplicada2id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado2', seAplicoColor2);
localStorage.setItem('NombreAplicado2', seAplico2);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado2 = localStorage.getItem('NombreAplicado2');
if(storageNombreAplicado2.length > minimo) {
document.getElementById('seaplico2').textContent = storageNombreAplicado2;
}

var storageColorAplicado2 = localStorage.getItem('ColorAplicado2');
if(storageColorAplicado2.length > minimo) {
document.getElementById('aplicada2id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada3").addEventListener('click', () => {
var seAplico3 = document.getElementById('seaplico3').textContent = "Aplicada";
var seAplicoColor3 = document.getElementById('aplicada3id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado3', seAplicoColor3);
localStorage.setItem('NombreAplicado3', seAplico3);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado3 = localStorage.getItem('NombreAplicado3');
if(storageNombreAplicado3.length > minimo) {
document.getElementById('seaplico3').textContent = storageNombreAplicado3;
}

var storageColorAplicado3 = localStorage.getItem('ColorAplicado3');
if(storageColorAplicado3.length > minimo) {
document.getElementById('aplicada3id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada4").addEventListener('click', () => {
var seAplico4 = document.getElementById('seaplico4').textContent = "Aplicada";
var seAplicoColor4 = document.getElementById('aplicada4id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado4', seAplicoColor4);
localStorage.setItem('NombreAplicado4', seAplico4);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado4 = localStorage.getItem('NombreAplicado4');
if(storageNombreAplicado4.length > minimo) {
document.getElementById('seaplico4').textContent = storageNombreAplicado4;
}

var storageColorAplicado4 = localStorage.getItem('ColorAplicado4');
if(storageColorAplicado4.length > minimo) {
document.getElementById('aplicada4id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada5").addEventListener('click', () => {
var seAplico5 = document.getElementById('seaplico5').textContent = "Aplicada";
var seAplicoColor5 = document.getElementById('aplicada5id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado5', seAplicoColor5);
localStorage.setItem('NombreAplicado5', seAplico5);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado5 = localStorage.getItem('NombreAplicado5');
if(storageNombreAplicado5.length > minimo) {
document.getElementById('seaplico5').textContent = storageNombreAplicado5;
}

var storageColorAplicado5 = localStorage.getItem('ColorAplicado5');
if(storageColorAplicado5.length > minimo) {
document.getElementById('aplicada5id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada6").addEventListener('click', () => {
var seAplico6 = document.getElementById('seaplico6').textContent = "Aplicada";
var seAplicoColor6 = document.getElementById('aplicada6id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado6', seAplicoColor6);
localStorage.setItem('NombreAplicado6', seAplico6);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado6 = localStorage.getItem('NombreAplicado6');
if(storageNombreAplicado6.length > minimo) {
document.getElementById('seaplico6').textContent = storageNombreAplicado6;
}

var storageColorAplicado6 = localStorage.getItem('ColorAplicado6');
if(storageColorAplicado6.length > minimo) {
document.getElementById('aplicada6id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada7").addEventListener('click', () => {
var seAplico7 = document.getElementById('seaplico7').textContent = "Aplicada";
var seAplicoColor7 = document.getElementById('aplicada7id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado7', seAplicoColor7);
localStorage.setItem('NombreAplicado7', seAplico7);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado7 = localStorage.getItem('NombreAplicado7');
if(storageNombreAplicado7.length > minimo) {
document.getElementById('seaplico7').textContent = storageNombreAplicado7;
}

var storageColorAplicado7 = localStorage.getItem('ColorAplicado7');
if(storageColorAplicado7.length > minimo) {
document.getElementById('aplicada7id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada8").addEventListener('click', () => {
var seAplico8 = document.getElementById('seaplico8').textContent = "Aplicada";
var seAplicoColor8 = document.getElementById('aplicada8id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado8', seAplicoColor8);
localStorage.setItem('NombreAplicado8', seAplico8);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado8 = localStorage.getItem('NombreAplicado8');
if(storageNombreAplicado8.length > minimo) {
document.getElementById('seaplico8').textContent = storageNombreAplicado8;
}

var storageColorAplicado8 = localStorage.getItem('ColorAplicado8');
if(storageColorAplicado8.length > minimo) {
document.getElementById('aplicada8id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada9").addEventListener('click', () => {
var seAplico9 = document.getElementById('seaplico9').textContent = "Aplicada";
var seAplicoColor9 = document.getElementById('aplicada9id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado9', seAplicoColor9);
localStorage.setItem('NombreAplicado9', seAplico9);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado9 = localStorage.getItem('NombreAplicado9');
if(storageNombreAplicado9.length > minimo) {
document.getElementById('seaplico9').textContent = storageNombreAplicado9;
}

var storageColorAplicado9 = localStorage.getItem('ColorAplicado9');
if(storageColorAplicado9.length > minimo) {
document.getElementById('aplicada9id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada10").addEventListener('click', () => {
var seAplico10 = document.getElementById('seaplico10').textContent = "Aplicada";
var seAplicoColor10 = document.getElementById('aplicada10id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado10', seAplicoColor10);
localStorage.setItem('NombreAplicado10', seAplico10);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado10 = localStorage.getItem('NombreAplicado10');
if(storageNombreAplicado10.length > minimo) {
document.getElementById('seaplico10').textContent = storageNombreAplicado10;
}

var storageColorAplicado10 = localStorage.getItem('ColorAplicado10');
if(storageColorAplicado10.length > minimo) {
document.getElementById('aplicada10id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada11").addEventListener('click', () => {
var seAplico11 = document.getElementById('seaplico11').textContent = "Aplicada";
var seAplicoColor11 = document.getElementById('aplicada11id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado11', seAplicoColor11);
localStorage.setItem('NombreAplicado11', seAplico11);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado11 = localStorage.getItem('NombreAplicado11');
if(storageNombreAplicado11.length > minimo) {
document.getElementById('seaplico11').textContent = storageNombreAplicado11;
}

var storageColorAplicado11 = localStorage.getItem('ColorAplicado11');
if(storageColorAplicado11.length > minimo) {
document.getElementById('aplicada11id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada12").addEventListener('click', () => {
var seAplico12 = document.getElementById('seaplico12').textContent = "Aplicada";
var seAplicoColor12 = document.getElementById('aplicada12id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado12', seAplicoColor12);
localStorage.setItem('NombreAplicado12', seAplico12);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado12 = localStorage.getItem('NombreAplicado12');
if(storageNombreAplicado12.length > minimo) {
document.getElementById('seaplico12').textContent = storageNombreAplicado12;
}

var storageColorAplicado12 = localStorage.getItem('ColorAplicado12');
if(storageColorAplicado12.length > minimo) {
document.getElementById('aplicada12id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada13").addEventListener('click', () => {
var seAplico13 = document.getElementById('seaplico13').textContent = "Aplicada";
var seAplicoColor13 = document.getElementById('aplicada13id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado13', seAplicoColor13);
localStorage.setItem('NombreAplicado13', seAplico13);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado13 = localStorage.getItem('NombreAplicado13');
if(storageNombreAplicado13.length > minimo) {
document.getElementById('seaplico13').textContent = storageNombreAplicado13;
}

var storageColorAplicado13 = localStorage.getItem('ColorAplicado13');
if(storageColorAplicado13.length > minimo) {
document.getElementById('aplicada13id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada14").addEventListener('click', () => {
var seAplico14 = document.getElementById('seaplico14').textContent = "Aplicada";
var seAplicoColor14 = document.getElementById('aplicada14id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado14', seAplicoColor14);
localStorage.setItem('NombreAplicado14', seAplico14);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado14 = localStorage.getItem('NombreAplicado14');
if(storageNombreAplicado14.length > minimo) {
document.getElementById('seaplico14').textContent = storageNombreAplicado14;
}

var storageColorAplicado14 = localStorage.getItem('ColorAplicado14');
if(storageColorAplicado14.length > minimo) {
document.getElementById('aplicada14id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada15").addEventListener('click', () => {
var seAplico15 = document.getElementById('seaplico15').textContent = "Aplicada";
var seAplicoColor15 = document.getElementById('aplicada15id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado15', seAplicoColor15);
localStorage.setItem('NombreAplicado15', seAplico15);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado15 = localStorage.getItem('NombreAplicado15');
if(storageNombreAplicado15.length > minimo) {
document.getElementById('seaplico15').textContent = storageNombreAplicado15;
}

var storageColorAplicado15 = localStorage.getItem('ColorAplicado15');
if(storageColorAplicado15.length > minimo) {
document.getElementById('aplicada15id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada16").addEventListener('click', () => {
var seAplico16 = document.getElementById('seaplico16').textContent = "Aplicada";
var seAplicoColor16 = document.getElementById('aplicada16id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado16', seAplicoColor16);
localStorage.setItem('NombreAplicado16', seAplico16);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado16 = localStorage.getItem('NombreAplicado16');
if(storageNombreAplicado16.length > minimo) {
document.getElementById('seaplico16').textContent = storageNombreAplicado16;
}

var storageColorAplicado16 = localStorage.getItem('ColorAplicado16');
if(storageColorAplicado16.length > minimo) {
document.getElementById('aplicada16id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada17").addEventListener('click', () => {
var seAplico17 = document.getElementById('seaplico17').textContent = "Aplicada";
var seAplicoColor17 = document.getElementById('aplicada17id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado17', seAplicoColor17);
localStorage.setItem('NombreAplicado17', seAplico17);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado17 = localStorage.getItem('NombreAplicado17');
if(storageNombreAplicado17.length > minimo) {
document.getElementById('seaplico17').textContent = storageNombreAplicado17;
}

var storageColorAplicado17 = localStorage.getItem('ColorAplicado17');
if(storageColorAplicado17.length > minimo) {
document.getElementById('aplicada17id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada18").addEventListener('click', () => {
var seAplico18 = document.getElementById('seaplico18').textContent = "Aplicada";
var seAplicoColor18 = document.getElementById('aplicada18id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado18', seAplicoColor18);
localStorage.setItem('NombreAplicado18', seAplico18);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado18 = localStorage.getItem('NombreAplicado18');
if(storageNombreAplicado18.length > minimo) {
document.getElementById('seaplico18').textContent = storageNombreAplicado18;
}

var storageColorAplicado18 = localStorage.getItem('ColorAplicado18');
if(storageColorAplicado18.length > minimo) {
document.getElementById('aplicada18id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada19").addEventListener('click', () => {
var seAplico19 = document.getElementById('seaplico19').textContent = "Aplicada";
var seAplicoColor19 = document.getElementById('aplicada19id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado19', seAplicoColor19);
localStorage.setItem('NombreAplicado19', seAplico19);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado19 = localStorage.getItem('NombreAplicado19');
if(storageNombreAplicado19.length > minimo) {
document.getElementById('seaplico19').textContent = storageNombreAplicado19;
}

var storageColorAplicado19 = localStorage.getItem('ColorAplicado19');
if(storageColorAplicado19.length > minimo) {
document.getElementById('aplicada19id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada20").addEventListener('click', () => {
var seAplico20 = document.getElementById('seaplico20').textContent = "Aplicada";
var seAplicoColor20 = document.getElementById('aplicada20id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado20', seAplicoColor20);
localStorage.setItem('NombreAplicado20', seAplico20);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado20 = localStorage.getItem('NombreAplicado20');
if(storageNombreAplicado20.length > minimo) {
document.getElementById('seaplico20').textContent = storageNombreAplicado20;
}

var storageColorAplicado20 = localStorage.getItem('ColorAplicado20');
if(storageColorAplicado20.length > minimo) {
document.getElementById('aplicada20id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada21").addEventListener('click', () => {
var seAplico21 = document.getElementById('seaplico21').textContent = "Aplicada";
var seAplicoColor21 = document.getElementById('aplicada21id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado21', seAplicoColor21);
localStorage.setItem('NombreAplicado21', seAplico21);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado21 = localStorage.getItem('NombreAplicado21');
if(storageNombreAplicado21.length > minimo) {
document.getElementById('seaplico21').textContent = storageNombreAplicado21;
}

var storageColorAplicado21 = localStorage.getItem('ColorAplicado21');
if(storageColorAplicado21.length > minimo) {
document.getElementById('aplicada21id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada22").addEventListener('click', () => {
var seAplico22 = document.getElementById('seaplico22').textContent = "Aplicada";
var seAplicoColor22 = document.getElementById('aplicada22id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado22', seAplicoColor22);
localStorage.setItem('NombreAplicado22', seAplico22);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado22 = localStorage.getItem('NombreAplicado22');
if(storageNombreAplicado22.length > minimo) {
document.getElementById('seaplico22').textContent = storageNombreAplicado22;
}

var storageColorAplicado22 = localStorage.getItem('ColorAplicado22');
if(storageColorAplicado22.length > minimo) {
document.getElementById('aplicada22id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada23").addEventListener('click', () => {
var seAplico23 = document.getElementById('seaplico23').textContent = "Aplicada";
var seAplicoColor23 = document.getElementById('aplicada23id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado23', seAplicoColor23);
localStorage.setItem('NombreAplicado23', seAplico23);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado23 = localStorage.getItem('NombreAplicado23');
if(storageNombreAplicado23.length > minimo) {
document.getElementById('seaplico23').textContent = storageNombreAplicado23;
}

var storageColorAplicado23 = localStorage.getItem('ColorAplicado23');
if(storageColorAplicado23.length > minimo) {
document.getElementById('aplicada23id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada24").addEventListener('click', () => {
var seAplico24 = document.getElementById('seaplico24').textContent = "Aplicada";
var seAplicoColor24 = document.getElementById('aplicada24id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado24', seAplicoColor24);
localStorage.setItem('NombreAplicado24', seAplico24);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado24 = localStorage.getItem('NombreAplicado24');
if(storageNombreAplicado24.length > minimo) {
document.getElementById('seaplico24').textContent = storageNombreAplicado24;
}

var storageColorAplicado24 = localStorage.getItem('ColorAplicado24');
if(storageColorAplicado24.length > minimo) {
document.getElementById('aplicada24id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada25").addEventListener('click', () => {
var seAplico25 = document.getElementById('seaplico25').textContent = "Aplicada";
var seAplicoColor25 = document.getElementById('aplicada25id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado25', seAplicoColor25);
localStorage.setItem('NombreAplicado25', seAplico25);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado25 = localStorage.getItem('NombreAplicado25');
if(storageNombreAplicado25.length > minimo) {
document.getElementById('seaplico25').textContent = storageNombreAplicado25;
}

var storageColorAplicado25 = localStorage.getItem('ColorAplicado25');
if(storageColorAplicado25.length > minimo) {
document.getElementById('aplicada25id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada26").addEventListener('click', () => {
var seAplico26 = document.getElementById('seaplico26').textContent = "Aplicada";
var seAplicoColor26 = document.getElementById('aplicada26id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado26', seAplicoColor26);
localStorage.setItem('NombreAplicado26', seAplico26);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado26 = localStorage.getItem('NombreAplicado26');
if(storageNombreAplicado26.length > minimo) {
document.getElementById('seaplico26').textContent = storageNombreAplicado26;
}

var storageColorAplicado26 = localStorage.getItem('ColorAplicado26');
if(storageColorAplicado26.length > minimo) {
document.getElementById('aplicada26id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada27").addEventListener('click', () => {
var seAplico27 = document.getElementById('seaplico27').textContent = "Aplicada";
var seAplicoColor27 = document.getElementById('aplicada27id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado27', seAplicoColor27);
localStorage.setItem('NombreAplicado27', seAplico27);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado27 = localStorage.getItem('NombreAplicado27');
if(storageNombreAplicado27.length > minimo) {
document.getElementById('seaplico27').textContent = storageNombreAplicado27;
}

var storageColorAplicado27 = localStorage.getItem('ColorAplicado27');
if(storageColorAplicado27.length > minimo) {
document.getElementById('aplicada27id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada28").addEventListener('click', () => {
var seAplico28 = document.getElementById('seaplico28').textContent = "Aplicada";
var seAplicoColor28 = document.getElementById('aplicada28id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado28', seAplicoColor28);
localStorage.setItem('NombreAplicado28', seAplico28);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado28 = localStorage.getItem('NombreAplicado28');
if(storageNombreAplicado28.length > minimo) {
document.getElementById('seaplico28').textContent = storageNombreAplicado28;
}

var storageColorAplicado28 = localStorage.getItem('ColorAplicado28');
if(storageColorAplicado28.length > minimo) {
document.getElementById('aplicada28id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada29").addEventListener('click', () => {
var seAplico29 = document.getElementById('seaplico29').textContent = "Aplicada";
var seAplicoColor29 = document.getElementById('aplicada29id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado29', seAplicoColor29);
localStorage.setItem('NombreAplicado29', seAplico29);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado29 = localStorage.getItem('NombreAplicado29');
if(storageNombreAplicado29.length > minimo) {
document.getElementById('seaplico29').textContent = storageNombreAplicado29;
}

var storageColorAplicado29 = localStorage.getItem('ColorAplicado29');
if(storageColorAplicado29.length > minimo) {
document.getElementById('aplicada29id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada30").addEventListener('click', () => {
var seAplico30 = document.getElementById('seaplico30').textContent = "Aplicada";
var seAplicoColor30 = document.getElementById('aplicada30id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado30', seAplicoColor30);
localStorage.setItem('NombreAplicado30', seAplico30);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado30 = localStorage.getItem('NombreAplicado30');
if(storageNombreAplicado30.length > minimo) {
document.getElementById('seaplico30').textContent = storageNombreAplicado30;
}

var storageColorAplicado30 = localStorage.getItem('ColorAplicado30');
if(storageColorAplicado30.length > minimo) {
document.getElementById('aplicada30id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada31").addEventListener('click', () => {
var seAplico31 = document.getElementById('seaplico31').textContent = "Aplicada";
var seAplicoColor31 = document.getElementById('aplicada31id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado31', seAplicoColor31);
localStorage.setItem('NombreAplicado31', seAplico31);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado31 = localStorage.getItem('NombreAplicado31');
if(storageNombreAplicado31.length > minimo) {
document.getElementById('seaplico31').textContent = storageNombreAplicado31;
}

var storageColorAplicado31 = localStorage.getItem('ColorAplicado31');
if(storageColorAplicado31.length > minimo) {
document.getElementById('aplicada31id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada32").addEventListener('click', () => {
var seAplico32 = document.getElementById('seaplico32').textContent = "Aplicada";
var seAplicoColor32 = document.getElementById('aplicada32id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado32', seAplicoColor32);
localStorage.setItem('NombreAplicado32', seAplico32);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado32 = localStorage.getItem('NombreAplicado32');
if(storageNombreAplicado32.length > minimo) {
document.getElementById('seaplico32').textContent = storageNombreAplicado32;
}

var storageColorAplicado32 = localStorage.getItem('ColorAplicado32');
if(storageColorAplicado32.length > minimo) {
document.getElementById('aplicada32id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada33").addEventListener('click', () => {
var seAplico33 = document.getElementById('seaplico33').textContent = "Aplicada";
var seAplicoColor33 = document.getElementById('aplicada33id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado33', seAplicoColor33);
localStorage.setItem('NombreAplicado33', seAplico33);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado33 = localStorage.getItem('NombreAplicado33');
if(storageNombreAplicado33.length > minimo) {
document.getElementById('seaplico33').textContent = storageNombreAplicado33;
}

var storageColorAplicado33 = localStorage.getItem('ColorAplicado33');
if(storageColorAplicado33.length > minimo) {
document.getElementById('aplicada33id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada34").addEventListener('click', () => {
var seAplico34 = document.getElementById('seaplico34').textContent = "Aplicada";
var seAplicoColor34 = document.getElementById('aplicada34id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado34', seAplicoColor34);
localStorage.setItem('NombreAplicado34', seAplico34);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado34 = localStorage.getItem('NombreAplicado34');
if(storageNombreAplicado34.length > minimo) {
document.getElementById('seaplico34').textContent = storageNombreAplicado34;
}

var storageColorAplicado34 = localStorage.getItem('ColorAplicado34');
if(storageColorAplicado34.length > minimo) {
document.getElementById('aplicada34id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada35").addEventListener('click', () => {
var seAplico35 = document.getElementById('seaplico35').textContent = "Aplicada";
var seAplicoColor35 = document.getElementById('aplicada35id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado35', seAplicoColor35);
localStorage.setItem('NombreAplicado35', seAplico35);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado35 = localStorage.getItem('NombreAplicado35');
if(storageNombreAplicado35.length > minimo) {
document.getElementById('seaplico35').textContent = storageNombreAplicado35;
}

var storageColorAplicado35 = localStorage.getItem('ColorAplicado35');
if(storageColorAplicado35.length > minimo) {
document.getElementById('aplicada35id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada36").addEventListener('click', () => {
var seAplico36 = document.getElementById('seaplico36').textContent = "Aplicada";
var seAplicoColor36 = document.getElementById('aplicada36id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado36', seAplicoColor36);
localStorage.setItem('NombreAplicado36', seAplico36);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado36 = localStorage.getItem('NombreAplicado36');
if(storageNombreAplicado36.length > minimo) {
document.getElementById('seaplico36').textContent = storageNombreAplicado36;
}

var storageColorAplicado36 = localStorage.getItem('ColorAplicado36');
if(storageColorAplicado36.length > minimo) {
document.getElementById('aplicada36id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada37").addEventListener('click', () => {
var seAplico37 = document.getElementById('seaplico37').textContent = "Aplicada";
var seAplicoColor37 = document.getElementById('aplicada37id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado37', seAplicoColor37);
localStorage.setItem('NombreAplicado37', seAplico37);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado37 = localStorage.getItem('NombreAplicado37');
if(storageNombreAplicado37.length > minimo) {
document.getElementById('seaplico37').textContent = storageNombreAplicado37;
}

var storageColorAplicado37 = localStorage.getItem('ColorAplicado37');
if(storageColorAplicado1.length > minimo) {
document.getElementById('aplicada37id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada38").addEventListener('click', () => {
var seAplico38 = document.getElementById('seaplico38').textContent = "Aplicada";
var seAplicoColor38 = document.getElementById('aplicada38id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado38', seAplicoColor38);
localStorage.setItem('NombreAplicado38', seAplico38);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado38 = localStorage.getItem('NombreAplicado38');
if(storageNombreAplicado38.length > minimo) {
document.getElementById('seaplico38').textContent = storageNombreAplicado38;
}

var storageColorAplicado38 = localStorage.getItem('ColorAplicado38');
if(storageColorAplicado38.length > minimo) {
document.getElementById('aplicada38id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada39").addEventListener('click', () => {
var seAplico39 = document.getElementById('seaplico39').textContent = "Aplicada";
var seAplicoColor39 = document.getElementById('aplicada39id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado39', seAplicoColor39);
localStorage.setItem('NombreAplicado39', seAplico39);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado39 = localStorage.getItem('NombreAplicado39');
if(storageNombreAplicado39.length > minimo) {
document.getElementById('seaplico39').textContent = storageNombreAplicado39;
}

var storageColorAplicado39 = localStorage.getItem('ColorAplicado39');
if(storageColorAplicado39.length > minimo) {
document.getElementById('aplicada39id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada40").addEventListener('click', () => {
var seAplico40 = document.getElementById('seaplico40').textContent = "Aplicada";
var seAplicoColor40 = document.getElementById('aplicada40id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado40', seAplicoColor40);
localStorage.setItem('NombreAplicado40', seAplico40);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado40 = localStorage.getItem('NombreAplicado40');
if(storageNombreAplicado40.length > minimo) {
document.getElementById('seaplico40').textContent = storageNombreAplicado40;
}

var storageColorAplicado40 = localStorage.getItem('ColorAplicado40');
if(storageColorAplicado40.length > minimo) {
document.getElementById('aplicada40id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada41").addEventListener('click', () => {
var seAplico41 = document.getElementById('seaplico41').textContent = "Aplicada";
var seAplicoColor41 = document.getElementById('aplicada41id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado41', seAplicoColor41);
localStorage.setItem('NombreAplicado41', seAplico41);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado41 = localStorage.getItem('NombreAplicado41');
if(storageNombreAplicado41.length > minimo) {
document.getElementById('seaplico41').textContent = storageNombreAplicado41;
}

var storageColorAplicado41 = localStorage.getItem('ColorAplicado41');
if(storageColorAplicado41.length > minimo) {
document.getElementById('aplicada41id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada42").addEventListener('click', () => {
var seAplico42 = document.getElementById('seaplico42').textContent = "Aplicada";
var seAplicoColor42 = document.getElementById('aplicada42id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado42', seAplicoColor42);
localStorage.setItem('NombreAplicado42', seAplico42);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado42 = localStorage.getItem('NombreAplicado42');
if(storageNombreAplicado42.length > minimo) {
document.getElementById('seaplico42').textContent = storageNombreAplicado42;
}

var storageColorAplicado42 = localStorage.getItem('ColorAplicado42');
if(storageColorAplicado42.length > minimo) {
document.getElementById('aplicada42id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada43").addEventListener('click', () => {
var seAplico43 = document.getElementById('seaplico43').textContent = "Aplicada";
var seAplicoColor43 = document.getElementById('aplicada43id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado43', seAplicoColor43);
localStorage.setItem('NombreAplicado43', seAplico43);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado43 = localStorage.getItem('NombreAplicado43');
if(storageNombreAplicado43.length > minimo) {
document.getElementById('seaplico43').textContent = storageNombreAplicado43;
}

var storageColorAplicado43 = localStorage.getItem('ColorAplicado43');
if(storageColorAplicado43.length > minimo) {
document.getElementById('aplicada43id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada44").addEventListener('click', () => {
var seAplico44 = document.getElementById('seaplico44').textContent = "Aplicada";
var seAplicoColor44 = document.getElementById('aplicada44id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado44', seAplicoColor44);
localStorage.setItem('NombreAplicado44', seAplico44);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado44 = localStorage.getItem('NombreAplicado44');
if(storageNombreAplicado44.length > minimo) {
document.getElementById('seaplico44').textContent = storageNombreAplicado44;
}

var storageColorAplicado44 = localStorage.getItem('ColorAplicado44');
if(storageColorAplicado44.length > minimo) {
document.getElementById('aplicada44id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada45").addEventListener('click', () => {
var seAplico45 = document.getElementById('seaplico45').textContent = "Aplicada";
var seAplicoColor45 = document.getElementById('aplicada45id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado45', seAplicoColor45);
localStorage.setItem('NombreAplicado45', seAplico45);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado45 = localStorage.getItem('NombreAplicado45');
if(storageNombreAplicado45.length > minimo) {
document.getElementById('seaplico45').textContent = storageNombreAplicado45;
}

var storageColorAplicado45 = localStorage.getItem('ColorAplicado45');
if(storageColorAplicado45.length > minimo) {
document.getElementById('aplicada45id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada46").addEventListener('click', () => {
var seAplico46 = document.getElementById('seaplico46').textContent = "Aplicada";
var seAplicoColor46 = document.getElementById('aplicada46id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado46', seAplicoColor46);
localStorage.setItem('NombreAplicado46', seAplico46);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado46 = localStorage.getItem('NombreAplicado46');
if(storageNombreAplicado46.length > minimo) {
document.getElementById('seaplico46').textContent = storageNombreAplicado46;
}

var storageColorAplicado46 = localStorage.getItem('ColorAplicado46');
if(storageColorAplicado46.length > minimo) {
document.getElementById('aplicada46id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada47").addEventListener('click', () => {
var seAplico47 = document.getElementById('seaplico47').textContent = "Aplicada";
var seAplicoColor47 = document.getElementById('aplicada47id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado47', seAplicoColor47);
localStorage.setItem('NombreAplicado47', seAplico47);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado47 = localStorage.getItem('NombreAplicado47');
if(storageNombreAplicado47.length > minimo) {
document.getElementById('seaplico47').textContent = storageNombreAplicado47;
}

var storageColorAplicado47 = localStorage.getItem('ColorAplicado47');
if(storageColorAplicado47.length > minimo) {
document.getElementById('aplicada47id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada48").addEventListener('click', () => {
var seAplico48 = document.getElementById('seaplico48').textContent = "Aplicada";
var seAplicoColor48 = document.getElementById('aplicada48id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado48', seAplicoColor48);
localStorage.setItem('NombreAplicado48', seAplico48);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado48 = localStorage.getItem('NombreAplicado48');
if(storageNombreAplicado48.length > minimo) {
document.getElementById('seaplico48').textContent = storageNombreAplicado48;
}

var storageColorAplicado48 = localStorage.getItem('ColorAplicado48');
if(storageColorAplicado48.length > minimo) {
document.getElementById('aplicada48id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada49").addEventListener('click', () => {
var seAplico49 = document.getElementById('seaplico49').textContent = "Aplicada";
var seAplicoColor49 = document.getElementById('aplicada49id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado49', seAplicoColor49);
localStorage.setItem('NombreAplicado49', seAplico49);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado49 = localStorage.getItem('NombreAplicado49');
if(storageNombreAplicado49.length > minimo) {
document.getElementById('seaplico49').textContent = storageNombreAplicado49;
}

var storageColorAplicado49 = localStorage.getItem('ColorAplicado49');
if(storageColorAplicado49.length > minimo) {
document.getElementById('aplicada49id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada49").addEventListener('click', () => {
var seAplico49 = document.getElementById('seaplico49').textContent = "Aplicada";
var seAplicoColor49 = document.getElementById('aplicada49id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado49', seAplicoColor49);
localStorage.setItem('NombreAplicado49', seAplico49);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado49 = localStorage.getItem('NombreAplicado49');
if(storageNombreAplicado49.length > minimo) {
document.getElementById('seaplico49').textContent = storageNombreAplicado49;
}

var storageColorAplicado49 = localStorage.getItem('ColorAplicado49');
if(storageColorAplicado49.length > minimo) {
document.getElementById('aplicada49id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada50").addEventListener('click', () => {
var seAplico50 = document.getElementById('seaplico50').textContent = "Aplicada";
var seAplicoColor50 = document.getElementById('aplicada50id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado50', seAplicoColor50);
localStorage.setItem('NombreAplicado50', seAplico50);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado50 = localStorage.getItem('NombreAplicado50');
if(storageNombreAplicado50.length > minimo) {
document.getElementById('seaplico50').textContent = storageNombreAplicado50;
}

var storageColorAplicado50 = localStorage.getItem('ColorAplicado50');
if(storageColorAplicado50.length > minimo) {
document.getElementById('aplicada50id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada51").addEventListener('click', () => {
var seAplico51 = document.getElementById('seaplico51').textContent = "Aplicada";
var seAplicoColor51 = document.getElementById('aplicada51id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado51', seAplicoColor51);
localStorage.setItem('NombreAplicado51', seAplico51);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado51 = localStorage.getItem('NombreAplicado51');
if(storageNombreAplicado51.length > minimo) {
document.getElementById('seaplico51').textContent = storageNombreAplicado51;
}

var storageColorAplicado51 = localStorage.getItem('ColorAplicado51');
if(storageColorAplicado51.length > minimo) {
document.getElementById('aplicada51id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada52").addEventListener('click', () => {
var seAplico52 = document.getElementById('seaplico52').textContent = "Aplicada";
var seAplicoColor52 = document.getElementById('aplicada52id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado52', seAplicoColor52);
localStorage.setItem('NombreAplicado52', seAplico52);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado52 = localStorage.getItem('NombreAplicado52');
if(storageNombreAplicado52.length > minimo) {
document.getElementById('seaplico52').textContent = storageNombreAplicado52;
}

var storageColorAplicado52 = localStorage.getItem('ColorAplicado52');
if(storageColorAplicado52.length > minimo) {
document.getElementById('aplicada52id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada53").addEventListener('click', () => {
var seAplico53 = document.getElementById('seaplico53').textContent = "Aplicada";
var seAplicoColor53 = document.getElementById('aplicada53id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado53', seAplicoColor53);
localStorage.setItem('NombreAplicado53', seAplico53);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado53 = localStorage.getItem('NombreAplicado53');
if(storageNombreAplicado53.length > minimo) {
document.getElementById('seaplico53').textContent = storageNombreAplicado53;
}

var storageColorAplicado53 = localStorage.getItem('ColorAplicado53');
if(storageColorAplicado53.length > minimo) {
document.getElementById('aplicada53id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada54").addEventListener('click', () => {
var seAplico54 = document.getElementById('seaplico54').textContent = "Aplicada";
var seAplicoColor54 = document.getElementById('aplicada54id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado54', seAplicoColor54);
localStorage.setItem('NombreAplicado54', seAplico54);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado54 = localStorage.getItem('NombreAplicado54');
if(storageNombreAplicado54.length > minimo) {
document.getElementById('seaplico54').textContent = storageNombreAplicado54;
}

var storageColorAplicado54 = localStorage.getItem('ColorAplicado54');
if(storageColorAplicado54.length > minimo) {
document.getElementById('aplicada54id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada55").addEventListener('click', () => {
var seAplico55 = document.getElementById('seaplico55').textContent = "Aplicada";
var seAplicoColor55 = document.getElementById('aplicada55id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado55', seAplicoColor55);
localStorage.setItem('NombreAplicado55', seAplico55);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado55 = localStorage.getItem('NombreAplicado55');
if(storageNombreAplicado55.length > minimo) {
document.getElementById('seaplico55').textContent = storageNombreAplicado55;
}

var storageColorAplicado55 = localStorage.getItem('ColorAplicado55');
if(storageColorAplicado55.length > minimo) {
document.getElementById('aplicada55id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada56").addEventListener('click', () => {
var seAplico56 = document.getElementById('seaplico56').textContent = "Aplicada";
var seAplicoColor56 = document.getElementById('aplicada56id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado56', seAplicoColor56);
localStorage.setItem('NombreAplicado56', seAplico56);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado56 = localStorage.getItem('NombreAplicado56');
if(storageNombreAplicado56.length > minimo) {
document.getElementById('seaplico56').textContent = storageNombreAplicado56;
}

var storageColorAplicado56 = localStorage.getItem('ColorAplicado56');
if(storageColorAplicado56.length > minimo) {
document.getElementById('aplicada56id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada57").addEventListener('click', () => {
var seAplico57 = document.getElementById('seaplico57').textContent = "Aplicada";
var seAplicoColor57 = document.getElementById('aplicada57id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado57', seAplicoColor57);
localStorage.setItem('NombreAplicado57', seAplico57);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado57 = localStorage.getItem('NombreAplicado57');
if(storageNombreAplicado57.length > minimo) {
document.getElementById('seaplico57').textContent = storageNombreAplicado57;
}

var storageColorAplicado57 = localStorage.getItem('ColorAplicado57');
if(storageColorAplicado57.length > minimo) {
document.getElementById('aplicada57id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada58").addEventListener('click', () => {
var seAplico58 = document.getElementById('seaplico58').textContent = "Aplicada";
var seAplicoColor58 = document.getElementById('aplicada58id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado58', seAplicoColor58);
localStorage.setItem('NombreAplicado58', seAplico58);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado58 = localStorage.getItem('NombreAplicado58');
if(storageNombreAplicado58.length > minimo) {
document.getElementById('seaplico58').textContent = storageNombreAplicado58;
}

var storageColorAplicado58 = localStorage.getItem('ColorAplicado58');
if(storageColorAplicado58.length > minimo) {
document.getElementById('aplicada58id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada59").addEventListener('click', () => {
var seAplico59 = document.getElementById('seaplico59').textContent = "Aplicada";
var seAplicoColor59 = document.getElementById('aplicada59id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado59', seAplicoColor59);
localStorage.setItem('NombreAplicado59', seAplico59);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado59 = localStorage.getItem('NombreAplicado59');
if(storageNombreAplicado59.length > minimo) {
document.getElementById('seaplico59').textContent = storageNombreAplicado59;
}

var storageColorAplicado59 = localStorage.getItem('ColorAplicado59');
if(storageColorAplicado59.length > minimo) {
document.getElementById('aplicada59id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada60").addEventListener('click', () => {
var seAplico60 = document.getElementById('seaplico60').textContent = "Aplicada";
var seAplicoColor60 = document.getElementById('aplicada60id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado60', seAplicoColor60);
localStorage.setItem('NombreAplicado60', seAplico60);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado60 = localStorage.getItem('NombreAplicado60');
if(storageNombreAplicado60.length > minimo) {
document.getElementById('seaplico60').textContent = storageNombreAplicado60;
}

var storageColorAplicado60 = localStorage.getItem('ColorAplicado60');
if(storageColorAplicado60.length > minimo) {
document.getElementById('aplicada60id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada61").addEventListener('click', () => {
var seAplico61 = document.getElementById('seaplico61').textContent = "Aplicada";
var seAplicoColor61 = document.getElementById('aplicada61id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado61', seAplicoColor61);
localStorage.setItem('NombreAplicado61', seAplico61);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado61 = localStorage.getItem('NombreAplicado61');
if(storageNombreAplicado61.length > minimo) {
document.getElementById('seaplico61').textContent = storageNombreAplicado61;
}

var storageColorAplicado61 = localStorage.getItem('ColorAplicado61');
if(storageColorAplicado61.length > minimo) {
document.getElementById('aplicada61id').style.backgroundColor = 'green';
}

document.querySelector(".aplicada62").addEventListener('click', () => {
var seAplico62 = document.getElementById('seaplico62').textContent = "Aplicada";
var seAplicoColor62 = document.getElementById('aplicada62id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado62', seAplicoColor62);
localStorage.setItem('NombreAplicado62', seAplico62);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado62 = localStorage.getItem('NombreAplicado62');
if(storageNombreAplicado62.length > minimo) {
document.getElementById('seaplico62').textContent = storageNombreAplicado62;
}

var storageColorAplicado62 = localStorage.getItem('ColorAplicado62');
if(storageColorAplicado62.length > minimo) {
document.getElementById('aplicada62id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada63").addEventListener('click', () => {
var seAplico63 = document.getElementById('seaplico63').textContent = "Aplicada";
var seAplicoColor63 = document.getElementById('aplicada63id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado63', seAplicoColor63);
localStorage.setItem('NombreAplicado63', seAplico63);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado63 = localStorage.getItem('NombreAplicado63');
if(storageNombreAplicado63.length > minimo) {
document.getElementById('seaplico63').textContent = storageNombreAplicado63;
}

var storageColorAplicado63 = localStorage.getItem('ColorAplicado63');
if(storageColorAplicado63.length > minimo) {
document.getElementById('aplicada63id').style.backgroundColor = 'green';
}


document.querySelector(".aplicada64").addEventListener('click', () => {
var seAplico64 = document.getElementById('seaplico64').textContent = "Aplicada";
var seAplicoColor64 = document.getElementById('aplicada64id').style.backgroundColor = 'green';
localStorage.setItem('ColorAplicado64', seAplicoColor64);
localStorage.setItem('NombreAplicado64', seAplico64);
  alertaPositiva.textContent = "Se aplicó el antiparasitario!"
  alertaPositiva.style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => {
  location.reload();
  }, "1500")
});

var storageNombreAplicado64 = localStorage.getItem('NombreAplicado64');
if(storageNombreAplicado64.length > minimo) {
document.getElementById('seaplico64').textContent = storageNombreAplicado64;
}

var storageColorAplicado64 = localStorage.getItem('ColorAplicado64');
if(storageColorAplicado64.length > minimo) {
document.getElementById('aplicada64id').style.backgroundColor = 'green';
}
