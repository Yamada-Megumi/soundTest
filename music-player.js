// 音楽データのオブジェクト配列
const musicData = [
  {
    title: "音楽1",
    src: "./media/sound.mp3",
    audioElement: null
  },
  {
    title: "音楽2",
    src: "./media/sound2.mp3",
    audioElement: null
  }
];

// 音楽再生用のメソッド
function playMusic(index) {
  // 同じ楽曲が再生中の場合はスキップ
  if (musicData[index].audioElement && !musicData[index].audioElement.paused) return;

  // 他の楽曲を停止
  musicData.forEach((music, i) => {
    if (i !== index && music.audioElement) {
      music.audioElement.pause();
      music.audioElement.currentTime = 0;
    }
  });

  // 選択された楽曲を再生
  if (!musicData[index].audioElement) {
    musicData[index].audioElement = new Audio(musicData[index].src);
  }
  musicData[index].audioElement.play();
}

// 一時停止用のメソッド
function pauseMusic(index) {
  if (musicData[index].audioElement) {
    musicData[index].audioElement.pause();
  }
}

// 停止用のメソッド
function stopMusic(index) {
  if (musicData[index].audioElement) {
    musicData[index].audioElement.pause();
    musicData[index].audioElement.currentTime = 0;
  }
}

// ボタンにイベントリスナーを設定
document.querySelectorAll('.play-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => playMusic(index));
});

document.querySelectorAll('.pause-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => pauseMusic(index));
});

document.querySelectorAll('.stop-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => stopMusic(index));
});