var screen= document.getElementById('screen');
		var one= document.getElementById('one');
		var two= document.getElementById('two');
		var three= document.getElementById('three');
		var four= document.getElementById('four');
		var five= document.getElementById('five');
		var six= document.getElementById('six');
		var seven= document.getElementById('seven');
		var eight= document.getElementById('eight');
		var nine= document.getElementById('nine');
		var dot= document.getElementById('dot');
		var zero= document.getElementById('zero');
		var equal= document.getElementById('equal');
		var del= document.getElementById('del');
		var modulus= document.getElementById('modulus');
		var firstvalue= ''
		var sign= ''
		var multiply= document.getElementById("multiply");
		var divide= document.getElementById('divide');
		var subtract= document.getElementById('subtract');
		var add= document.getElementById('add');


		
		

		one.onclick= function(){
			if (screen.value== "0" || isNaN(screen.value)){
				screen.value=1
			}
			else{
				screen.value=screen.value+1
			}



		}
		two.onclick= function(){
			if (screen.value==0 || isNaN(screen.value)) {
				screen.value=2
			}
			else
			{
				screen.value=screen.value+2
			}
		}
		three.onclick= function(){
			if (screen.value==0 || isNaN(screen.value)) {
				screen.value=3
			}
			else{
				screen.value=screen.value+3
			}
		}
		four.onclick= function(){
			if (screen.value==0 || isNaN(screen.value)) {
				screen.value=4
			}
			else{
				screen.value=screen.value+4
			}
		}
		five.onclick= function(){
			if (screen.value=="0" || isNaN(screen.value) ){
				screen.value=5
			}else{
				screen.value=screen.value+5
			}
		}
		six.onclick= function(){
			if (screen.value=="0" || isNaN(screen.value)) {
				screen.value=6
			}else{
				screen.value=screen.value+6
			}
		}
		seven.onclick= function(){
			if (screen.value=="0" || isNaN(screen.value)) {
				screen.value=7
			}
			else{
				screen.value=screen.value+7
			}
		}
		eight.onclick= function(){
			if (screen.value=="0" || isNaN(screen.value)) {
				screen.value=8
			}
			else{
				screen.value=screen.value+8
			}
		}
		nine.onclick= function(){
			if (screen.value=="0" || isNaN(screen.value)) {
				screen.value=9
			}
			else{
				screen.value=screen.value+9
			}
		}
		dot.onclick= function(){
			if (!screen.value.includes('.') || isNaN(screen.value)) {
				screen.value=screen.value+'.'
			}
			
			
		}
		zero.onclick=function(){
			if (screen.value==0 || isNaN(screen.value)){
				screen.value=0
			}else{
				screen.value=screen.value+0
			}
		}
		cancel.onclick= function(){
			screen.value= "0"
		}
		del.onclick= function(){
			screen.value= screen.value.slice(0, -1)
		}
		modulus.onclick= function (){
			if (isNaN(screen.value)){
				screen.value="syntax error"
			}else{
				firstvalue= screen.value
				screen.value="%"
				sign="%"


			}
		}
		multiply.onclick= function (){
			if (isNaN(screen.value)){
				screen.value="syntax error"
			}else{
				firstvalue= screen.value
				screen.value="*"
				sign="*"


			}
		}
		divide.onclick= function (){
			if (isNaN(screen.value)){
				screen.value="syntax error"
			}else{
				firstvalue= screen.value
				screen.value="/"
				sign="/"


			}
		}
		subtract.onclick= function (){
			if (isNaN(screen.value)){
				screen.value="syntax error"
			}else{
				firstvalue= screen.value
				screen.value="-"
				sign="-"


			}
		}
		add.onclick= function (){
			if (isNaN(screen.value)){
				screen.value="syntax error"
			}else{
				firstvalue= screen.value
				screen.value="+"
				sign="+"


			}
		}

		equal.onclick= function (){
			if(sign== "-"){ 
				var secondvalue=screen.value;

				screen.value=firstvalue - secondvalue

			}
			else{
				if (sign=='+'){
					var secondvalue=screen.value;
					screen.value= Number(firstvalue)+Number(secondvalue)
				}
				if (sign=='/'){
					var secondvalue=screen.value;
					screen.value=firstvalue / secondvalue
				}
				if (sign=='*'){
					var secondvalue=screen.value;
					screen.value=firstvalue * secondvalue
				}
				if (sign=='%'){
					var secondvalue=screen.value;
					screen.value=firstvalue % secondvalue
				}
			}
			
		}
		