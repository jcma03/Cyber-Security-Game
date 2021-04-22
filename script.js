
function isEmptyS() { // function to check whether enough cards selected
  if (document.getElementById('panel1').innerHTML == isEmpty1) {
    alert("You did not select 3 cards!!!");
  }
  else if (document.getElementById('panel2').innerHTML == isEmpty2) {
    alert("You did not select 3 cards!!!");
  }
  else if (document.getElementById('panel3').innerHTML == isEmpty3) {
    alert("You did not select 3 cards!!!");
  }
  else {
    checkCardsSoftware(); 
  }
}

function checkCardsSoftware() { //checks if the right cards were picked
  var checklist = ["Firewall.jpg", "Encryption.jpg", "VPN.jpg"] //array that holds valid cards 
  var firstchild = document.getElementById('deck').children[0].getAttribute('src');
  var secondchild = document.getElementById('deck').children[1].getAttribute('src');
  var thirdchild = document.getElementById('deck').children[2].getAttribute('src');
  let i = 0
  let score = 0 //initially set to false, but will change to true if a wrong card is selected
  while (i < 1) { //loop to continously check cards until cards are correct 
    if (checklist.includes(firstchild)) {
      alert("The cards you have chosen are incorrect");
      //alert(score);
      let score = score + 1
    }
    else if (checklist.includes(secondchild)) {
      alert("The cards you have chosen are incorrect");
      //alert(score);
      let score = score + 1
    }
    else if (checklist.includes(thirdchild)) {
      alert("The cards you have chosen are incorrect");
      //alert(score);
      let score = score + 1
    }
    else {
      alert("Well done!! Youre onto the final stage!!");
      document.getElementById("submit").setAttribute( "onclick", "redirectFuncFinal()" );
      document.getElementById("submit").innerHTML = "LETS GO";
      i++;
    }
  }
}

function redirectFuncFinal() { //change button link to the landing page to the final stage
  location.replace("finalLanding.html")
}

function redirectFuncFinalPlay() { //change button link to the to the final stage
  location.replace("final.html")
}