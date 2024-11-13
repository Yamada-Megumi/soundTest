const audioElements = [
    new Audio('./media/sound.mp3'),
    new Audio('./media/sound2.mp3')
];

function playMusic(index) {
    // 他の音楽を停止
    audioElements.forEach((audio, i) => {
        if (i !== index) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
    // 選択した音楽を再生
    audioElements[index].play();
}

function pauseMusic() {
    // 再生中の音楽を一時停止
    audioElements.forEach((audio) => {
        if (!audio.paused) {
            audio.pause();
        }
    });
}

// ボタンにイベントリスナーを設定
document.getElementById('play-btn-1').addEventListener('click', () => playMusic(0));
document.getElementById('play-btn-2').addEventListener('click', () => playMusic(1));
document.getElementById('pause-btn').addEventListener('click', pauseMusic);