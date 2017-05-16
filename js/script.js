function agregar(){
	//se recupera texto ingresado en tareas y se limpia con ''
	//paso 1 : recuperamos texto ingresado en textarea y limpio textarea
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
	// paso 2 indicamos donde van a estar las tareas que recupere de textarea
	//donde va estar las tareas de texttarea
	var cont = document.getElementById("contenedor");
	// paso 3 creamos nuestros nuevos nodos elementos 
	//se crean nuevos nodos elementos
	var nuevaTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	//paso 4 asignamos padres a nodos creados.
	//asignamos padres a los nodos creados.
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevaTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevaTareas);
	//paso5
	//creamos checkbox e íconos, se le dan atributos y clases
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");
	//paso 6 asignamos padres en nodos creados
	//se asigna padres a nodos creados
	nuevaTareas.appendChild(chck);
	nuevaTareas.appendChild(basura);
	nuevaTareas.appendChild(cora);
	//paso 7
	//se agrega un evento al hacer click para que elimine o agregue la clase 'tachado' al elementoContenedor
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	});
	// paso 8 basurero
	//se remueve el icono basurero al hacerle click sobre el
	basura.addEventListener("click", function(){
		cont.removeChild(nuevaTareas);
	});
	//paso 9
	//se crea funcion click para el corazón  y le asignamos una clase red de css
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	});
	//EXTRA: valida que el textarea no esté vacía al presionar botón aceptar, ubica el sgte código dentro de la función de manera que no se permita agregar una tarea vacía.
	if(tareas == null || tareas == 0){
		alert("¡Error! Debe ingresar tarea");
		return false;
	}
	
}
agregar();



