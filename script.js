// =======================================
// ¿PENSÁS COMO SÓCRATES?
// Basado en "Recuerdos de Sócrates"
// de Jenofonte
// =======================================

const sonido = new Audio("pop.mp3");

const chat = document.getElementById("chat");
const buttons = document.getElementById("buttons");
const progressBar = document.getElementById("progress-bar");

// =======================================
// ESCENAS
// =======================================

const escenas = [

{

titulo:"🏛️ Bienvenido",

emoji:"🏛️",

texto:`

<p>

¡Bienvenido!

En esta experiencia vas a conocer uno de los diálogos más famosos escritos por <b>Jenofonte</b> sobre su maestro <b>Sócrates</b>.

No será una clase tradicional.

Responderás preguntas, reflexionarás y descubrirás cómo enseñaba Sócrates.

</p>

`,

botones:[

{
texto:"Comenzar",
siguiente:1
}

]

},

{

titulo:"👤 ¿Quién fue Sócrates?",

emoji:"👤",

texto:`

<p>

Sócrates fue uno de los filósofos más importantes de la Antigua Grecia.

Vivió en Atenas hace más de 2400 años.

Nunca escribió libros.

Todo lo que sabemos de él fue gracias a sus discípulos, especialmente Platón y Jenofonte.

</p>

<p>

Su forma de enseñar era muy especial.

No daba respuestas.

Hacía preguntas para que cada persona encontrara la respuesta por sí misma.

</p>

`,

botones:[

{
texto:"Continuar",
siguiente:2
}

]

},

{

titulo:"📖 ¿Quién fue Jenofonte?",

emoji:"📖",

texto:`

<p>

Jenofonte fue militar, historiador y discípulo de Sócrates.

Escribió un libro llamado

<b>Recuerdos de Sócrates</b>

donde reunió varios diálogos para mostrar cómo enseñaba su maestro.

Gracias a él conocemos esta conversación con Aristodemo.

</p>

`,

botones:[

{
texto:"Seguir",
siguiente:3
}

]

},

{

titulo:"🤔 Aristodemo",

emoji:"🤔",

texto:`

<p>

Aristodemo dudaba de la existencia de los dioses.

En lugar de discutir con él, Sócrates comenzó a hacer preguntas.

Su objetivo no era obligarlo a creer.

Quería que reflexionara por sí mismo.

</p>

`,

botones:[

{
texto:"Continuar",
siguiente:4
}

]

},

{

titulo:"⌚ El reloj",

emoji:"⌚",

texto:`

<p>

Imaginá que encontrás un reloj en el suelo.

Tiene agujas.

Tiene engranajes.

Todas sus piezas funcionan perfectamente.

</p>

<p>

¿Qué pensarías?

</p>

`,

botones:[

{
texto:"Se hizo solo",
siguiente:5
},

{
texto:"Alguien lo fabricó",
siguiente:5
}

]

},

{

titulo:"⌚ La reflexión",

emoji:"⌚",

texto:`

<p>

La mayoría respondería que alguien fabricó ese reloj.

Entonces Sócrates hace otra pregunta.

Si un objeto pequeño parece haber sido diseñado...

¿qué pasa con algo muchísimo más complejo?

</p>

`,

botones:[

{
texto:"Descubrir",
siguiente:6
}

]

},

{

titulo:"👁️ El ojo humano",

emoji:"👁️",

texto:`

<p>

Sócrates continúa con otro ejemplo.

Observa el ojo humano.

Tiene párpados que lo protegen.

Produce lágrimas para mantenerlo limpio.

Sus partes trabajan juntas para permitirnos ver.

</p>

<p>

Entonces pregunta:

</p>

<h3>

Si un reloj parece haber sido diseñado...

¿qué ocurre con un órgano mucho más complejo como el ojo?

</h3>

`,

botones:[

{
texto:"Continuar",
siguiente:7
}

]

},

{

titulo:"🧠 La inteligencia",

emoji:"🧠",

texto:`

<p>

Sócrates hace una nueva pregunta.

</p>

<p>

¿Podés ver tu inteligencia?

</p>

<p>

No.

Sin embargo, sabés que existe porque razonás, aprendés y tomás decisiones.

Con este ejemplo intenta mostrar que no todo lo que existe puede verse con los ojos.

</p>

`,

botones:[

{
texto:"Seguir",
siguiente:8
}

]

},

{

titulo:"🌍 El orden del universo",

emoji:"🌍",

texto:`

<p>

Sócrates invita a observar la naturaleza.

</p>

<ul>

<li>☀️ El Sol da luz y calor.</li>

<li>🌧️ La lluvia ayuda a crecer a las plantas.</li>

<li>🌱 La naturaleza sigue ciclos.</li>

<li>🧍 El cuerpo humano funciona de manera organizada.</li>

</ul>

<p>

Para Sócrates, ese orden hacía pensar que podía existir una inteligencia detrás del universo.

</p>

`,

botones:[

{
texto:"Continuar",
siguiente:9
}

]

},

{

titulo:"💡 ¿Sabías que...?",

emoji:"💡",

texto:`

<p>

El razonamiento utilizado por Sócrates en este diálogo es conocido actualmente como

<b>Argumento del Diseño</b>

o

<b>Argumento Teleológico</b>.

</p>

<p>

Actualmente sigue siendo un tema de debate entre filósofos y científicos.

Algunos están de acuerdo con esta idea y otros creen que la naturaleza puede explicarse de otra manera.

</p>

`,

botones:[

{
texto:"Seguir",
siguiente:10
}

]

},

{

titulo:"🏛️ Reflexión final",

emoji:"🏛️",

texto:`

<p>

Lo más importante del diálogo no es demostrar quién tiene razón.

Lo importante es la forma en que Sócrates enseña.

</p>

<p>

No impone sus ideas.

Hace preguntas.

Escucha.

Invita a reflexionar.

Ese método sigue siendo uno de los mayores aportes de Sócrates a la filosofía.

</p>

`,

botones:[

{
texto:"Ir al cuestionario",
siguiente:11
}

]

},

{

titulo:"📝 Mini cuestionario",

emoji:"📝",

texto:`

<h2>Pregunta 1</h2>

<p>

¿Cómo enseñaba Sócrates?

</p>

`,

botones:[

{
texto:"A) Dando respuestas",
siguiente:12
},

{
texto:"B) Haciendo preguntas",
siguiente:13
},

{
texto:"C) Escribiendo libros",
siguiente:12
}

]

},

{

titulo:"❌ Incorrecto",

emoji:"❌",

texto:`

<h2>No era esa respuesta.</h2>

<p>

Sócrates no enseñaba dando respuestas ni escribiendo libros.

Su método consistía en hacer preguntas para que cada persona llegara a sus propias conclusiones.

</p>

`,

botones:[

{
texto:"Siguiente pregunta",
siguiente:14
}

]

},

{

titulo:"✅ ¡Correcto!",

emoji:"✅",

texto:`

<h2>¡Muy bien!</h2>

<p>

Correcto.

Sócrates enseñaba mediante preguntas.

Ese método hoy se conoce como <b>método socrático</b>.

</p>

`,

botones:[

{
texto:"Siguiente pregunta",
siguiente:14
}

]

},

{

titulo:"👁️ Pregunta 2",

emoji:"👁️",

texto:`

<h2>Pregunta 2</h2>

<p>

¿Con qué comparó Sócrates el ojo humano?

</p>

`,

botones:[

{
texto:"Con un reloj",
siguiente:15
},

{
texto:"Con una montaña",
siguiente:16
},

{
texto:"Con un río",
siguiente:16
}

]

},

{

titulo:"🏆 ¡Correcto!",

emoji:"🏆",

texto:`

<h2>¡Excelente!</h2>

<p>

Exactamente.

Sócrates utilizó el ejemplo del reloj para comparar su diseño con la complejidad del ojo humano e invitar a Aristodemo a reflexionar.

</p>

`,

botones:[

{
texto:"Finalizar",
siguiente:17
}

]

},

{

titulo:"📖 Explicación",

emoji:"📖",

texto:`

<h2>Respuesta correcta</h2>

<p>

La respuesta correcta era:

<b>Con un reloj.</b>

Ese ejemplo le servía para desarrollar su razonamiento sobre el orden y el diseño.

</p>

`,

botones:[

{
texto:"Finalizar",
siguiente:17
}

]

},

{

titulo:"🎉 ¡Terminaste!",

emoji:"🎉",

texto:`

<h2>¡Felicitaciones!</h2>

<p>

Acabás de recorrer uno de los diálogos más conocidos de <b>Jenofonte</b> sobre <b>Sócrates</b>.

</p>

<p>

Esperamos que esta experiencia haya despertado tu interés por la filosofía.

</p>

<p>

<b>

"La filosofía no consiste en memorizar respuestas, sino en aprender a hacer mejores preguntas."

</b>

</p>

`,

botones:[

{
texto:"🔄 Volver a empezar",
siguiente:0
}

]

}

];

// =======================================
// FUNCIONES
// =======================================

function mostrarEscena(indice){

    const escena = escenas[indice];

    progressBar.style.width=((indice+1)/escenas.length)*100+"%";

    document.title=escena.titulo;

    chat.innerHTML=`

<div class="chat-contenedor">

<div class="avatar">

${escena.emoji}

</div>

<div class="mensaje" id="mensaje">

<h3>⌛ Sócrates está escribiendo...</h3>

</div>

</div>

`;

    buttons.innerHTML="";

    setTimeout(()=>{

        document.getElementById("mensaje").innerHTML=`

<h2>${escena.titulo}</h2>

${escena.texto}

`;

    },800);

    escena.botones.forEach(boton=>{

        const btn=document.createElement("button");

        btn.className="boton";

        btn.textContent=boton.texto;

        btn.onclick=()=>{

            sonido.currentTime=0;
            sonido.play().catch(()=>{});

            mostrarEscena(boton.siguiente);

        };

        buttons.appendChild(btn);

    });

}

mostrarEscena(0);