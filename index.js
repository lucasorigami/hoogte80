var audio = document.getElementById('audio');
const playButton = document.getElementById('playbutton');
const playImage = playButton.querySelector('img');
const main = document.getElementById("main");
const headphones = document.getElementById("headphones");
const loading = document.getElementById("loading");
// console.log(preloadedImages);
// main.classList.add("animate");

// Preload images
const images = [
    "gifs/01.gif",
    "gifs/02.gif",
    "gifs/03.gif",
    "gifs/04.gif",
    "gifs/05.gif",
    "gifs/06.gif",
    "gifs/07.gif",
    "gifs/08.gif"
];

const preloadedImages = images.map(url => {
    const img = new Image();
    img.src = url;
    return img;
});


setTimeout(() => {
    loading.style.display = "none";
}, 13500);


playButton.addEventListener("click", onPlay);


const loadingtext = document.getElementById('loadingtext');
const dots = Array.from({ length: 4 }, () => {
  const dot = document.createElement('span');
  dot.textContent = '.';
  dot.style.opacity = '0'; // Initial opacity for all dots
  loadingtext.appendChild(dot);
  return dot;
});

let currentDotIndex = -1; // Start with -1 to reset all dots initially

const changeDotOpacity = () => {
  if (currentDotIndex === -1) {
    // Reset all dots to opacity 0 before starting the cycle
    dots.forEach(dot => dot.style.opacity = '0');
  }

  dots.forEach((dot, index) => {
    if (index < currentDotIndex) {
      dot.style.opacity = '1'; // Keep previous dots at opacity 1
    } else {
      dot.style.opacity = '0'; // Reset remaining dots to opacity 0
    }
  });

  currentDotIndex = (currentDotIndex + 1) % (dots.length + 1);
};

setInterval(changeDotOpacity, 300);



function onPlay() {
    playButton.removeEventListener('click', onplay);
    main.classList.add("animateback");
    main.classList.remove("animate")
    headphones.style.opacity = "0";
    loading.style.display = "none";

    audio.play();
    // main.style.opacity = 0;
    // main.classList.remove("animate");

    // setTimeout(() => {
    // }, 400); 

    // main.style.animation = "forwards 2s slideback;"
    setTimeout(() => {
        main.style.display = "none";

    }, 4000);

    setTimeout(() => {
        playImage.src = preloadedImages[0].src;
    }, 10000);

    setTimeout(() => {
        playImage.src = preloadedImages[1].src;
    }, 60000);


    setTimeout(() => {
        playImage.src = preloadedImages[2].src;
    }, 100000);
    setTimeout(() => {
        playImage.src = preloadedImages[3].src;
    }, 104000);

    setTimeout(() => {
        playImage.src = preloadedImages[4].src;
 
    }, 109000);
    setTimeout(() => {
        playImage.src = preloadedImages[5].src;

    }, 113000);

    setTimeout(() => {
        playImage.src = preloadedImages[6].src;
    }, 116000);

    setTimeout(() => {
        playImage.src = preloadedImages[7].src;

    }, 124000);
}


