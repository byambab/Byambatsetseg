$(document).ready(function () {
    let won = 0;
    let startGame = 0;
    $("#maze .boundary").mouseover(red);
    $("#end").mouseover(end);
    $("#start").click(start);


    function red() {
        if (startGame) {
            if (won) return;

            $("div.boundary").addClass("youlose");
            $("#status").html("You lose");
            won = 0;
        }

    }


    function end() {
        if (startGame) {
            if (won) {
                $("div.boundary").addClass("youlose");
                $("#status").html("You lose");
                won == 0;
                startGame = 0;
            }
            else {
                $("#status").html("You Win");
                won == 1;
                startGame = 0;
            }

        }
    }

    function start() {
        $("div.boundary").removeClass("youlose");
        $("#status").html("Click the \"S\" to begin.");
        won == 0;
        startGame = 1;
    }


});