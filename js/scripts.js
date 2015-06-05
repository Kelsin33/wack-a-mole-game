score = 0;
var time_left = 30;
	$(function() {
		 $("#gamespace").on( "click", "img", function(){
		 $(this).fadeOut("fast");
			incScore();
		});
		$("#start_button").click(function(){
		beginGame();
		});
	});
	function beginGame(){
		$("#timer").show();
			updateTimer();
			addMole();
	}
			
	function randPosX() {
		return Math.floor(Math.random() * 450);
	}
			
	function randPosY(){
		return Math.floor(Math.random() * 300);
	}
	function incScore(){
		score +=1;
		$("#score").html(score + " points");
	}
			
	function updateTimer() {
		// Decrement seconds
			
		if (time_left <= 0) {
			clearTimeout(timeout);
			alert("Game Over! Your Score is " + score + " points!");
			reloadPage();
		}
			
		else{
			// Update the timer HTML
			$("#timer").html(time_left + " seconds left");
			
			time_left -=1;
			
			timeout = setTimeout(updateTimer, 1000);
			
			
		}
			
	}
			
	function randomMole(){
		return Math.floor(Math.random() * 2000);
	}
			
	function addMole(){
			
		if (time_left <=0) {
		return;
	}
			
		else{
			var xPos = randPosX();
			var yPos = randPosY();
			var x=randomMole();
			$("#gamespace").append('<img src="img/mole.jpg" style="top:'+yPos+'px;left:'+xPos+'px;"/>');
			$("img").hide(Math.random() * 3000);
			var timeout = setTimeout("addMole()", x);
		}

	}
	function reloadPage() {
		location.reload();
		alert("Click Start to Play Again!");
	}