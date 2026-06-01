const joinButton = document.getElementById("join-button");
const joinMessage = document.getElementById("join-message");
const playerImages = document.querySelectorAll(".player-card img");

function showMessage() {
    joinMessage.textContent = "Welcome to MI Paltan!";
}

function showImageFallback(image) {
    const fallback = document.createElement("div");
    const name = image.alt || "MI Player";

    fallback.className = "image-fallback";
    fallback.textContent = name
        .split(" ")
        .map(function (word) {
            return word.charAt(0);
        })
        .join("");

    image.replaceWith(fallback);
}

if (joinButton && joinMessage) {
    joinButton.addEventListener("click", showMessage);
}

playerImages.forEach(function (image) {
    image.addEventListener("error", function () {
        showImageFallback(image);
    });
});
