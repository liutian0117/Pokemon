const eventBus = [
    {
        name: '扫雷专家，移除所有退坑玩家',
        probability: 0.1,
        afterHook: () => {
            boomNumbers.forEach(num => {
                const card = document.getElementById(`card${num}`);
                removeCard(card);
            })
        }
    },
    {
        name: '随机移除一个已中奖名单',
        probability: 0.1,
        beforeHook: () => {
            const randomIndex = Math.floor(Math.random() * flippedCards.length);
            currentEventDataCache.triggeredCard = flippedCards[randomIndex];
            eventDescDiv.innerHTML = `移除中奖玩家： 【${currentEventDataCache.triggeredCard.name}】`;
        },
        afterHook: () => {
            if(!currentEventDataCache.triggeredCard){
                return
            }
            const card = document.getElementById(`card${currentEventDataCache.triggeredCard.index}`);
            removeCard(card);
        },
    },{
        name: '灭霸的响指，随机移除一半的玩家',
        probability: 0.1,
        afterHook: () => {
            const unFlippedCards = shuffledCandidates.filter(candidate => !flippedCards.includes(candidate));
            const allRemoveCards = shuffleArray(unFlippedCards);
            const halfSize = Math.ceil(allRemoveCards.length / 2);
            for (let i = 0; i < halfSize; i++) {
                const card = document.getElementById(`card${allRemoveCards[i].index}`);
                removeCard(card);
            }
        },
    },{
        name: '更改为选中者之后的一名玩家',
        probability: 0.1,
        beforeHook: () => {
            const old = document.getElementById(`card${currentCandidate.index}`);
            const nextCard = old.nextElementSibling;
            if(!nextCard){
                return;
            }
            const nextCandidate = getCandidate(nextCard);
            if(nextCard.getAttribute("removed") === 'true'){
                eventDescDiv.innerHTML = `后面的玩家【${nextCandidate.name}】已经被移除了`;
                return;
            }
            eventDescDiv.innerHTML = `从【${currentCandidate.name}】改为【${nextCandidate.name}】`;
            currentEventDataCache.oldCard = old;
            currentEventDataCache.newCard = nextCard;
        },
        afterHook: () => {
            if(!currentEventDataCache.oldCard || !currentEventDataCache.newCard){
                return;
            }
            removeCard(currentEventDataCache.oldCard)
            currentEventDataCache.newCard.click();
        },
    }, {
        name: '中奖同时，移除当前位置前后的玩家',
        probability: 0.1,
        beforeHook: () => {
            const card = getCardElement(currentCandidate.index);
            const preCard = card.previousElementSibling;
            const nextCard = card.nextElementSibling;

            const preDesc = preCard ? `【${getCandidate(preCard).name}】` : '';
            const nextDesc = nextCard ? `【${getCandidate(nextCard).name}】` : '';
            eventDescDiv.innerHTML = `移除玩家：${preDesc}${nextDesc}`;
            currentEventDataCache.preCard = preCard;
            currentEventDataCache.nextCard = nextCard;
        },
        afterHook: () => {
            removeCard(currentEventDataCache.preCard)
            removeCard(currentEventDataCache.nextCard)
        },
    }
];

const removeCard = (cardElement) => {
    if(!cardElement){
        return;
    }
    if(cardElement.classList.contains('flipped')){
        cardElement.click();
    }
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = 'initial';
    card.setAttribute("id", cardElement.getAttribute("id"));
    card.setAttribute("removed", "true")

    container.replaceChild(card, cardElement);
}

let accumulatedProbability = 0;
let probabilities = [];
const initEvent = () => {
    probabilities = eventBus.map(item => {
        accumulatedProbability += item.probability;
        return accumulatedProbability;
    });
}
initEvent();

const getRandomEvent = () => {
    const randomValue = Math.random();
    for (let i = 0; i < eventBus.length; i++) {
        if (randomValue < probabilities[i]) {
            return eventBus[i];
        }
    }
    return null;
}

let currentEvent;
let currentCandidate;
let currentEventDataCache = {};
let isOnEventGoing = false;
const triggerEvent = () => {
    currentEvent = getRandomEvent();
    if(!currentEvent){
        return;
    }
    isOnEventGoing = true;
    showEventModal();
}