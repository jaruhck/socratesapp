// ======================================
// ¿PENSÁS COMO SÓCRATES?
// Proyecto Filosofía
// Basado en "Recuerdos de Sócrates"
// de Jenofonte
// ======================================

// ---------- CONFIGURACIÓN ----------

const chat = document.getElementById("chat");
const buttons = document.getElementById("buttons");
const progressBar = document.getElementById("progress-bar");

// Si no tenés pop.mp3, simplemente comentá esta línea
const sonido = new Audio("pop.mp3");

// ---------- ESCENAS ----------

const escenas = [

{
titulo:"🏛 Bienvenido",

texto:`

<p>

¡Hola!

Soy <b>Sócrates</b>.

Hoy quiero conversar con vos de la misma forma en la que conversaba con mis discípulos hace más de 2400 años.

No voy a decirte qué pensar.

Voy a hacerte preguntas.

Y juntos descubriremos por qué uno de mis discípulos, <b>Jenofonte</b>, decidió escribir este diálogo.

</p>

`,

imagen:"img/socrates.png",

botones:[
{
texto:"Comenzar",
siguiente:1
}
]

},

{

titulo:"👤 ¿Quién fue Sócrates?",

texto:`

<p>

Sócrates fue un filósofo nacido en Atenas.

A diferencia de muchos pensadores, nunca escribió libros.

Prefería recorrer las calles conversando con las personas.

Creía que haciendo preguntas era posible descubrir la verdad mucho mejor que simplemente escuchando respuestas.

</p>

<p>

Por esa razón, hoy se lo considera uno de los padres de la filosofía occidental.

</p>

`,

imagen:"img/socrates.png",

botones:[
{
texto:"Continuar",
siguiente:2
}
]

},

{

titulo:"📖 ¿Quién fue Jenofonte?",

texto:`

<p>

Jenofonte fue uno de los discípulos de Sócrates.

Además de filósofo, fue militar e historiador.

Escribió un libro llamado

<b>Recuerdos de Sócrates</b>

para mostrar cómo enseñaba realmente su maestro.

Gracias a ese libro hoy conocemos muchos de sus diálogos.

</p>

`,

imagen:"img/jenofonte.png",

botones:[
{
texto:"Seguir",
siguiente:3
}
]

},

{

titulo:"🤔 Aristodemo",

texto:`

<p>

Uno de los personajes del diálogo es

<b>Aristodemo</b>.

Él no creía que existieran los dioses.

En lugar de discutir o enojarse...

Sócrates comenzó a hacerle preguntas.

Porque pensaba que una persona aprende más cuando llega sola a una conclusión.

</p>

`,

imagen:"img/aristodemo.png",

botones:[
{
texto:"Continuar",
siguiente:4
}
]

},

{

titulo:"⌚ El ejemplo del reloj",

texto:`

<p>

Imaginá que caminás por la calle.

Encontrás un reloj.

Tiene agujas.

Tiene números.

Tiene engranajes.

Todo funciona perfectamente.

</p>

<p>

Entonces Sócrates pregunta:

</p>

<h3>

¿Creerías que apareció por casualidad?

</h3>

`,

imagen:"img/reloj.png",

botones:[

{
texto:"Sí",
siguiente:5
},

{
texto:"No",
siguiente:5
}

]

},

{
titulo:"⌚ La respuesta",

texto:`

<p>

La mayoría respondería que no.

Pensaría que alguien lo construyó.

Entonces Sócrates hace una comparación.

Si creemos que un objeto tan pequeño necesita un creador...

¿qué ocurre con algo muchísimo más complejo?

</p>

`,

imagen:"img/reloj.png",

botones:[
{
texto:"Descubrir",
siguiente:6
}
]

},
{

titulo:"👁 El ojo humano",

texto:`

<p>

Sócrates continúa con otro ejemplo.

Observa el cuerpo humano y se detiene especialmente en el ojo.

</p>

<p>

El ojo posee párpados que lo protegen.

Tiene pestañas que ayudan a impedir la entrada de polvo.

Produce lágrimas que mantienen limpia su superficie.

Además, todas sus partes trabajan juntas para permitirnos ver.

</p>

<p>

Entonces pregunta:

</p>

<h3>

Si un reloj parece haber sido diseñado...

¿qué pensarías de un órgano mucho más complejo como el ojo?

</h3>

`,

imagen:"img/ojo.png",

botones:[

{
texto:"Continuar",
siguiente:7
}

]

},

{

titulo:"🧠 La inteligencia",

texto:`

<p>

Sócrates cambia de ejemplo.

Pregunta si alguna vez vimos nuestra propia inteligencia.

</p>

<p>

La respuesta es no.

No podemos verla como vemos una piedra o una mesa.

Sin embargo, sabemos que existe por las decisiones que tomamos, por el aprendizaje y por nuestra capacidad de razonar.

</p>

<p>

Con esto intenta mostrar que no todo lo real puede verse directamente.

</p>

`,

imagen:"img/cerebro.png",

botones:[

{
texto:"Seguir",
siguiente:8
}

]

},

{

titulo:"🌍 El orden del universo",

texto:`

<p>

Luego Sócrates invita a observar el mundo.

</p>

<ul>

<li>☀️ El Sol proporciona luz y calor.</li>

<li>🌧 La lluvia permite que crezcan las plantas.</li>

<li>🌱 La naturaleza sigue ciclos.</li>

<li>🌎 Los seres vivos parecen adaptados a su entorno.</li>

</ul>

<p>

Para Sócrates, todo esto muestra un cierto orden.

Ese orden lo lleva a pensar que existe una inteligencia detrás del universo.

</p>

`,

imagen:"img/universo.jpg",

botones:[

{
texto:"Continuar",
siguiente:9
}

]

},

{

titulo:"💡 ¿Sabías que...?",

texto:`

<p>

Este razonamiento hoy recibe el nombre de

<b>Argumento del Diseño</b>

o

<b>Argumento Teleológico</b>.

</p>

<p>

No todos los filósofos están de acuerdo con él.

Algunos creen que la naturaleza puede explicarse mediante procesos naturales sin necesidad de un diseñador.

Por eso sigue siendo un tema de debate incluso en la actualidad.

</p>

`,

imagen:"img/libro.png",

botones:[

{
texto:"Seguir",
siguiente:10
}

]

},

{

titulo:"📚 ¿Qué buscaba realmente Sócrates?",

texto:`

<p>

Lo más importante del diálogo no es demostrar quién tiene razón.

Lo importante es la forma en que Sócrates enseña.

</p>

<p>

En vez de imponer sus ideas, hace preguntas.

Escucha.

Invita a pensar.

Eso es precisamente el método socrático.

</p>

<p>

Su intención era que cada persona llegara a sus propias conclusiones mediante la reflexión.

</p>

`,

imagen:"img/socrates.png",

botones:[

{
texto:"Ir al final",
siguiente:11
}

]

},

{

titulo:"🏛 Reflexión final",

texto:`

<p>

Llegamos al final del diálogo.

¿Notaste algo?

En ningún momento Sócrates obligó a Aristodemo a creer.

Simplemente fue haciendo preguntas.

Ese es el verdadero valor del método socrático.

</p>

<p>

La filosofía no consiste únicamente en responder.

También consiste en aprender a preguntar.

</p>

`,

imagen:"img/socrates.png",

botones:[

{
texto:"Responder un desafío",
siguiente:12
}

]

},


{

titulo:"🎉 ¡Terminaste!",

texto:`

<h2>¡Felicitaciones!</h2>

<p>

Acabás de recorrer uno de los diálogos más conocidos de Jenofonte.

Esperamos que esta experiencia te haya ayudado a comprender mejor cómo enseñaba Sócrates y por qué sigue siendo uno de los filósofos más importantes de la historia.

</p>

<p>

<b>

"La filosofía comienza cuando nos atrevemos a preguntar."

</b>

</p>

`,

imagen:"img/socrates.png",

botones:[

{
texto:"🔄 Reiniciar",
siguiente:0
}

]

}

];

// =========================
// FUNCIONES
// =========================

function mostrarEscena(indice){

const escena = escenas[indice];

// Barra de progreso
progressBar.style.width=((indice+1)/escenas.length*100)+"%";

// Cambiar título de la pestaña
document.title=escena.titulo;

// Mostrar animación de escritura
chat.innerHTML=`

<div class="chat-contenedor">

<div class="avatar">

<img src="${escena.imagen}" alt="imagen">

</div>

<div class="mensaje" id="mensaje">

<h3>⌛ Sócrates está escribiendo...</h3>

</div>

</div>

`;

// Esperar un momento antes de mostrar el mensaje
setTimeout(()=>{

try{
sonido.currentTime=0;
sonido.play();
}catch(e){}

document.getElementById("mensaje").innerHTML=`

<h2>${escena.titulo}</h2>

${escena.texto}

`;

},800);

// Crear botones

buttons.innerHTML="";

escena.botones.forEach(b=>{

const boton=document.createElement("button");

boton.className="boton";

boton.textContent=b.texto;

boton.onclick=()=>{

mostrarEscena(b.siguiente);

};

buttons.appendChild(boton);

});

}

// Iniciar aplicación

mostrarEscena(0);