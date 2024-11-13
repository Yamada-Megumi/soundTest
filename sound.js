const st = document.querySelector('#st');
const st2 = document.querySelector('#st2');
const st3 = document.querySelector('#st3');
const audioElement = new Audio("./media/sound.mp3");

st.addEventListener('click', () => {
    // audioElement.currentTime = 0;
    audioElement.play();
});

st2.addEventListener('click', () => {
    audioElement.pause();
    // audioElement.currentTime = 0;
});

st3.addEventListener('click', () => {
    audioElement.pause();
    audioElement.currentTime = 0;
});



