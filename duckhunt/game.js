
function start() {
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');

	mypic = new Image();
	mypic.src = 'assets/duckhunt.png';

	draw();
}

function draw () {
	mypic.onload = function () {
		//ctx.drawImage(mypic, topleft x, topleft y, width, height, x on canvas, y on canvas, width on canvas, height on canvas); 
		
		//tree
		ctx.drawImage(mypic, 0, 270, 80, 130, 30, 250, 160, 260); 

		//grass and road and bush
		ctx.drawImage(mypic, 100, 710, 800, 190, 0, 410, 800, 190); 

		//dog
		ctx.drawImage(mypic, 0, 0, 60, 50, 300, 450, 180, 150); 

		//duck 1
		ctx.drawImage(mypic, 0, 115, 35, 35, 130, 100, 70, 70); 

		// duck 2
		ctx.drawImage(mypic, 40, 115, 35, 35, 200, 120, 70, 70)

		// duck 3
		ctx.drawImage(mypic, 80, 115, 35, 35, 300, 250, 70, 70); 	
		
		// duck 4
		ctx.drawImage(mypic, 80, 155, 40, 35, 480, 200, 70, 70); 	
		
		// duck 5
		ctx.drawImage(mypic, 120, 155, 40, 35, 410, 80, 70, 70); 	
	
	}
}
