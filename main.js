
function toggleCard() {
    const birthdayCard = document.getElementById('birthday-card');
    const currentOpacity = parseFloat(birthdayCard.style.opacity || 0);

    birthdayCard.style.opacity = currentOpacity === 0 ? '1' : '0';
    birthdayCard.style.transform = currentOpacity === 0 ? 'translateY(0)' : 'translateY(-20px)';
}

alert("bấm vào chú thỏ bắn pháo hoa để bật/tắt nhạc nhé!!! 🤡");
window.addEventListener('load', function () {
    const birthdayCard = document.getElementById('birthday-card');
    birthdayCard.style.opacity = '0';
    birthdayCard.style.transform = 'translateY(-20px)';
});

const cowSound = document.getElementById('cowSound');

function toggleCowSound() {
    if (cowSound.paused) {
        playSound();
    } else {
        pauseSound();
    }
}

setTimeout(function () {
    playSound();
}, 1000);

function playSound() {
    cowSound.play();
}

function pauseSound() {
    cowSound.pause();
}

cowSound.addEventListener('ended', function () {
    // Restart the music when it ends
    cowSound.currentTime = 0;
    cowSound.play();
});






