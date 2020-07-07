// Kung Fu Panda Slideshow / Gallery

let imgPaths = ['po.png', 'crane.png', 'mantis.png', 'monkey.png', 'tigress.png', 'viper.png'];
let index = 0;

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', previousSlide);
document.getElementById('random').addEventListener('click', randomSlide);

function nextSlide() {
    index++;
    if (index == imgPaths.length) {
        index = 0;
    }
    document.getElementById('characterImg').src = 'images/' + imgPaths[index];
}

function previousSlide() {
    index--;
    if (index == -1) {
        index = imgPaths.length - 1;
    }
    document.getElementById('characterImg').src = 'images/' + imgPaths[index];
}

function randomSlide() {
    index = randomInt(0, imgPaths.length);
    document.getElementById('characterImg').src = 'images/' + imgPaths[index];
}