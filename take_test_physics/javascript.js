<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://www.javascriptsource.com -->

<!-- Begin
// Insert number of questions
var numQues = 30;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(30);

// Insert answers to questions
answers[0] = "1.97Nm/rad";
answers[1] = "option1";
answers[2] = "1.18";
answers[3] = "1.6m";
answers[4] = "8J";
answers[5] = "6.6m/s";
answers[6] = "option1";
answers[7] = "15N";
answers[8] = "0.0045&deg;C";
answers[9] = "0.785kg/s";
answers[10] = "0.283m";
answers[11] = "873mm of Hg";
answers[12] = "option2";
answers[13] = "290.7";
answers[14] = "Gallium";
answers[15] = "4.0016units";
answers[16] = "23mA";
answers[17] = "0.707R";
answers[18] = "option2";
answers[19] = "option2";
answers[20] = "option1";
answers[21] = "867";
answers[22] = "0.12m";
answers[23] = "349m/s";
answers[24] = "30cm from the lens further away from the mirror";
answers[25] = "0.76m";
answers[26] = "option2";
answers[27] = "option3";
answers[28] = "50mH";
answers[29] = "10A";


    

// Do not change anything below here ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score);
  form.percentage.value = score;
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}
//  End -->