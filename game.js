var guess1;
var guess2;
var guess3;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;
var o=0;
var counter=0;
var score;
var isCorrect;

function yesNo(a,b){
	alert("Your answer was: "+a);
	if(b===true||b===false){
		if(a==="no"||a==="No"||a==="NO"||a==="N"||a==="n"){
			if(b===true){
				isCorrect = false;
			}
			else if(b===false){
				isCorrect = true;
			}
			j=1;
		}
		else if(a==="yes"||a==="Yes"||a==="YES"||a==="Y"||a==="y"){
			if(b===true){
				isCorrect = true;
			}
			else if (b===false){
				isCorrect = false;
			}
			j=1;
		}
	else {
		alert("Invalid input!");
	}
}
	else if(b!=NaN){
		if(a==b){
			isCorrect=true;
				counter++;
				j=1;
			}

			else if(a<b||a>=0){
				isCorrect="tooSmall";
				j=1;
			}

			else if (a>b){
				isCorrect="tooBig";
				j=1;
			}
			else{
				alert("Invalid input!");
			}
	}
}

var name = prompt("Welcome to the guessing game! What is your name?");
alert("Welcome, " + name + "!");
alert('Rules: answers must be "yes" or "no".');

while(j===0){
	guess1 = prompt("Am I 19 years old?");

	yesNo(guess1,false);
	console.log(isCorrect);
}
	if(isCorrect===true){
		document.getElementById('q1').innerHTML="Nice one, "+name+"! I am actually 18.";
	}
	else if(isCorrect===false){
		document.getElementById('q1').innerHTML="Sorry "+name+", but I am actaully 18.";
	}
j=0;

while(j===0){
	guess2 = prompt("Am I from Tokyo, Japan?");

	yesNo(guess2,true);
}
	if(isCorrect===true){
		document.getElementById('q2').innerHTML="Nice job, "+name+"! I am indeed from Tokyo, Japan!";
	}
	else if(isCorrect===false){
		document.getElementById('q2').innerHTML="Too bad, "+name+". I am indeed from Tokyo, Japan.";
	}
j=0;

while(j===0){
	guess3 = prompt("Am I allergic to peanuts?");
	yesNo(guess3,true);
}
	if(isCorrect===true){
		document.getElementById('q3').innerHTML="Good guess, "+name+"! I am, in fact, allergic to peanuts.";
	}
	else if(isCorrect===false){
		document.getElementById('q3').innerHTML="Sorry "+name+", but I am, in fact, allergic to peanuts.";
	}
j=0;

while(j===0){
	guess4 = Number(prompt("How many languages do I speak?"));
	yesNo(guess4,2);
}
	if(isCorrect===true){
		document.getElementById('q4').innerHTML="Correct! I speak English and Japanese.";
	}
	else if(isCorrect==="tooSmall"){
		document.getElementById('q4').innerHTML="Actually, I speak two languages: English and Japanese.";
	}
	else if(isCorrect==="tooBig"){
		document.getElementById('q4').innerHTML="Sorry, I only speak two languages: English and Japanese.";
	}
j=0;

while(j===0){
	guess5 = prompt("Do I play soccer?");
	yesNo(guess5,false);
}
	if(isCorrect===false){
		document.getElementById('q5').innerHTML="Nice try "+name+". I play tennis but not soccer.";
	}
	else if(isCorrect===true){
		document.getElementById('q5').innerHTML="Good job "+name+"! I don't play soccer.";
	}
j=0;


while(j===0){
	guess6 = Number(prompt("How many cats do I own?"));
	yesNo(guess6,0);
}
	if(isCorrect===true){
		document.getElementById('q6').innerHTML="That's right! I have no cats.";
	}
	else if(isCorrect!=true){
		document.getElementById('q6').innerHTML="I actually don't own any cats.";
	}
j=0;


//alert("You got " + counter + " out of 6 correct");


/*
if(counter[0]===0){
	alert("I am 18, not 19.");
}
if(counter[1]===0){
	alert("I am indeed from Tokyo, Japan.");
}
if(counter[2]===0){
	alert("I am, in fact, allergic to peanuts.");
}
*/
