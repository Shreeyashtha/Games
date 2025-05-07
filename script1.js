const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
contentBox = document.querySelector(".container .content");
startArea = document.querySelector(".startArea");
scoreArea = document.querySelector(".score");
modalContent = document.querySelector(".modal-content");

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the text of modal
var modalText = document.getElementById("modalText");

let correctWord;
let score = 0; 


const start = () => {
    contentBox.style.display = "block";
    startArea.style.display = "none";
initGame(); 
}


const endGame = () => {
    contentBox.style.display = "none";
    startArea.style.display = "block";
    modal.style.display = "block";
    modalContent.classList.remove("modal-correct");
    modalContent.classList.add("modal-wrong");
    modalText.innerHTML = `
    <center><br><b>${correctWord.toUpperCase()}</b> was the correct word.
    <br>You Lost The Game ! :(</center><br>
    </center>
    `;

}

const winGame = () => {
    contentBox.style.display = "none";
    startArea.style.display = "block";
    modal.style.display = "block";
    modalContent.classList.add("modal-correct");
    modalText.innerHTML = `<br><center>Congrats You WIN THE GAME !!!!!!`;
    triggerConfetti();
    
}

const initGame = () => {
  let randomIndex = Math.floor(Math.random() * words.length);
  let randomObj = words.splice(randomIndex, 1)[0];
  previousWordObj = randomObj;

  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  scoreArea.innerHTML = score;

  if(score === 6) {
      winGame();
  }
};


const checkWord = () => {
    let userWord = inputField.value.toLowerCase();

    if(userWord !== correctWord) 
    { 
        modal.style.display = "block";
        modalContent.classList.add("modal-wrong");

        return modalText.innerHTML = `<br>Oops! <b>${userWord}</b> is not a correct word`;
        
    }
    else
    {
      modal.style.display = "block";
      modalContent.classList.remove("modal-wrong");
      modalContent.classList.add("modal-correct");
      score++;
      showCongratulations()
      const imageHTML = `<br><img src="${previousWordObj.image}" alt="${correctWord}" style="max-width: 300px; width: 100%;">`;
      modalText.innerHTML = `<br>Congrats! <b>${correctWord.toUpperCase()}</b> is the correct word<br>${imageHTML}`;
  
    }
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function openWinModal() {
  document.getElementById("winModal").style.display = "block";
}

function closeWinModal() {
  document.getElementById("winModal").style.display = "none";
}

window.addEventListener("click", function(event) {
  const modal = document.getElementById("winModal");
  if (event.target === modal) {
    closeWinModal();
  }
});

// Confetti trigger function
const triggerConfetti = () => {
  const duration = 5 * 1000; // 5 seconds of confetti
  const end = Date.now() + duration;
  (function frame() {
      confetti({
          particleCount: 5,
          angle: Math.random() * 360,
          spread: 180,
          origin: {
              x: Math.random(),
              y: Math.random() - 0.2
          }
      });
      if (Date.now() < end) {
          requestAnimationFrame(frame);
      }
  })();
};

const showCongratulations = () => {
  const congratsMessage = document.createElement('div');
  congratsMessage.classList.add('congrats-message');
  congratsMessage.innerText = "🎉 Correct! Well Done! 🎉";
  document.body.appendChild(congratsMessage);

  setTimeout(() => {
    congratsMessage.style.transform = 'scale(1)';
    congratsMessage.style.opacity = 1;
  }, 100); // Delay for smooth pop-in effect
  
  setTimeout(() => {
    congratsMessage.style.opacity = 0;
    setTimeout(() => {
      congratsMessage.remove();
    }, 500); // Wait for the fade-out effect
  }, 2500); // Display for 2.5 seconds before fading
};
let words = [
    {
        word:"tihar",
        hint:"Festival of lights",
        image: "images/tihar.jpg",
    },
    {
        word:"dashain",
        hint:"Longest festival of Nepal",
        image: "images/dashain.jpg"
    },
    {
        word:"yomaripurni",
        hint:"Mainly celebrated by Newars",
        image: "images/yomaripurni.jpeg"
        
    },
    {
        word:"lhosar",
        hint:" Festival that marks the Tibetan New Year",
        image: "images/lhosar.jpg"
    },
    {
        word:"indrajatra",
        hint:"Festival that honors the rain god",
        image: "images/indrajatra.jpg"
    },
    {
        word:"ghodejatra",
        hint:"Festival of horses",
        image: "images/ghodejatra.jpg"
    },
    {
        word:"holi",
        hint:"Festival of colors",
        image: "images/holi.jpg"
    },


]
