

//identify variables 
let storyBox;
let storyText;

storyBox = document.getElementById('story-box');
storyText = document.getElementById('story-text');


storyBox.addEventListener("click", updateStory);

function updateStory() {
  storyText.textContent = "I live alone.";
}

