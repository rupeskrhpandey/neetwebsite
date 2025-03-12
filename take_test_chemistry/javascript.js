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
answers[0] = "122.4eV";
answers[1] = "HgCl2";
answers[2] = "2.4KPa";
answers[3] = "400ml";
answers[4] = "10KJ";
answers[5] = "2";
answers[6] = "4";
answers[7] = "Hyperol";
answers[8] = "1.12ml";
answers[9] = "CaSO4";
answers[10] = "amphoteric acid";
answers[11] = "3";
answers[12] = "40 ppm";
answers[13] = "Cyclo propenyl cation";
answers[14] = "Br2 water";
answers[15] = "Reimer-Tiemann reaction";
answers[16] = "Hydrogen in presence of nickel";
answers[17] = "option3";
answers[18] = "none";
answers[19] = "sodium metabisulphite";
answers[20] = "31.45mm";
answers[21] = "option1";
answers[22] = "option3";
answers[23] = "2.8l";
answers[24] = "25";
answers[25] = "HVZ";
answers[26] = "option1";
answers[27] = "Monoclinic";
answers[28] = "mutarotation";
answers[29] = "HCHO";


    

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