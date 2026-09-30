const candidates = {
  Alex: {
    title: "The Confident Athlete",
    gift: "Complete Breakfast, Salmon Dinner, Egg",
    bio: "Confident, athletic, and determined to make something of himself. Alex loves sports and spends much of his time training, but there is more sensitivity beneath his confident exterior.",
    image: "images/alex.png",
    reason: "You value kindness, stability, and someone who genuinely looks out for you. Alex is energetic and loyal once you get through his tough exterior.",
    family: "Evelyn (grandmother), George (grandfather), Mother (passed), Father (abandoned)"
  },
  Elliott: {
    title: "The Romantic Writer",
    gift: "Crab Cakes, Duck Feather, Shell, Pomegranate",
    bio: "A passionate writer who lives by the sea while working on his novel. Elliott is expressive, romantic, and enjoys surrounding himself with beauty and inspiration.",
    image: "images/elliott.png",
    reason: "You may be a good match if you enjoy creativity, romance, and thoughtful conversations. Expect dramatic gestures, poetic moments, and someone who takes his dreams seriously.",
    family: "Leah (friend), Willy (friend)"
  },
  Harvey: {
    title: "The Caring Doctor",
    gift: "Coffee, Pickles, Flowers, Wine",
    bio: "The town doctor who takes his work seriously. Harvey is thoughtful and responsible, with a quiet passion for aviation and a strong desire to take care of others.",
    image: "images/harvey.png",
    reason: "You may be a good match if you value kindness, stability, and meaningful conversations. Expect a caring partner who is responsible and sometimes a little overprotective.",
    family: "No immediate family (or friends...) in Stardew Valley."
  },
  Sam: {
    title: "The Energetic Musician",
    gift: "Maple Bar, Pizza, Jojo Cola",
    bio: "Energetic, playful, and passionate about music. Sam spends his time playing with his band, skateboarding, and hanging out with friends while figuring out what he wants from life.",
    image: "images/sam.png",
    reason: "You want a relationship that feels like a friendship filled with energy and laughter. Sam is playful, loyal, and always ready for something fun, although his carefree nature can sometimes make him seem immature. Life with Sam means music, inside jokes, spontaneous plans, and plenty of fun.",
    family: "Jodi (mother), Kent (father), Vincent (younger brother), Abigail & Sebastian (Bandmates)"
  },
  Sebastian: {
    title: "The Quiet Rebel (emo)",
    gift: "Frozen Tear, Obsidian, Pumpkin Soup, Void Egg",
    bio: "A quiet programmer and musician who prefers late nights, motorcycles, and working on his own projects. Sebastian keeps to himself but cares deeply about the people close to him.",
    image: "images/sebastian.png",
    reason: "You value independence, personal space, and connections that take time to develop. Sebastian can be guarded and difficult to read, but once he lets someone in, he cares deeply. Life with Sebastian means late nights, personal projects, quiet moments, and giving each other room to be yourselves.",
    family: "Robin (mother), Demetrius (evil-stepfather), Maru (genius half-sister), Abigail & Sam (Bandmates)"
  },
  Shane: {
    title: "The Complicated Softie (part-time drunk)",
    gift: "Beer, Hot Pepper, Pepper Poppers, Pizza",
    bio: "Shane works at JojaMart and spends much of his free time watching television and caring for his chickens. He can be distant and grumpy, but there is a softer side beneath his rough exterior.",
    image: "images/shane.png",
    reason: "You're willing to look beyond someone's rough exterior and see the person underneath. Shane can be distant, negative, and difficult to reach, but he has a softer side that takes time and patience to uncover. Life with Shane means supporting each other through difficult moments and appreciating the progress along the way.",
    family: "Marnie (aunt), Jas (goddaughter)"
  },
  Abigail: {
    title: "The Adventurous Gamer",
    gift: "Amethyst, Blackberry Cobbler, Chocolate Cake, Pumpkin",
    bio: "Independent, curious, and always looking for something interesting to do. Abigail loves games, exploration, music, and adventures that take her outside the ordinary.",
    image: "images/abigail.png",
    reason: "You want someone who keeps life interesting. Abigail is curious, adventurous, and always ready to step outside the ordinary, although her impulsive side can sometimes get her into trouble. Life with Abigail means exploring, trying new things, and never quite knowing what adventure comes next.",
    family: "Pierre (rich father), Caroline (mother), Sam & Sebastian (Bandmates)"
  },
  Emily: {
    title: "The Free Spirit",
    gift: "Amethyst, Aquamarine, Emerald, Ruby, Topaz",
    bio: "Creative, optimistic, and deeply interested in dreams, spirituality, fashion, and making things. Emily has a unique way of seeing the world and rarely does things the ordinary way.",
    image: "images/emily.png",
    reason: "You appreciate someone who is unapologetically themselves. Emily is creative, optimistic, and open to seeing the world differently, even when her ideas are a little unconventional. Life with Emily means unexpected experiences, creative projects, and a partner who encourages you to embrace what makes you different.",
    family: "Haley (younger sister), Clint (ex)"
  },
  Haley: {
    title: "The Social Butterfly",
    gift: "Coconut, Fruit Salad, Pink Cake, Sunflower",
    bio: "Stylish, social, and confident. Haley cares about appearances and enjoys photography, but getting to know her reveals a more thoughtful and caring side.",
    image: "images/haley.png",
    reason: "You appreciate confidence, personality, and someone who knows what they want. Haley can initially come across as self-centered or judgmental, but getting closer reveals a more caring and thoughtful side. Life with Haley means looking beyond first impressions and discovering how much someone can change.",
    family: "Emily (older sister), Alex (Crush)"
  },
  Leah: {
    title: "The Creative Independent",
    gift: "Goat Cheese, Salad,Truffle, Wine",
    bio: "An artist who lives quietly in the forest and values creativity and independence. Leah spends her time sculpting, exploring nature, and building a life around her art.",
    image: "images/leah.png",
    reason: "You value creativity, independence, and having a life that feels true to yourself. Leah is passionate about her art and knows what she wants, although her strong independence can sometimes create tension. Life with Leah means supporting each other's ambitions while creating something meaningful together.",
    family: "Elliot (friend?)"
  },
  Maru: {
    title: "The Curious Inventor",
    gift: "Battery Pack, Cauliflower, Cheese Cauliflower, Strawberry",
    bio: "A talented inventor and scientist who loves building things and experimenting. Maru works at the local clinic and is always curious about how the world works.",
    image: "images/maru.png",
    reason: "You value curiosity, ambition, and constantly learning something new. Maru is inventive and passionate about her work, although she can become deeply absorbed in her projects. Life with Maru means building, experimenting, learning, and having a partner who is always excited about her next idea.",
    family: "Robin (mother), Demetrius (father), Sebastian (half-brother)"
  },
  Penny: {
    title: "The Quiet Dreamer",
    gift: "Diamond, Melon, Poppy, Poppyseed Muffin",
    bio: "Kind, quiet, and thoughtful. Penny spends much of his time teaching the children in town and dreams of creating a more comfortable and stable life for herself.",
    image: "images/penny.png",
    reason: "You value kindness, emotional closeness, and creating a comfortable home together. Penny is gentle and thoughtful, but her difficult circumstances have made her uncertain about her future. Life with Penny means creating a safe space together and appreciating the quiet moments that make a home feel like home.",
    family: "Pam (alcholoic mother), Vincent (student), Jas (student)"
  }
};

const questions = [
  {
    text: "1. You’ve had a terrible day. Your partner notices. What would you want them to do?",
    options: [
      { label: "A. Give me some space, then check on me later.", points: { Sebastian: 2, Leah: 2, Elliott: 1, Haley: 1 } },
      { label: "B. Sit with me and let me talk about it.", points: { Penny: 2, Harvey: 2, Elliott: 1, Emily: 1 } },
      { label: "C. Get me out of the house and make me laugh.", points: { Sam: 2, Abigail: 2, Alex: 1, Haley: 1 } },
      { label: "D. Do something small and thoughtful to make my day easier.", points: { Harvey: 2, Penny: 2, Maru: 1, Shane: 1 } }
    ]
  },
  {
    text: "2. You finally have a day with nothing planned. What sounds best?",
    options: [
      { label: "Staying home, making food, and enjoying each other's company.", points: { Penny: 2, Harvey: 2, Leah: 1, Shane: 1 } },
      { label: "Going somewhere we've never been before.", points: { Abigail: 2, Emily: 2, Alex: 1, Sam: 1 } },
      { label: "Working on something together and seeing what we create.", points: { Leah: 2, Maru: 2, Elliott: 1, Emily: 1 } },
      { label: "Going out, seeing friends, and making a whole day of it.", points: { Sam: 2, Haley: 2, Alex: 1, Emily: 1 } }
    ]
  },
  {
    text: "3. Your partner tells you about a dream they've had for years. You...",
    options: [
      { label: "Ask questions because I genuinely want to understand it.", points: { Harvey: 2, Penny: 2, Maru: 1, Elliott: 1 } },
      { label: "Encourage them to go for it, even if it seems unrealistic.", points: { Emily: 2, Abigail: 2, Sam: 1, Alex: 1 } },
      { label: "Offer to help them make it happen.", points: { Maru: 2, Harvey: 2, Penny: 1, Leah: 1 } },
      { label: "Tell them I'll support them, even if it takes them somewhere unexpected.", points: { Leah: 2, Sebastian: 2, Elliott: 1, Emily: 1 } }
    ]
  },
  {
    text: "4. Your partner has been keeping something to themselves. What do you do?",
    options: [
      { label: "Let them know I'm there whenever they're ready.", points: { Sebastian: 2, Leah: 2, Elliott: 1, Shane: 1 } },
      { label: "Gently ask what's wrong because I don't want them dealing with it alone.", points: { Penny: 2, Harvey: 2, Emily: 1, Alex: 1 } },
      { label: "Give them some time and trust that they'll come to me.", points: { Sebastian: 2, Haley: 2, Leah: 1, Maru: 1 } },
      { label: "Try to cheer them up without forcing them to talk.", points: { Sam: 2, Abigail: 2, Shane: 1, Haley: 1 } }
    ]
  },
  {
    text: "5. You and your partner are walking through town when you suddenly say, “Let's go somewhere.” How do they respond?",
    options: [
      { label: "“Where are we going?” but I'm already coming with you.", points: { Alex: 2, Sam: 2, Abigail: 1, Emily: 1 } },
      { label: "“Sure. Let's see where we end up.”", points: { Abigail: 2, Emily: 2, Leah: 1, Sam: 1 } },
      { label: "“Can we make a plan first?”", points: { Maru: 2, Harvey: 2, Penny: 1, Haley: 1 } },
      { label: "“Only if you promise this is going to be interesting.”", points: { Abigail: 2, Sam: 2, Emily: 1, Alex: 1 } }
    ]
  },
  {
    text: "6. Your partner gives you a handmade gift. It's a little strange, but clearly made with care.",
    options: [
      { label: "I love it because they made it themselves.", points: { Leah: 2, Emily: 2, Penny: 1, Maru: 1 } },
      { label: "I immediately want to know the story behind it.", points: { Elliott: 2, Emily: 2, Abigail: 1, Harvey: 1 } },
      { label: "I would tease them about it, but secretly treasure it.", points: { Sam: 2, Alex: 2, Abigail: 1, Haley: 1 } },
      { label: "I'd be touched that they remembered something I liked.", points: { Penny: 2, Harvey: 2, Shane: 1, Elliott: 1 } }
    ]
  },
  {
    text: "7. Let's talk red flags. Which one would make you hesitate?",
    options: [
      { label: "They can be emotionally distant and hard to read.", points: { Sebastian: -2, Leah: -2, Maru: -2 } },
      { label: "They sometimes need a lot of patience and reassurance.", points: { Shane: -2, Penny: -2, Harvey: -2 } },
      { label: "They can be a little too focused on themselves.", points: { Haley: -2, Alex: -2, Elliott: -2 } },
      { label: "They can be unpredictable and a lot to keep up with.", points: { Emily: -2, Abigail: -2, Sam: -2 } }
    ]
  },
  {
    text: "8. Your partner is going through a difficult time. What's your instinct?",
    options: [
      { label: "Stay beside them, even if I can't fix the problem.", points: { Penny: 2, Harvey: 2, Shane: 1, Sebastian: 1 } },
      { label: "Remind them what they're capable of and encourage them forward.", points: { Alex: 2, Emily: 2, Sam: 1, Haley: 1 } },
      { label: "Help with whatever practical things I can.", points: { Maru: 2, Harvey: 2, Alex: 1, Penny: 1 } },
      { label: "Give them room while making sure they know I'm still there.", points: { Sebastian: 2, Leah: 2, Elliott: 1, Shane: 1 } }
    ]
  },
  {
    text: "9. Which kind of relationship sounds most fulfilling?",
    options: [
      { label: "Two independent people who choose each other every day.", points: { Sebastian: 2, Leah: 2, Maru: 1, Elliott: 1 } },
      { label: "Best friends who can laugh about almost anything.", points: { Sam: 2, Abigail: 2, Alex: 1, Haley: 1 } },
      { label: "Partners who constantly inspire each other to grow.", points: { Emily: 2, Maru: 2, Elliott: 1, Leah: 1 } },
      { label: "A deep connection where we feel completely comfortable together.", points: { Penny: 2, Harvey: 2, Shane: 1, Sebastian: 1 } }
    ]
  },
  {
    text: "10. Years from now, you look back at your life together. What do you hope you remember most?",
    options: [
      { label: "All the ridiculous adventures we went on.", points: { Abigail: 2, Sam: 2, Alex: 1, Emily: 1 } },
      { label: "The little everyday moments that nobody else saw.", points: { Penny: 2, Harvey: 2, Shane: 1, Leah: 1 } },
      { label: "Everything we built and accomplished together.", points: { Maru: 2, Leah: 2, Alex: 1, Elliott: 1 } },
      { label: "How we were always there for each other.", points: { Harvey: 2, Penny: 2, Sebastian: 1, Shane: 1 } }
    ]
  }
];

let currentQuestionIndex = 0;

let scores = {
  Abigail: 0,
  Sebastian: 0,
  Leah: 0,
  Elliott: 0,
  Haley: 0,
  Alex: 0,
  Penny: 0,
  Harvey: 0,
  Sam: 0,
  Maru: 0,
  Shane: 0,
  Emily: 0
};

// HTML Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionTracker = document.getElementById('question-tracker');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

function showScreen(screenToShow) {
  startScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultsScreen.classList.remove('active');

  screenToShow.classList.add('active');
}

function resetScores() {
  for (let character in scores) {
    scores[character] = 0;
  }
}

function showCurrentQuestion() {
  const q = questions[currentQuestionIndex];

  questionTracker.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionText.textContent = q.text;

  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option.label;

    button.addEventListener('click', () => {
      addPoints(option.points);
      moveToNextStep();
    });

    optionsContainer.appendChild(button);
  });
}

function addPoints(optionPoints) {
  for (let character in optionPoints) {
    if (scores.hasOwnProperty(character)) {
      scores[character] += optionPoints[character];
    }
  }
}

function moveToNextStep() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showCurrentQuestion();
  } else {
    calculateAndShowWinner();
  }
}

function calculateAndShowWinner() {
  let highestScore = -Infinity;
  let winner = "Penny";

  for (let name in scores) {
    if (scores[name] > highestScore) {
      highestScore = scores[name];
      winner = name;
    }
  }

  const winningCharacter = candidates[winner];

  document.getElementById('character-name').textContent = winner;
  document.getElementById('character-title').textContent = `"${winningCharacter.title}"`;
  document.getElementById('character-description').textContent = winningCharacter.bio;
  document.getElementById('character-gift').textContent = winningCharacter.gift;
  document.getElementById('character-img').src = winningCharacter.image;
  document.getElementById('match-reason').textContent = winningCharacter.reason;

  showScreen(resultsScreen);
}

// Event Listeners
startBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  resetScores();
  showCurrentQuestion();
  showScreen(quizScreen);
});

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  resetScores();
  showScreen(startScreen);
});











