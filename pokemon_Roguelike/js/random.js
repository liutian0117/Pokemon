let randomTimerId;
let randomCardElement;
let randomCandidate;

// 随机抽奖
document.getElementById('randomButton').addEventListener('click', () => {
    if(randomTimerId){
        return;
    }
    const unFlippedCards = shuffledCandidates.filter(candidate => !flippedCards.includes(candidate));
    if(unFlippedCards.length === 0){
        return;
    }
    randomTimerId = setInterval(() => {
        if(randomCardElement){
            randomCardElement.style.removeProperty('background-color');
        }
        const randomIndex = Math.floor(Math.random() * unFlippedCards.length);
        randomCandidate = unFlippedCards[randomIndex];
        randomCardElement = document.getElementById(`card${randomCandidate.index}`);
        randomCardElement.style.backgroundColor = 'white';
    }, 200);
})

document.getElementById('finishRandomButton').addEventListener('click', () => {
    if(randomTimerId){
        clearInterval(randomTimerId);
        randomTimerId = null;
    }
    if(randomCardElement){
        randomCardElement.click();
        randomCardElement.style.removeProperty('background-color');
        randomCardElement = null;
    }
    if(randomCandidate){
        setTimeout(() => {
            showWinnerModal(randomCandidate);
            randomCandidate = null;
        }, 300)
    }
})