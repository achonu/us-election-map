var createPolitician = function (name, partyColour)
{  var politician = {};
   politician.name = name;
   politician.electionResults = null;
   politician.totalVotes = 0;
   politician.partyColour = partyColour;



   politician.totalElecResults = function() {

    this.totalVotes = 0;

  for(var i = 0; i < this.electionResults.length; i++) {

    this.totalVotes = this.totalVotes + this.electionResults[i];
    console.log(this.totalVotes);
  }
};

 return politician;
};


var adanna = createPolitician("Adanna",[132,17,11]);
var suzy = createPolitician("Suzy",[245, 141, 136]);



adanna.electionResults= [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];


// update the array with new votes
adanna.electionResults[9] = 1;
adanna.electionResults[4] = 17;
adanna.electionResults[43] =11;

suzy.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];


suzy.electionResults[9] = 28;
suzy.electionResults[4] = 38;
suzy.electionResults[43] =27;


console.log(adanna.electionResults); // shows the results in an array
console.log(suzy.electionResults);

adanna.totalElecResults(); // calls the method first to tally up results
suzy.totalElecResults();


console.log(adanna.totalVotes + " Adanna");
console.log(suzy.totalVotes + " Suzy");

//determines winner of each state

    var setStateResults = function(state)
    {  var winner = "";
       theStates[state].winner = null;


      if(adanna.electionResults[state] > suzy.electionResults[state]) {

        theStates[state].winner = adanna;

      } else if (adanna.electionResults[state] < suzy.electionResults[state]) {

        theStates[state].winner = suzy;

    }

     var stateWinner = theStates[state].winner;

     if (stateWinner !== null) {
       theStates[state].rgbColor = stateWinner.partyColour
     } else {
       theStates[state].rgbColor = [11, 32, 57];
     }




// get the stateResults table info in the html

var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidateName1 = body.children[0].children[0];
var candidateName2 = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

// to declare the winner in the table at the bottom of the map


stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

candidateName1.innerText = adanna.name;
candidateName2.innerText = suzy.name;

candidate1Results.innerText = adanna.electionResults[state];
candidate2Results.innerText = suzy.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}


   }


// logic to determine who is the winner - total votes

if (adanna.totalVotes > suzy.totalVotes) {
  winner = adanna.name;
 console.log("Winner is " + winner);

}else if (adanna.totalVotes < suzy.totalVotes) {
     winner = suzy.name; // name is a parameter
      console.log("Winner is " + winner);
} else {
     winner = "Draw";
     console.log("Election is a " + winner);
}

console.log("Betsy's color is: " + adanna.partyColour);

//to populate total votes table at the top of the map

var topTable = document.getElementById('countryResults');

topTable.children[0].children[0].children[0].innerText = adanna.name;
topTable.children[0].children[0].children[1].innerText = adanna.totalVotes;
topTable.children[0].children[0].children[2].innerText = suzy.name;
topTable.children[0].children[0].children[3].innerText = suzy.totalVotes;
topTable.children[0].children[0].children[5].innerText = winner;
