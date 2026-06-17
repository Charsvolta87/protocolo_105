const scenes = {

    inicio: {
        texto: `Año 2478.

En alguna parte del extenso universo la humanidad se encuentra a salvo, lejos de lo que alguna vez llamaron Tierra.
`,

        opciones: [
            {
                texto: "Continuar",
                siguiente: "estacion"
            }
        ]
    },

    estacion: {
        texto: `En esta pequeña estación espacial los restos sobrevivientes de la raza humana intenta seguir con vida.
Todo parece normal.`,

        opciones: [
            {
                texto: "Continuar",
                siguiente: "senal"
            }
        ]
    },

    senal: {
        texto: `Hasta que una alarma rompe el silencio.

Una señal desconocida acaba de ser detectada.`,

        opciones: []
    }

};
