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
answers[0] = "2";
answers[1] = "4";
answers[2] = "27";
answers[3] = "-3/4";
answers[4] = "16mn";
answers[5] = "20";
answers[6] = "option3";
answers[7] = "a=2b";
answers[8] = "option1";
answers[9] = "6";
answers[10] = "3x-1/3=3y+1/-3=3z-1/-6";
answers[11] = "3";
answers[12] = "infinity";
answers[13] = "-1,0,1";
answers[14] = "-y";
answers[15] = "9";
answers[16] = "(7/5, 21/5)";
answers[17] = "option1";
answers[18] = "(0,2)";
answers[19] = "option4";
answers[20] = "option1";
answers[21] = "option2";
answers[22] = "5";
answers[23] = "229";
answers[24] = "216";
answers[25] = "533280";
answers[26] = "70";
answers[27] = "option2";
answers[28] = "25/216";
answers[29] = "4";


    

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