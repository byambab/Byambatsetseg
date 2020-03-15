var blockArr = [];
var newArray = [];
var emptyBlock;
var isRunning = false;

$(document).ready(function () {

    $('#shufflebutton').click(function (e) {
        fnShuffle();
    });

    $('#puzzlearea div').click(function (e) {
        //fnMove();
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

function fnShuffle(){
    
}


