canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

greencar_width = 90;
greencar_height = 125;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 125;
greencar_y = 250;

background_imgTag = new Image();
greencar_imgTag = new Image();

function add() {
	
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;

	
	greencar_imgTag.onload = uploadGreenCar();
	greencar_imgTag.src = greencarImage;
	
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height)
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log("----------\nkeyPressed: " + keyPressed + " X:" + greencar_x + " Y:" + greencar_y);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	// if(greencar_y >=0)
	// {
		greencar_y = greencar_y - 10
		console.log("When UP arrow is pressed, X = " + greencar_x + " | Y = " +greencar_y );
		uploadBackground();
        uploadGreenCar();
	// }
}

function down()
{
	// if(greencar_y >=0)
	// {
		greencar_y = greencar_y + 10
		console.log("When DOWN arrow is pressed, X = " + greencar_x + " | Y = " +greencar_y );
		uploadBackground();
        uploadGreenCar();
	// }
}


function left()
{
	
		greencar_x = greencar_x - 10
		console.log("When LEFT arrow is pressed, X = " + greencar_x + " | Y = " +greencar_y );
		uploadBackground();
        uploadGreenCar();
	
}


function right()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x + 10
		console.log("When RIGHT arrow is pressed, X = " + greencar_x + " | Y = " +greencar_y );
		uploadBackground();
        uploadGreenCar();
	}
}

