let currentScene = "inicio";

/* ========================= */
/*        PERSONAJE          */
/* ========================= */

let playerName = "";

const player = {

    nombre: "",

    habilidades: {

        liderazgo: 0,

        tecnica: 0,

        exploracion: 0

    },

    relaciones: {

        valentina: 0,

        cristian: 0,

        ortega: 0,

        daniel: 0,

        javi: 0

    },

    decisiones: []

};

/* ========================= */
/*        ELEMENTOS          */
/* ========================= */

const coverScreen =
    document.getElementById("cover-screen");

const coverBtn =
    document.getElementById("cover-btn");

const nameScreen =
    document.getElementById("name-screen");

const gameScreen =
    document.getElementById("game-screen");

const startBtn =
    document.getElementById("start-btn");

const sceneTitle =
    document.getElementById("scene-title");

const sceneImage =
    document.getElementById("scene-image");

const storyBox =
    document.getElementById("story-box");

const choicesDiv =
    document.getElementById("choices");

/* ========================= */
/*          EVENTOS          */
/* ========================= */

coverBtn.addEventListener(
    "click",
    startIntro
);

startBtn.addEventListener(
    "click",
    startGame
);

/* ========================= */
/*          PORTADA          */
/* ========================= */

function startIntro(){

    coverScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    currentScene = "inicio";

    showScene();
}

/* ========================= */
/*       CREAR PERSONAJE     */
/* ========================= */

function startGame(){

    playerName =
        document
            .getElementById("player-name")
            .value;

    if(playerName.trim() === ""){

        alert("Ingrese un nombre");

        return;
    }

    nameScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    currentScene = "capitulo1";

    showScene();
}

/* ========================= */
/*       MOSTRAR ESCENA      */
/* ========================= */

function showScene(){

    const scene =
        scenes[currentScene];

    if(!scene){

        storyBox.innerHTML = `
            Error:
            no existe la escena
            "${currentScene}"
        `;

        return;
    }

    sceneTitle.innerHTML =
        scene.titulo;

    sceneImage.src =
        scene.imagen;

    let text =
        scene.texto;

    text = text.replace(
        "{nombre}",
        playerName
    );

    storyBox.innerText =
        text;

    choicesDiv.innerHTML = "";

    if(scene.opciones.length === 0){

        const endMessage =
            document.createElement("p");

        endMessage.innerHTML =
            "<br><strong>Fin de la demo.</strong>";

        choicesDiv.appendChild(
            endMessage
        );

        return;
    }

    scene.opciones.forEach(opcion => {

        const button =
            document.createElement("button");

        button.innerText =
            opcion.texto;

        button.addEventListener(
            "click",
            () => {

                if(
                    opcion.siguiente ===
                    "crear_personaje"
                ){

                    gameScreen
                        .classList
                        .add("hidden");

                    nameScreen
                        .classList
                        .remove("hidden");

                    return;
                }

                currentScene =
                    opcion.siguiente;

                showScene();
            }
        );

        choicesDiv.appendChild(
            button
        );

    });

}