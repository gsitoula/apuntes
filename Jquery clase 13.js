jQuery: que es? es una libreria, codigo MUCHO codigo.
 La liberia propia debe tener la capacidad de ser insertada en la consola
 y debe devolver algo (true en el caso de Jquery).
El selector de jQuery en la consola del browser es el signo $ (igual no
	funciona en todos los browsers, ya que $ podria no estar "anclado"
	a jQuery).
$(document)---> con esta expression podemos indicarle a jQuery que trabaje
con el document en cuestion (o DOM). jQuery tomara al document HTML del
browser para realizar lo que le indiquemos.

El metodo .animate() hace que los elementos del document transicionen
dependiendo de los parametros que le indiquemos.

Para estar seguros que lo que quiera realizar en el document ocurra y no
quede en blanco, cuando empiezo mi codigo debo poner $(document).ready.
Si no, puedo harcodear $(function(){}), en este caso la funcion que quiera
correr, correra cuando el document este listo (ready).

document.querySelector('') ---> alternativa para el $, corre en todos lados.

Nota n°1: para sintetizar la sintaxis de mi codigo, es preferible declarar una var de
esta manera :
		var canvasElem = $("#canvas");
luego, cuando quiera modificar el canvas uso la variable y no directamente el selector
con lo que quiera usar, ya que el DOM seria lento de esta ultima forma.

setTimeout() / setInterval() / clearInterval() ---> ¡buscarlos!



