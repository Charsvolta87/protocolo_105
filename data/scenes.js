const scenes = {

    intro_01: {

    titulo: "Prólogo",

    imagen: "imagenes/prologo/inicio.png",

    texto: `Nunca vi la Tierra.

Nadie de mi generación la vio.

La conocemos por archivos incompletos...`,

    opciones: [
        {
            texto: "Continuar",
            siguiente: "intro_02"
        }
    ]
},

        //////////////////////
        ///* INTRODUCCION *///
        //////////////////////

    inicio: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/inicio.png",
        texto: `Año 174 D.H.
(Después de la Huida)
Nunca vi la Tierra.
Nadie de mi generación la vio.
La conocemos por archivos incompletos, grabaciones dañadas y relatos transmitidos durante generaciones
como si fueran leyendas.`,
        opciones: [
            {
                texto: "Continuar",
                siguiente: "inicio2"
            }
        ]
    },

    inicio2: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/inicio.png",
        texto: `Océanos, bosques, lluvia, animales, ciudades que se extendían hasta donde alcanzaba la vista.
A veces nos preguntabamos si realmente existió.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "inicio"
            },
            {
                texto: "Continuar",
                siguiente: "estacion"
            }
        ]
    },

    estacion: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/estacion.png",
        texto: `La humanidad vive dispersa entre estaciones espaciales y colonias construidas en mundos lejanos. Pequeños refugios suspendidos en la oscuridad.
La nuestra se llama Nueva Esperanza.
Un nombre optimista para un lugar que apenas sobrevive.
La estación orbita una estrella sin nombre en una región olvidada del espacio conocido. Estamos tan lejos de la Tierra que ni siquiera aparece en nuestros mapas.
Y sin embargo, todavía pensamos en ella.
Todavía soñamos con ella.

Todavía la extrañamos.
Aunque nunca la hayamos visto.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "inicio2"
            },
            {
                texto: "Siguiente",
                siguiente: "estacion2"
            }
        ]
    },

     estacion2: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/estacion.png",
        texto: `Yo era operador de comunicaciones.
Un trabajo aburrido.
Escuchar ruido, analizar transmisiones,
revisar sistemas, completar informes,
volver a empezar.
Ciclo tras ciclo.

Nada cambiaba jamás.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "estacion"
            },
            {
                texto: "Siguiente",
                siguiente: "senal"
            }
        ]
    },

    senal: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/senal.png",
        texto: `Hasta aquella alarma, ese sonido que nunca antes pensamo escuchar, sonó.

No sabiamos de que se trataba, pero sí sabiamos que desde ese momento
ya nada sería igual`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "estacion"
            },
            {
                texto: "Comenzar",
                siguiente: "intro_final"
            }
        ]
    },
    intro_final: {

    titulo: "Identificación",

    imagen: "imagenes/prologo/placeholder.png",

    texto: `Antes de acceder a los registros de comunicaciones debe identificarse.`,

    opciones: [
    {
        texto: "Identificarme",
        siguiente: "crear_personaje"
    }
]
},





        ////////////////////
        ///* Capitulo 1 *///
        ////////////////////


    capitulo1: {
        titulo: "Inicio",
        imagen: "imagenes/placeholder.png",
        texto: `La mañana del día 75 del año 178 todo parecía normal, hasta la hora 15:45, vino a buscarme Daniel para subir al comedor a desayunar. La noche anterior me quedé con Javi hasta tarde divagando acerca de cómo será llegar a Galiet.`,
        opciones: [
            {
                texto: "Aceptar",
                siguiente: "desayuno"
            },
            {
                texto: "No aceptar",
                siguiente: "camarote"
            }
        ]
    }

};
