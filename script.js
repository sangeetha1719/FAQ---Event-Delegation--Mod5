const faqContainer = document.getElementById("faq-container");
const resetButton = document.getElementById("reset-button");

// Add event delegation: click event for questions
faqContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("question")) {
    // Shift key functionality
    if (event.shiftKey) {
      // If shift key is pressed, toggle all answers
      const answers = document.querySelectorAll(".answer");
      const allAnswersHidden = Array.from(answers).some( answer => 
        answer.classList.contains("hidden")
      );
      
      answers.forEach(answer => {
        if (allAnswersHidden) {
          answer.classList.remove("hidden");
        } else {
          answer.classList.add("hidden");
        }
      });
    } else {
      // Toggle only the clicked question's answer
      const answer = event.target.nextElementSibling;
      if (answer && answer.classList.contains("answer")) {
        answer.classList.toggle("hidden");
      }
    }
  }
});

// Reset button functionality
resetButton.addEventListener("click", function() {
  console.log("Reset button clicked");
  const answers = document.querySelectorAll(".answer");
  answers.forEach(function(answer) {
    answer.classList.add("hidden");
  });
});