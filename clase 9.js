function iguales(arr1, arr2) {
    if (
        /*no tienen la misma 
        cantidad de elementos*/
    ) {
        return false;
    }
}

var resultado;
var resultado = true;
arr.forEach(function(elemento) {
    //por cada elemento
    //console.log(elemento);
    if (
        /*elemen to es distinto a lo que tiene arr2
        en la posicion 'indice'*/
    ) {
        resultado = false; /*return false;*/
    }
})
return resultado;



/*la function del forEach es usada solo en el forEach para hacer
lo que ella debe hacer con lo especificado*/
var arr = [1, 2, 3];



function fn(elem) {
    console.log(elem);
}
//arr.forEach(fn) así llamo a este tipo



var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, 4];
if (arr1.length !== arr2.length) { /*no tienen los mismos elementos*/ }

/*metodo .some = si alguna vez retorno algo cortaré y no seguire
con los que siguen.
El forEach(por cada) no corta, el some(algunos) si.

*/
var arr = [] 1,
    2, 3;
arr.some(function(elemento, indice) {
    //por cada elemento
    return true;
    console.log(elemento);
})

/*declaracion!==asignacion */

function hola() {
    console.log('mundo');
    return;
}
hola();

function hola() {
    return 'mundo';
}
console.log(hola());

/*las funciones siempre hacen return de una expresión*/
/*las variables declaradas en funciones viven dentro de esta función
y luego perecen en la memoria para nunca mas ser vistas por los mortales*/
/*la declaracion de la variable no puede ser en bloques*/
/*las funciones pueden ser llamadas antes que sean declaradas. Estas poseen
hoisting completo, las variables son parcialmente hoisteadas.
function expression !== function declaration.
*/

/**/
/*archivo js (index de NodeJs???), tps que sean funciones solamente,
las variables deben estar dentro de las funciones, no por fuera de ellas.
El comportamiento de las funciones sean autocontenidas.
se puede hacer un txt.js donde estan las variables declaradas
para realizar pruebas*/

/*se puede controlar el comportamiento erratico al declarar una variable
global.*/
function sayHello() {
    "use strict";
    message = "hello"
    console.log(message);
}
/*lo que ocurre en esta funcion es que el strict mode no dejara que corra
la funcion ya que message = "hello" no esta declarada como variable,
esto dara al correrla un RefErr donde dira que message no esta declarada.
Sirve para no olvidarse de declarar funciones locales y no globales, que
pueden causar conflicto a futuro*/


function sayHello() {
    "use strict";
    var message = "hello"
    console.log(message);
}
/*al declararla a messege como funcion, correra como debe correr. No
hay que olvidarse del "use strict", tanto en funciones como al principio
de los archivos*/

function plus(x, y) {
    return x + y;
}
/*supongamos que debemos hacer una funcion que sume muchos parametros y
para no volvernos locos y estar agregando una sarlanga de parametros
por el resto de nuestras vidas.
se puede usar el console.log para esto,*/
function plus() {
    return arguments;
}
/*arguments son los argumentos que posee mi funcion, infinitos sean ellos.
dos cosas diferentes son declararles los parametros a una funcion, y otra
invocarlos al llamar la funcion(pueden ser ellos muchos, no necesariamente
estan atados a que haya un solo parametro declarado).
al no darle un valor especifico, Javascript me devolvera un undefined ya que
es indefinido.*/

function plus() {
    console.log(arguments.length);
}
/*con el length me dara el largo de los arguments que yo le 
paso al llamar la funcion*/

plus.call();
/*usando .call puedo decirle a la funcion que me devuelva un
valor ya usado anteriormente.
*/
/*arguments contiene los parametros de la funcion, dentro de la 
funcion*/
var params = [];
/*declaro un 
array con parametros. luego con una funcion, pusheo un el valor 1 en
el parametro*/
params.push(1)
/*luego sigo pusheando x parametros*/
params.push(x)
plus.apply(null, params)
/*
esto sirve que al usar .apply(null, params) lo que haré sera
llamar la funcion con los parametros de param. de esta manera 
Indirectamente se maneja la invocacion de la función.*/

function test(decirMundo) {
    var params = ["hola"];
    if (decirMundo) {
        params.push("mundo");
    }
    console.log.apply(console, params);
}
test(); //dira "hola" en consola
test(true); //dira "hola mundo" en consola
/*luego del apply debo indicarle al metodo anterior(en este caso
del .log seria el console) de donde proviene, con null (en este caso)
anularia el log ya que su origen seria la nada y no el console. 
*/
var gars = plus("one", "two", "tres")
Object.prototype.toString.call(gars)
//"[object Arguments]"
Object.prototype.toString.call([])
//"[object Array]"
Object.prototype.toString.call(1)
//"[object Number]"
Object.prototype.toString.call(null)
//"[object Null]"

/*
estos metodos me dara lo que cada elemento es, es como una version
mejorada del typeOf, ya que no es tan caotico como este.
Method Borrowing(buscar!!!)
*/
[].forEach.call(args, function(curEl, curIndex, arr) {
    console.log(arguments)
})
/*
operaciones de arrays= 
map()entra un array => sale un nuevo array con cambios aplicados
filter(filtrar elementos) entra un array => sale array con -length
reduce 
*/

["uno", "dos", "tres", "cuatro"].reduce(function(previousValue, currentValue, index, array) {
        console.log(arguments);
        return currentValue;
    }, "cero"
    /*este es el valor donde comenzara a realizar el reduce, 
    al designarlo, usara para empezar este valor*/
);


function test(p1, p2) {
    if (Array.isArray(p1) === Array.isArray(p2)) {
        p1.forEach(function(param){console.log(param);})

    } else { console.log("ERROR! Function Abort...")

    }

    return;

}