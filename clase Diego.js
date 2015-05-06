function test(param) {
	if (Array.isArray(param)) {
		param.forEach(function(param1) {
			console.log(param1)
		})
        /*probar con un else if sobre todos los parametros
        que se le agregue a la funcion
        */
    } else {
    	console.log("i can let you that Dave")
    }
}

/*arr.reduce sirve para reducir un array a un solo elemento
los arguments es el lugar donde se ubican los parametros
de una funcion (es similar a un array pero no posee las mismas
	cualidades que este)*/

codificar una funcion que sume infinitos numeros utilizando:
| arguments | method borrowing | reduce

resolucion ===

function infiniteSum() {
	return Array
        /*[] es lo mismo 
        ponerle los corchetes*/
        .prototype.reduce.call(arguments, function(prev, cur, index) {
        	return prev + cur;
        }, 0);
    }

    Object() literal = {...
    };
    typeOf {};
    --- > "object"


    var person = {
    	/*(entries)-->*/
    	name: "pepito",
    	age = 24,
    	/*Y(keys)*/
    }
    /*al declarar una key que posee un espacio, es mejor usar las ("" '') para que no entre en conflicto.
el valor de los datos en las funciones pueden ser funciones.
no olvidarse en las funciones declarar el "use strict"
*/

var alum = {
	name: ["pepe", "juan", "carlos", "alfredo", "maria", "carla"
	"josefa"
	],
	edad: [30, 20, 10, 56, 70, 44]
}

/*map filter reduce, estudiarlos...funcion funcional*/

var alumnos = [{
	nombre: "pepe",
	edad: 30,
	sexo: "masc"
}, {
	nombre: "juan",
	edad: 20,
	sexo: "masc"
}, {
	nombre: "carlos",
	edad: 10,
	sexo: "masc"
}, {
	nombre: "alfredo",
	edad: 56,
	sexo: "masc"
}, {
	nombre: "maria",
	edad: 70,
	sexo: "fem"
}, {
	nombre: "josefa",
	edad: 44,
	sexo: "fem"
}];

function test(param) {
	param.filter(function(edadMin, sexo) {
		if (edadMin > 50){}
		else if (sexo !== "masc"){}
	});
	return
}