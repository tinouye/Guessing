var guess1;
var guess2;
var guess3;
var guess4;
var guess5;
var question6;
var question = [];
var correct = [];
var wrong = [];
var j=0;
var counter=0;
var score;
var isCorrect;

question[0]= "Am I 19 years old?";
question[1]= "Am I from Tokyo, Japan?";
question[2]= "Am I allergic to peanuts?";
question[3]= "How many languages do I speak?";
question[4]= "Do I play soccer?";
question[5]= "How many cats do I own?";

correct[0]= "Nice one, "+name+"! I am actually 18.";
correct[1]= "Nice job, "+name+"! I am indeed from Tokyo, Japan!";
correct[2]= "Good guess, "+name+"! I am, in fact, allergic to peanuts.";
correct[3]= "Correct! I speak English and Japanese.";
correct[4]= "Good job "+name+"! I don't play soccer.";
correct[5]= "That's right! I have no cats."

wrong[0]= "Sorry "+name+", but I am actaully 18.";
wrong[1]= "Too bad, "+name+". I am indeed from Tokyo, Japan.";
wrong[2]= "Sorry "+name+", but I am, in fact, allergic to peanuts.";
wrong[3]= ["Actually, I speak two languages: English and Japanese.",
"Sorry, I only speak two languages: English and Japanese."];
wrong[4]= "Nice try "+name+". I play tennis but not soccer.";
wrong[5]= "I actually don't own any cats.";

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

			else if(a<b&&a>=0){
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

//QUESTION 1 - AGE
while(j===0){
	guess1 = prompt(question[0]);

	yesNo(guess1,false);
}
	if(isCorrect===true){
		document.getElementById('i1').src='images/correct.png'
		document.getElementById('q1').style.color = 'green';
		document.getElementById('q1').innerHTML = correct[0];
	}
	else if(isCorrect===false){
		document.getElementById('i1').src = 'images/incorrect.png'
		document.getElementById('q1').style.color = 'red';
		document.getElementById('q1').innerHTML = wrong[0];
	}
j=0;

//QUESTION 2 - ORIGIN
while(j===0){
	guess2 = prompt(question[1]);

	yesNo(guess2,true);
}
	if(isCorrect===true){
		document.getElementById('i2').src = 'images/correct.png'
		document.getElementById('q2').style.color = 'green';
		document.getElementById('q2').innerHTML = correct[1];
	}
	else if(isCorrect===false){
		document.getElementById('i2').src = 'images/incorrect.png'
		document.getElementById('q2').style.color = 'red';
		document.getElementById('q2').innerHTML = wrong[1];
	}
j=0;

//QUESTION 3 - ALLERGY
while(j===0){
	guess3 = prompt(question[2]);
	yesNo(guess3,true);
}
	if(isCorrect===true){
		document.getElementById('i3').src = 'images/correct.png'
		document.getElementById('q3').style.color = 'green';
		document.getElementById('q3').innerHTML = correct[2];
	}
	else if(isCorrect===false){
		document.getElementById('i3').src = 'images/incorrect.png'
		document.getElementById('q3').style.color = 'red';
		document.getElementById('q3').innerHTML = wrong[2];
	}
j=0;

//QUESTION 4 - LANGUAGE
while(j===0){
	guess4 = Number(prompt(question[3]));
	yesNo(guess4,2);
}
	if(isCorrect===true){
		document.getElementById('i4').src = 'images/correct.png'
		document.getElementById('q4').style.color = 'green';
		document.getElementById('q4').innerHTML = correct[3];
	}
	else if(isCorrect==="tooSmall"){
		document.getElementById('i4').src = 'images/incorrect.png'
		document.getElementById('q4').style.color = 'red';
		document.getElementById('q4').innerHTML = wrong[3][0];
	}
	else if(isCorrect==="tooBig"){
		document.getElementById('i4').src = 'images/incorrect.png'
		document.getElementById('q4').style.color = 'red';
		document.getElementById('q4').innerHTML = wrong[3][1];
	}
j=0;

//QUESTION 5 - SPORTS
while(j===0){
	guess5 = prompt(question[4]);
	yesNo(guess5,false);
}
	
	if(isCorrect===true){
		document.getElementById('i5').src = 'images/correct.png'
		document.getElementById('q5').style.color = 'green';
		document.getElementById('q5').innerHTML = correct[4];
	}
	if(isCorrect===false){
		document.getElementById('i5').src = 'images/incorrect.png'
		document.getElementById('q5').style.color = 'red';
		document.getElementById('q5').innerHTML = wrong[4];
	}
j=0;

//QUESTION 6 - CATS
while(j===0){
	guess6 = Number(prompt(question[5]));
	yesNo(guess6,0);
}
	if(isCorrect===true){
		document.getElementById('i6').src = 'images/correct.png'
		document.getElementById('q6').style.color = 'green';
		document.getElementById('q6').innerHTML = correct[5];
	}
	else if(isCorrect!=true){
		document.getElementById('i6').src = 'images/incorrect.png'
		document.getElementById('q6').style.color = 'red';
		document.getElementById('q6').innerHTML = wrong[5];
	}


//alert("You got " + counter + " out of 6 correct");
