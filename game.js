var guess1;
var guess2;
var guess3;
var j=0;
var k=0;
var l=0;
var m=0;
var counter=[0,0,0,0];
var score;

var name = prompt("Welcome to the guessing game! What is your name?");
alert("Welcome, " + name + "!");
alert('Rules: answers must be "yes" or "no".');
while(j===0){
	guess1 = prompt("Am I 19 years old?");
	alert("Your answer was: "+guess1);
	if(guess1==="no"||guess1==="No"||guess1==="NO"||guess1==="N"||guess1==="n"){
		counter[0]=1;
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
		counter[1]=1;
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
		counter[2]=1;
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
	guess4 = prompt("Do I play soccer?");
	/*not sure what numeric-answer question was (did we cover that?) so
	here's a normal y/n question instead. Sorry... */
	alert("Your answer was: "+guess4);
	if(guess4==="yes"||guess4==="Yes"||guess4==="YES"||guess4==="Y"||guess4==="y"){
		alert("Nice try "+name+". I play tennis but not soccer.");
		m=1;
	}
	else if(guess4==="no"||guess4==="No"||guess4==="NO"||guess4==="N"||guess4==="n"){
		alert("Good job "+name+"! I don't play soccer.");
		counter[3]=1;
		m=1;
		}
	else{
		alert("Invalid input!");
	}
}
score=counter[0]+counter[1]+counter[2]+counter[3];
alert("You got " + score + " out of 4 correct");
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