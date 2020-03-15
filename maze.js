$(document).ready(function () {
    let won = 0;
    let startGame = false;
    $("#maze .boundary").mouseover(red);
    $("#end").mouseover(end);
    $("#start").click(start);


    function red() {
        if (startGame) {
            if (won) return;

            $("div.boundary").addClass("youlose");
            $("#status").html("You lose. Click the \"S\" to begin.");
            won = 0;
            startGame=false;
        }

    }


    function end() {
        if (!startGame)
            return;
        console.log(startGame);
        if (won) {
            $("div.boundary").addClass("youlose");
            $("#status").html("You lose");
            won == 0;
        }
        else {
            $("#status").html("You Win");
            won == 1;
        }
        startGame = false;
    }

    function start() {
        $("div.boundary").removeClass("youlose");
        $("#status").html("Click the \"S\" to begin.");
        won == 0;
        startGame = true;
    }


});