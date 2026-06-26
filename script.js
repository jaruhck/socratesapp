// ==============================
// ¿PENSÁS COMO SÓCRATES?
// Basado en "Recuerdos de Sócrates"
// de Jenofonte
// ==============================

const chat = document.getElementById("chat");
const buttons = document.getElementById("buttons");
const progressBar = document.getElementById("progress-bar");

// Todas las pantallas de la aplicación
const escenas = [

{
titulo:"🏛 Bienvenido",

texto:`
<h2>¿Pensás como Sócrates?</h2>

<p>

Hace más de <b>2400 años</b>, un filósofo llamado
<b>Sócrates</b> enseñaba de una manera muy diferente.

No daba respuestas.

Hacía preguntas.

En esta experiencia recorrerás uno de los diálogos
escritos por <b>Jenofonte</b>.

Vos decidirás qué responder.

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

texto:`

<p>

Sócrates fue uno de los filósofos más importantes
de la Antigua Grecia.

Vivió en Atenas entre los siglos V y IV a.C.

Nunca escribió libros.

Todo lo que conocemos sobre él fue escrito por
sus discípulos, principalmente
<b>Platón</b> y <b>Jenofonte</b>.

</p>

<p>

Su forma de enseñar era especial.

No decía "esta es la respuesta correcta".

Prefería hacer preguntas para que las personas
llegaran solas a una conclusión.

A esta forma de enseñar hoy la conocemos como
<b>método socrático</b>.

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

texto:`

<p>

Jenofonte fue militar, historiador y discípulo
de Sócrates.

Escribió un libro llamado
<b>Recuerdos de Sócrates</b>.

En él reunió distintos diálogos para mostrar cómo
pensaba y enseñaba su maestro.

El diálogo que vas a recorrer pertenece justamente
a esa obra.

</p>

`,

botones:[
{
texto:"Continuar",
siguiente:3
}
]

},

{
titulo:"🤔 Aristodemo",

texto:`

<p>

En este diálogo aparece un hombre llamado
<b>Aristodemo</b>.

Él dudaba de la existencia de los dioses.

En lugar de discutir con él,
Sócrates decidió hacerle preguntas.

No quería obligarlo a creer.

Quería que reflexionara.

</p>

`,

botones:[
{
texto:"Seguir",
siguiente:4
}
]

},

{
titulo:"⌚ Primer desafío",

texto:`

<h3>Imaginá esta situación.</h3>

<p>

Vas caminando por la calle.

De repente encontrás un reloj.

Tiene agujas.

Tiene engranajes.

Todas sus piezas funcionan juntas.

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
titulo:"⌚ La respuesta de Sócrates",

texto:`

<p>

La mayoría de las personas respondería que
<b>alguien fabricó el reloj</b>.

¿Por qué?

Porque todas sus piezas trabajan juntas con un propósito.

Nadie suele pensar que apareció por casualidad.

Entonces Sócrates hace una nueva pregunta...

</p>

`,

botones:[
{
texto:"Continuar",
siguiente:6
}
]

},

{
titulo:"👁 El ojo humano",

texto:`

<h3>Ahora observemos algo mucho más complejo.</h3>

<p>

El ojo humano posee:

</p>

<ul>

<li>👁 Retina</li>

<li>💧 Lágrimas que lo protegen</li>

<li>👁 Párpados</li>

<li>🔍 Cristalino</li>

<li>⚡ Nervio óptico</li>

</ul>

<p>

Todas estas partes cumplen una función.

Eso lleva a Sócrates a preguntar:

</p>

<p>

<b>

¿Si un reloj parece tener un diseñador...

qué ocurre con el ojo humano?

</b>

</p>

`,

botones:[

{
texto:"Casualidad",
siguiente:7
},

{
texto:"Parece diseñado",
siguiente:7
}

]

},

{
titulo:"🧠 La inteligencia",

texto:`

<p>

Sócrates continúa con otro ejemplo.

</p>

<p>

¿Podés ver tu inteligencia?

</p>

<p>

No.

Sin embargo sabemos que existe por las decisiones
que tomamos, por lo que aprendemos y por nuestra
capacidad para razonar.

</p>

<p>

Entonces pregunta:

<b>

¿Por qué exigir ver a los dioses para creer en ellos?

</b>

</p>

`,

botones:[
{
texto:"Continuar",
siguiente:8
}
]

},

{
titulo:"🌍 El orden del universo",

texto:`

<p>

Sócrates también observa la naturaleza.

</p>

<ul>

<li>☀️ El Sol permite la vida.</li>

<li>🌧 La lluvia alimenta los cultivos.</li>

<li>🌱 Las plantas crecen.</li>

<li>🧍 El cuerpo humano funciona de manera organizada.</li>

</ul>

<p>

Para él, todo esto parecía mostrar un orden.

Y donde hay orden...

él pensaba que podía existir una inteligencia.

</p>

`,

botones:[
{
texto:"Seguir",
siguiente:9
}
]

},

{
titulo:"💡 ¿Sabías que...? ",

texto:`

<p>

El argumento utilizado por Sócrates en este diálogo
es conocido actualmente como

<b>Argumento del Diseño</b>
o
<b>Argumento Teleológico</b>.

</p>

<p>

Hoy sigue siendo debatido.

Hay filósofos que lo defienden y otros que creen
que la naturaleza puede explicarse de otra manera.

Por eso continúa siendo un tema muy interesante.

</p>

`,

botones:[
{
texto:"Última parte",
siguiente:10
}
]

},

{
titulo:"🏛 Reflexión final",

texto:`

<h2>¿Te convenció Sócrates?</h2>

<p>

Ahora ya conocés el razonamiento que Sócrates
presenta en <b>Recuerdos de Sócrates</b>,
escrito por Jenofonte.

Su objetivo no era demostrar científicamente
la existencia de los dioses.

Tampoco quería obligar a Aristodemo a creer.

Lo que buscaba era que pensara por sí mismo.

</p>

<p>

Ese sigue siendo uno de los objetivos más
importantes de la filosofía:

<b>aprender a cuestionar, reflexionar y argumentar.</b>

</p>

`,

botones:[

{
texto:"👍 Me hizo pensar",
siguiente:11
},

{
texto:"🤔 Todavía tengo dudas",
siguiente:11
},

{
texto:"👎 No me convenció",
siguiente:11
}

]

},

{
titulo:"🎉 ¡Terminaste!",

texto:`

<h2>Gracias por participar</h2>

<p>

Acabás de recorrer uno de los diálogos más famosos
de Jenofonte.

Esperamos que esta experiencia haya despertado tu
interés por la filosofía y por la manera en que
Sócrates enseñaba.

</p>

<p>

<b>

"La filosofía no consiste en memorizar respuestas,
sino en aprender a hacer mejores preguntas."

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

//------------------------------------------------
// FUNCIONES
//------------------------------------------------

function mostrarEscena(indice) {

    const escena = escenas[indice];

    // Barra de progreso
    const porcentaje = ((indice + 1) / escenas.length) * 100;
    progressBar.style.width = porcentaje + "%";

    // Título de la pestaña
    document.title = escena.titulo;

    // Mostrar contenido
    chat.innerHTML = `
        <div class="mensaje">
            <h2>${escena.titulo}</h2>
            ${escena.texto}
        </div>
    `;

    // Crear botones
    buttons.innerHTML = "";

    escena.botones.forEach(boton => {

        const btn = document.createElement("button");

        btn.className = "boton";

        btn.textContent = boton.texto;

        btn.onclick = () => {

            mostrarEscena(boton.siguiente);

        };

        buttons.appendChild(btn);

    });

}

// Iniciar aplicación
mostrarEscena(0);