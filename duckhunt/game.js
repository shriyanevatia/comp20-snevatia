
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
		
		//grass and road and bush
		ctx.drawImage(mypic, 100, 710, 800, 190, 0, 410, 800, 190); 

		//dog
		ctx.drawImage(mypic, 0, 0, 60, 50, 300, 450, 180, 150); 
		
		//tree
		ctx.drawImage(mypic, 0, , 60, 50, 300, 500, 120, 100); 

		//duck 1
		//ctx.drawImage(mypic, topleft x, topleft y, width, height, x on canvas, y on canvas, width on canvas, height on canvas); 
		
		//duck 2
		//ctx.drawImage(mypic, topleft x, topleft y, width, height, x on canvas, y on canvas, width on canvas, height on canvas); 
	
		//duck 3
		//ctx.drawImage(mypic, topleft x, topleft y, width, height, x on canvas, y on canvas, width on canvas, height on canvas); 
	
		//duck 4
		//ctx.drawImage(mypic, topleft x, topleft y, width, height, x on canvas, y on canvas, width on canvas, height on canvas); 
	
		//duck 5
		//ctx.drawImage(mypic, topleft x, topleft y, width, height, x on canvas, y on canvas, width on canvas, height on canvas); 
	
	}
}
