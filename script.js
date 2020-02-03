/* Script file for the Troll Game project
	James Volino 1/9/20
	
	Decision making process for a "choose-your-own-adventure" type game. User will be prompted by a dialog box, based o their response, they can either win or lose in variuos ways

*/
"use strict";

//Set up an event listener for the button to trigger the game
document.getElementById("button").addEventListener("click", trollBattle);

//Function to the game
function trollBattle() {
	//intial prompt question for the user stored in a variable
	var action = window.prompt("Your're walking in the forest minding your business, and a troll suddenly appears! \nDo you FIGHT the troll?\nDo you RUN from the troll? \nDo you BRIBE the troll?").toUpperCase();
	console.log(action);
	
	//Switch statement to handle the initial player's choice
	switch(action){
		case "FIGHT":
		   var smart = window.prompt("Are you a cunning warrior? (YES OR NO)").toUpperCase();
		   
		   var strong = window.prompt("Are you stronger than a troll? (YES OR NO?").toUpperCase();
		   
		   //IF statement analyzes the user responses
		   if(smart==="YES" || strong==="YES"){
			document.getElementById("result").innerHTML = "You can either be smarter or stronger than a troll to survive<br/>You live another day!";
			
			//Clear any bad messages from the page
			document.getElementById("death").innerHTML = "";
			
			//Play the winning audio
			document.getElementById("win").play();
		   }
		   else {
			   document.getElementById("death").innerHTML = "You're not strong or smart? Why did you fight a troll?<br/>You Died...";
			   
			   //Clear any good messages
			   document.getElementById("result").innerHTML="";
			   
			   //Play the losing audio file
			   document.getElementById("die").play();
		   }   
			break;
		
		case "RUN":
			var fast = window.prompt("Are you Fast? (YES OR NO)").toUpperCase();
			   
			//IF statement analyzes the user responses
		   if(fast==="YES"){
			document.getElementById("result").innerHTML = "You are fast, but can you live with your cowardice";
			
			//Clear any bad messages from the page
			document.getElementById("death").innerHTML = "";
			
			//Play the winning audio
			document.getElementById("win").play();
		   }
		   else {
			   document.getElementById("death").innerHTML = "You are slow... much slower than a troll!<br/>		You Died...";
			   
			   //Clear any good messages
			   document.getElementById("result").innerHTML="";
			   
			   //Play the losing audio file
			   document.getElementById("die").play();
		   }   
			
			break;
		
		case "BRIBE":
			var money = window.prompt("You have to pay the troll-toll!\nDo you have money? (YES OR NO)").toUpperCase();
			
			
			if(money==="YES"){
				var amount = window.prompt("How much money do you have?(ENTER NUMERIC VALUE)");
				
				//Convert the string from the prompt to an integer
				amount = parseInt(amount);
				
				if(amount > 50) {
					document.getElementById("result").innerHTML = "That value is justice, You shall live!!";
			
					//Clear any bad messages from the page
					document.getElementById("death").innerHTML = "";
			
					//Play the winning audio
					document.getElementById("win").play();	
				}
				else{
					document.getElementById("death").innerHTML = "Trolls need more than THAT!!!<br/> SMASH-SMASH!! DEAD_DEAD!!";
			   
					//Clear any good messages
					document.getElementById("result").innerHTML="";
			   
					//Play the losing audio file
					document.getElementById("die").play();	
				}
			}
			else{
				 document.getElementById("death").innerHTML = "No Money? Hmmm... Seems as if you have to DIE!!!!";
			   
			   //Clear any good messages
			   document.getElementById("result").innerHTML="";
			   
			   //Play the losing audio file
			   document.getElementById("die").play()	
			}
			break;
		
		default:

			window.alert("Please enter a valid choice!");
			trollBattle();
			break;
	}
}

