import {inc, dec} from './actions';
import  randarr from  './rand';
import zNormal from './zNormal';
import  PAA from './paa';
import  sax3 from './sax';
import  distance3 from './distance';
require('./seedrandom.min.js');
// import gid from './gid'
function gid(id ){
  return  document.getElementById(id);
}
function gidh(id) {
  return gid(id).innerHTML;
}
window.onload = function() {
  let x = gidh('x');
  let y = gidh('y');
  let z = gidh('z');
  let nH = gid('n');
  let wH = gid('w');
  let xpow = Math.pow(2,parseInt(x))
  nH.innerHTML = xpow;
  wH.innerHTML = Math.pow(2,parseInt(y));

  let arrA = randarr(xpow,parseInt(x),0,'Time series A ssdsds');
  gid('stra').innerHTML =  arrA;
  let arrB = randarr(xpow,parseInt(x),0,'Time series B dfdddsdfsdf');
  gid('strb').innerHTML = arrB;

  let zA = zNormal(arrA);
  gid('zstra').innerHTML =  zA;

  let zB =  zNormal(arrB);
  gid('zstrb').innerHTML =  zB;

  let PAAA = PAA(zNormal(arrA),parseFloat(wH.innerHTML));
  gid('paaa').innerHTML = PAAA;
  let PAAB = PAA(zNormal(arrB),parseFloat(wH.innerHTML));
  gid('paab').innerHTML = PAAB;

  let saxa = sax3(PAAA,parseInt(z));
  gid('saxa').innerHTML = saxa.join('');
  let saxb = sax3(PAAB,parseInt(z));
  gid('saxb').innerHTML = saxb.join('');

  let dis3 = distance3(saxa,saxb);
  gid('dis').innerHTML = dis3;

}
