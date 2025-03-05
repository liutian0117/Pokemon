let colors, shuffledCandidates;
const resetState = () => {
    colors = generateUniqueColors(candidateArrCopy.length);
    shuffledCandidates = shuffleArray(candidateArrCopy);
};

document.getElementById('resetButton').addEventListener('click', () => {
    initPage();
});

generateCard = (candidate, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', `card${candidate.index}`)

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const front = document.createElement('span');
    front.classList.add('front');
    front.style.backgroundColor = colors[index];

    const back = document.createElement('span');
    back.classList.add('back');

    const backIndex = document.createElement('div');
    backIndex.textContent = candidate.index;
    back.appendChild(backIndex);

    const backName = document.createElement('div');
    backName.classList.add('nickname');
    backName.textContent = candidate.name;
    back.appendChild(backName);


    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    return card;
}

/**
 * 随机打乱数组
 * @param array
 * @returns {*}
 */
const shuffleArray = (array) => {
    let newArray = array.slice();
    let currentIndex = newArray.length,  randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
}

/**
 * 生成随机颜色
 * @param num
 * @returns {any[]}
 */
const generateUniqueColors = (num) => {
    const colors = new Set();
    while (colors.size < num) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
        colors.add(color);
    }
    return Array.from(colors);
};

const getCardElement = (candidateIndex) => {
    return document.getElementById(`card${candidateIndex}`);
}

const getCandidate = (element) => {
    const candidateIndex = element.getAttribute('id').replace('card', '');
    return shuffledCandidates.find(candidate => candidate.index === parseInt(candidateIndex));
}