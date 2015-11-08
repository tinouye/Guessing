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

var name = prompt("Welcome to the guessing game! What is your name?");
alert("Welcome, " + name + "!");
alert('Rules: answers must be "yes" or "no".');
while(j===0){
	guess1 = prompt("Am I 19 years old?");
	alert("Your answer was: "+guess1);
	if(guess1==="no"||guess1==="No"||guess1==="NO"||guess1==="N"||guess1==="n"){
		counter++;
		alert("Nice one, "+name+"! I am actually 18.");
		j=1;
	}
	else if(guess1==="yes"||guess1==="Yes"||guess1==="YES"||guess1==="Y"||guess1==="y"){
		alert("Sorry "+name+", but I am actaully 18.");
		j=1;
		}
	else {
		alert("Invalid input!");
	}
}
while(k===0){
	guess2 = prompt("Am I from Tokyo, Japan?");
	alert("Your answer was: "+guess2);
	if(guess2==="yes"||guess2==="Yes"||guess2==="YES"||guess2==="Y"||guess2==="y"){
		counter++;
		alert("Nice job, "+name+"! I am indeed from Tokyo, Japan!");
		k=1;
	}
	else if(guess2==="no"||guess2==="No"||guess2==="NO"||guess2==="N"||guess2==="n"){
		alert("Too bad, "+name+". I am indeed from Tokyo, Japan.");
		k=1;
	}
	else{
		alert("Invalid input!");
	}
}
while(l===0){
	guess3 = prompt("Am I allergic to peanuts?");
	alert("Your answer was: "+guess3);
	if(guess3==="yes"||guess3==="Yes"||guess3==="YES"||guess3==="Y"||guess3==="y"){
		counter++;
		alert("Good guess, "+name+"! I am, in fact, allergic to peanuts.");
		l=1;
	}
	else if(guess3==="no"||guess3==="No"||guess3==="NO"||guess3==="N"||guess3==="n"){
		alert("Sorry "+name+", but I am, in fact, allergic to peanuts.");
		l=1;
		}
	else{
		alert("Invalid input!");
	}
}

while(m===0){
	guess4 = prompt("How many languages do I speak?");
	alert("Your answer was " + guess4);
	if(guess4==2){
		alert("Correct! I speak English and Japanese.");
		counter++;
		m=1;
	}
	else if(guess4<2||guess4>0){
		alert("Actually, I speak two languages: English and Japanese.");
		m=1;
	}
	else if (guess4>2){
		alert("Sorry, I only speak two languages: English and Japanese.");
		m=1;
	}
	else{
		alert("Invalid input!");
	}
}

while(n===0){
	guess5 = prompt("Do I play soccer?");
	/*not sure what numeric-answer question was (did we cover that?) so
	here's a normal y/n question instead. Sorry... */
	alert("Your answer was: "+guess5);
	if(guess5==="yes"||guess5==="Yes"||guess5==="YES"||guess5==="Y"||guess4==="y"){
		alert("Nice try "+name+". I play tennis but not soccer.");
		n=1;
	}
	else if(guess5==="no"||guess5==="No"||guess5==="NO"||guess5==="N"||guess5==="n"){
		alert("Good job "+name+"! I don't play soccer.");
		counter[3]=1;
		counter++;
		n=1;
		}
	else{
		alert("Invalid input!");
	}
}

while(o===0){
	guess6 = prompt("How many cats do I own?");
	alert("Your answer was " + guess6);
	if(guess6===0){
		alert("That's right! I have no cats.");
		o=1;
		counter++;
	}
	else if (guess4>0){
		alert("I actually don't own any cats.");
		o=1;
	}
	else{
		alert("Invalid input!");
	}
}

alert("You got " + counter + " out of 6 correct");


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