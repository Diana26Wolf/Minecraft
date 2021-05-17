var canvas = new fabric.Canvas("My_Canvas");
player_x = 10
player_y = 10
blockImgWidth = 30
blockImgHeight = 30
player_object = ""
blockImgObject = ""

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);
            player_object.set({
                top: player_y,
                left: player_x
            });
            canvas.add(player_object);
        }

    )
}

function new_img(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
            blockImgObject = Img;
            blockImgObject.scaleToWidth(blockImgWidth);
            blockImgObject.scaleToHeight(blockImgHeight);
            blockImgObject.set({
                top: player_y,
                left: player_x
            });
            canvas.add(blockImgObject);
        }

    )
}
window.addEventListener("keydown", my_KeyDown)

function my_KeyDown(e) {
    keyPressed = e.keyCode
    if (e.shiftKey == true && keyPressed == "80") {
        blockImgWidth = blockImgWidth + 10
        blockImgHeight = blockImgHeight + 10
        document.getElementById("cw").innerHTML = blockImgWidth
        document.getElementById("ch").innerHTML = blockImgHeight
        console.log("add")
    }
    if (e.shiftKey == true && keyPressed == "77") {
        blockImgWidth = blockImgWidth - 10
        blockImgHeight = blockImgHeight - 10
        document.getElementById("cw").innerHTML = blockImgWidth
        document.getElementById("ch").innerHTML = blockImgHeight
    }
    if (keyPressed == "37") {
        goLeft()
    }
    if (keyPressed == "38") {
        goUp()
    }
    if (keyPressed == "39") {
        goRight()
    }
    if (keyPressed == "40") {
        goDown()
    }
    if (keyPressed == "67") {
        new_img("cloud.jpg")
    }
    if (keyPressed == "68") {
        new_img("dark_green.png")
    }
    if (keyPressed == "71") {
        new_img("ground.png")
    }
    if (keyPressed == "76") {
        new_img("light_green.png")
    }
    if (keyPressed == "82") {
        new_img("roof.jpg")
    }
    if (keyPressed == "84") {
        new_img("trunk.jpg")
    }
    if (keyPressed == "85") {
        new_img("unique.png")
    }
    if (keyPressed == "87") {
        new_img("wall.jpg")
    }
    if (keyPressed == "89") {
        new_img("yellow_wall.png")
    }
}

function goLeft() {
    if (player_x > 0) {
        player_x = player_x - blockImgWidth
        canvas.remove(player_object)
        player_update()
    }
}
function goRight() {
    if (player_x < 750) {
        player_x = player_x + blockImgWidth
        canvas.remove(player_object)
        player_update()
    }
}
function goUp() {
    if (player_y > 0) {
        player_y = player_y - blockImgHeight
        canvas.remove(player_object)
        player_update()
    }
}
function goDown() {
    if (player_y < 300) {
        player_y = player_y + blockImgHeight
        canvas.remove(player_object)
        player_update()
    }
}