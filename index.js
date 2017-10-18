$(document).ready(function(){
var blen = 2;
var slen = 1;
var set = 'session';
var on = false;

$('#slen').text(slen);
$('#blen').text(blen);
$('#countbutton').text(slen + ':' + '00')

$('#changebreakdown').on('click', function(){
	if (blen <= 1){
		blen = 1;	
	}
	else{
		blen-=1;
	}
	$('#blen').text(blen);
});

$('#changebreakup').on('click', function(){
	blen+=1;
	$('#blen').text(blen);
});

$('#changesessiondown').on('click', function(){
	if (slen <= 1){
		slen = 1;
	}
	else{
		slen-=1;	
	}
	
	$('#slen').text(slen);
	$('#countbutton').text(slen + ':' + '00')
});

$('#changesessionup').on('click', function(){
	slen+=1;
	$('#slen').text(slen);
	$('#countbutton').text(slen + ':' + '00')
});

$('#countbutton').on('click', function(){
	if (on === false){
		on = true;
		countDown(slen);
	}
	else if (on === true){
		clearInterval(countInt);
		on = false;
		$('#countbutton').text(slen + ':00');
		document.getElementById('countbutton').style.color = 'white';
	}
	
});

function countDown(num){
	var min = num;
	var sec = 0;
	countInt = setInterval(function(){
		if (sec === 0){
			min--;
			sec = 59;
		}
		else{
			sec--;
		}    
		if(sec<10){
			$('#countbutton').text(min + ':0' + sec);
		}
		else{
			$('#countbutton').text(min + ':' + sec);
		}
		var alarm = new Audio("alarm.wav"); 
		if(min===0 && sec===0){
			alarm.play();
			if (set === 'session'){
				set = 'break';
				min = blen;
				sec = 0;
				document.getElementById('countbutton').style.color = 'red';
				$('#countbutton').text(min + ':0' + sec);
			}
			else if (set === 'break'){
				set = 'session';
				min = slen;
				sec = 0;
				document.getElementById('countbutton').style.color = 'white';
				$('#countbutton').text(min + ':0' + sec);
			}
		}
    }, 1000);
}


});