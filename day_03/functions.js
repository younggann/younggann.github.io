var currentColor = "white";

var boxes = ["one", "two", "three"];

$(document).ready(function() {
    $("#red").click(function() {
        currentColor = "red";
        console.log("The current color is " + currentColor);
    });

    $("#blue").click(function() {
        currentColor = "blue";
        console.log("The current color is " + currentColor);
    });

    $("#yellow").click(function() {
        currentColor = "yellow";
        console.log("The current color is " + currentColor);
    });

    for (var i = 0; i < boxes.length; i++) {
        for (var k = 0; k < boxes.length; k++) {
            var currentBox = boxes[i] + boxes[k];
            console.log(currentBox);
            $("#" + currentBox).click(function() {
                $(this).css("background-color", currentColor);
            })

        }
    }

    $("#clear").click(function() {
        $(".box").each(function(i, obj) {
            $(this).css("background-color", "white");
        });
        console.log("clicked clear");
    })
});
