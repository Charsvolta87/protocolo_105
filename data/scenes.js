const scenes = {

    inicio: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/inicio.png",
        texto: `Año 2478.

En alguna parte del extenso universo la humanidad se encuentra a salvo, lejos de lo que alguna vez llamaron Tierra.`,
        opciones: [
            {
                texto: "Continuar",
                siguiente: "estacion"
            }
        ]
    },

    estacion: {
        titulo: "Introducción",
        imagen: "imagenes/prologo/estacion.png",
        texto: `En esta pequeña estación espacial los restos sobrevivientes de la raza humana intenta seguir con vida.

Todo parece normal.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "inicio"
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
        texto: `Hasta que una alarma rompe el silencio.

Una señal desconocida acaba de ser detectada.`,
        opciones: [
            {
                texto: "Atrás",
                siguiente: "estacion"
            },
            {
                texto: "Comenzar",
                siguiente: "capitulo1"
            }
        ]
    },

    capitulo1: {
        titulo: "Buen día",
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
