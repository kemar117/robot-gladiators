
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// this creates a function named "fight"
// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
 
    // repeat and execute as long as the enemy robot is alive 
    while(enemyHealth > 0 && playerHealth > 0) {

    //Alert users that they are starting the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
    
   // if player choses to skip confirm then stop loop
   if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract player money
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
        
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
    console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing."
    );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            
            // award player money for winning 
            playerMoney = playerMoney + 20;
    
            //leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }    
    
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};



// function to end game
var endGame = function() {
    // function to start a new game
var startGame = function() {
     // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
   
     for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            var pickedEnemyName = enemyNames[i];
            
            enemyHealth = 50;
            
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of "  + playerMoney + ".");
    } else {
        window.alert("You've lost your robot battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      // restart the game
    startGame();
      } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
endGame();
