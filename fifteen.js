var blockArr = [];
var newArray = [];
var emptyBlock;
var isRunning = false;

$(document).ready(function () {

    $('#shufflebutton').click(function (e) {
        fnShuffle();
    });

    $('#puzzlearea div').click(function (e) {
        fnMove(e);
    });

    init();
});


function init() {
    var puzzleArea = $('#puzzlearea');
    puzzleArea.children('div').each(function (idx, divx) {
        // calculate x and y for this piece
        let x = ((idx % 4) * 100);
        let y = (Math.floor(idx / 4) * 100);

        // set basic style and background
        divx.className = "puzzlepiece";
        $(divx).css('left', x + 'px');
        $(divx).css('top', y + 'px');
        divx.style.backgroundImage = 'url("background.jpg")';
        divx.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        blockArr[idx] = divx;

    });
    var divs = puzzleArea.getElementsByTagName("div");
}

function fnShuffle() {
    const array = [];
    newPositionArray = [];
    for (let i = 0; i <= 15; i++) {
        array.push(i);
    }

    shuffle(array);
    emptyBlock = array.pop();
    for (let i = 0; i < 15; i++) {
        const newPosition = array[i];
        newPositionArray[i] = newPosition;
        const x = ((newPosition % 4) * 100);
        const y = (Math.floor(newPosition / 4) * 100);
        $(blockArr[i]).css('left', x + 'px');
        $(blockArr[i]).css('top', y + 'px');
    }
    isRunning = true;


}


function shuffle(array) {
    for (let i = 0; i < 10; i++) {
        let random1 = Math.floor(Math.random() * array.length);
        let random2 = Math.floor(Math.random() * array.length);
        let tmp = array[random1];
        array[random1] = array[random2];
        array[random2] = tmp;
    }
}

function fnMove(e) {
    if (isRunning) {
        const element = e.currentTarget;
        const text = element.innerText;
        const currentBlock = parseInt(text) - 1;
        const currentPosition = newPositionArray[currentBlock];

        if ((currentPosition % 4 !== 0 && emptyBlock === currentPosition - 1)
            || ((currentPosition + 1) % 4 !== 0 && currentPosition + 1 === emptyBlock)
            || currentPosition - 4 === emptyBlock
            || currentPosition + 4 === emptyBlock) {
            // Check move condition
            updatePosition(element);
            newPositionArray[currentBlock] = emptyBlock;
            emptyBlock = currentPosition;
            // Check end condition
            let isEnd = true;
            for (let i = 0; i < newPositionArray.length; i++) {
                if (newPositionArray[i] !== i) {
                    isEnd = false;
                    break;
                }
            }
            if (isEnd) {
                isRunning = false;
                alert('Congratulation!!!');
            }
        }
    }
}

function updatePosition(element) {
    const x = ((emptyBlock % 4) * 100);
    const y = (Math.floor(emptyBlock / 4) * 100);
    $(element).css('left', `${x}px`);
    $(element).css('top', `${y}px`);
}



