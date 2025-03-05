const getEnabledVideo = () => {
    const enableVideoBtn = document.getElementById('enableVideo');
    const classList = enableVideoBtn.classList;
    return classList.contains('enabled-video');
}

const playWinnerVideo = () => {
    const video = document.getElementById('winnerVideo');
    const skipButton = document.getElementById('skipButton');

    video.style.display = 'block';
    skipButton.style.display = 'block';

    video.play();
    video.addEventListener('ended', () => {
        video.style.display = 'none';
        skipButton.style.display = 'none';

        showWinnerModal(currentClickCard)
    });
};

document.getElementById('enableVideo').addEventListener('click', function () {
    const enableVideoBtn = document.getElementById('enableVideo');
    const classList = enableVideoBtn.classList;
    const enabled = classList.contains('enabled-video');
    if(enabled){
        classList.remove('enabled-video');
        classList.add('disabled-video');
    }else {
        classList.remove('disabled-video');
        classList.add('enabled-video');
    }
})

document.getElementById('skipButton').addEventListener('click', function() {
    const video = document.getElementById('winnerVideo');
    const skipButton = document.getElementById('skipButton');

    // 隐藏视频并暂停播放
    video.pause();
    video.currentTime = 0; // 将当前时间设置为0
    video.load(); // 重置视频到初始状态
    video.style.display = 'none';
    skipButton.style.display = 'none'; // 隐藏关闭按钮

    showWinnerModal(currentClickCard);
});