window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll(".sound-buttons div");

    board.forEach ((box, index) => {
        box.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();


        });
    });
});

