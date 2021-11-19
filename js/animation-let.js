const typed = new Typed('.typed', {
    strings: [
        '<h3 class="name"></h3>',
        '<h3 class="name">Luca Strumía</h3>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,*/
	cursorChar: '|', // Caracter para el cursor*/
	contentType: 'html', // 'html' o 'null' para texto sin formato
})

const typed1 = new Typed('.typed1',{
    strings: [
        '<h4 class="name"></h4>',
        '<h4 class="name">FrontEnd Developer<h4>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,*/
	cursorChar: '|', // Caracter para el cursor*/
	contentType: 'html', // 'html' o 'null' para texto sin formato
})