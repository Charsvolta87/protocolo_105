let currentScene = "inicio";

let playerName = "";

const startBtn = document.getElementById("start-btn");

const nameScreen = document.getElementById("name-screen");
const gameScreen = document.getElementById("game-screen");

const storyBox = document.getElementById("story-box");
const choicesDiv = document.getElementById("choices");

startBtn.addEventListener("click", startGame);

const sceneImage =
    document.getElementById("scene-image");

function startGame() {

    playerName =
        document.getElementById("player-name").value;

    if (playerName.trim() === "") {
        alert("Ingrese un nombre");
        return;
    }

    nameScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    showScene();
}

function showScene() {

    const scene = scenes[currentScene];
    sceneImage.src = scene.imagen;

    if (!scene) {

        storyBox.innerHTML = `
            Error: no existe la escena "${currentScene}"
        `;

        return;
    }

    let text = scene.texto;

    text = text.replace(
        "{nombre}",
        playerName
    );

    storyBox.innerText = text;

    choicesDiv.innerHTML = "";

    if (scene.opciones.length === 0) {

        const endMessage =
            document.createElement("p");

        endMessage.innerHTML =
            "<br><strong>Fin de la demo.</strong>";

        choicesDiv.appendChild(endMessage);

        return;
    }

    scene.opciones.forEach(opcion => {

        const button =
            document.createElement("button");

        button.innerText =
            opcion.texto;

        button.addEventListener("click", () => {

            currentScene =
                opcion.siguiente;

            showScene();

        });

        choicesDiv.appendChild(button);

    });

}