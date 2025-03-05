// 全屏遮罩层
const overlay = document.getElementById('overlay');
// 结果模态框
const resultsModal = document.getElementById('resultsModal');
// 爆雷模态框
const boomModal = document.getElementById('boomModal');
const boomNumberDiv = document.getElementById('boomNumber');
const showBoom = (candidate) => {
    boomNumberDiv.innerHTML = `<p>你抽到了 <strong>${candidate.index} 号</strong> 退坑玩家【${candidate.name}】！</p>`;
    boomModal.style.display = 'block';
    overlay.style.display = 'block';
};
document.getElementById('boomCloseModal').addEventListener('click', () => {
    closeModal();
    initPage();
});

// 中奖模态框
const winnerModal = document.getElementById('winnerModal');
const winnerListDiv = document.getElementById('winnerList');
const showWinnerModal = (candidate) => {
    const winnerCardIndex = document.getElementById('winnerCardIndex');
    winnerCardIndex.textContent = candidate.index;
    const winnerCardName = document.getElementById('winnerCardName');
    winnerCardName.textContent = candidate.name;
    winnerModal.style.display = 'block';
    overlay.style.display = 'block';
};
winnerModal.addEventListener('click', function() {
    winnerModal.style.display = 'none';
    overlay.style.display = 'none';
})

const showWinners = () => {
    const groupedWinners = Array.from({ length: 5 }, () => []);

    flippedCards.forEach((candidate) => {
        const groupIndex = Math.floor((candidate.index - 1) / 20);
        if (groupIndex < groupedWinners.length) {
            groupedWinners[groupIndex].push(candidate);
        }
    });

    winnerListDiv.innerHTML = groupedWinners
        .map((group, index) => {
            if (group.length > 0) {
                const indexAndName = group.map(c => `${c.index}(${c.name})`).join(', ');
                return `<p><strong>${index * 20 + 1}-${(index + 1) * 20}:</strong> ${indexAndName}</p>`;
            }
            return '';
        })
        .join('');

    resultsModal.style.display = 'block';
    overlay.style.display = 'block';
};



const closeModal = () => {
    resultsModal.style.display = 'none';
    boomModal.style.display = 'none';
    overlay.style.display = 'none';
};


const eventModal = document.getElementById('eventModal');
const eventDescDiv = document.getElementById('eventDescDiv');
const showEventModal = () => {
    document.getElementById('eventNameTag').innerHTML = `触发事件：${currentEvent.name}! 【触发概率: ${currentEvent.probability}】`;

    const beforeHook = currentEvent.beforeHook;
    if (beforeHook) {
        beforeHook();
    }

    eventModal.style.display = 'block';
    overlay.style.display = 'block';
}

const closeEventModal = () => {
    eventModal.style.display = 'none';
    overlay.style.display = 'none';

    const afterHook = currentEvent.afterHook;
    if (afterHook) {
        afterHook();
    }
    eventDescDiv.innerHTML = '';
    currentEvent = null;
    currentCandidate = null;
    currentEventDataCache = {};
    isOnEventGoing = false;
}