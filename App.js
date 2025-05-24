// ======================
// DOM ELEMENT REFERENCES
// ======================

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const showAnswerButton = document.getElementById('show-answer');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentCardElement = document.getElementById('current-card');
const totalCardsElement = document.getElementById('total-cards');
const deckTitle = document.getElementById('deck-title');
const topicInput = document.getElementById('topic-input');
const cardCountInput = document.getElementById('card-count');
const generateBtn = document.getElementById('generate-btn');
const loadingElement = document.getElementById('loading');
const deckSelect = document.getElementById('deck-select');

// ======================
// ⚠️ TEMPORARY: API KEY EXPOSURE FOR MVP
// ======================
// This key is intentionally hardcoded for early-stage development/testing.
// Before production, this will be moved to a secure environment variable
// and handled via a server-side proxy to prevent client exposure.
const apiKey = 'AIzaSyAo5UToedOeYTWia-YIwHpoFDvtaCahZds';


// ======================
// APP STATE
// ======================

const state = {
  decks: {
    'js-fundamentals': {
      name: 'JavaScript Fundamentals',
      cards: [
        {
          question: "What is hoisting in JavaScript?",
          answer: "JavaScript's default behavior of moving declarations to the top of their scope."
        },
        {
          question: "What is the difference between 'let', 'const', and 'var'?",
          answer: "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' cannot be reassigned."
        },
        {
          question: "What is a closure in JavaScript?",
          answer: "A function that retains access to its lexical scope even when executed outside that scope."
        },
        {
          question: "What does the 'this' keyword refer to?",
          answer: "The object that's executing the current function (context-dependent)."
        },
        {
          question: "What are JavaScript promises?",
          answer: "Objects representing the eventual completion (or failure) of an asynchronous operation."
        },
        {
          question: "What is the event loop?",
          answer: "The mechanism that handles asynchronous callbacks in JavaScript's single-threaded model."
        },
        {
          question: "What's the difference between '==' and '==='?",
          answer: "'==' performs type coercion, while '===' checks both value and type (strict equality)."
        },
        {
          question: "What is the spread operator (...) used for?",
          answer: "Expanding iterables into individual elements, or copying objects/arrays."
        },
        {
          question: "What is destructuring assignment?",
          answer: "A syntax that unpacks values from arrays or properties from objects into distinct variables."
        },
        {
          question: "What are template literals?",
          answer: "String literals allowing embedded expressions, using backtick (`) delimiters."
        }
      ]
    }
  },
  currentDeckId: 'js-fundamentals',
  currentCardIndex: 0
};


// ======================
// UI HELPERS
// ======================

function showLoading(show) {
  loadingElement.classList.toggle('hidden', !show);
  generateBtn.disabled = show;
}

function updateDeckSelector() {
  deckSelect.innerHTML = '';
  Object.entries(state.decks).forEach(([id, deck]) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = deck.name;
    deckSelect.appendChild(option);
  });
}

function switchToDeck(deckId) {
  state.currentDeckId = deckId;
  state.currentCardIndex = 0;
  deckSelect.value = deckId;
  renderCard();
}

function renderCard() {
  const deck = state.decks[state.currentDeckId];
  const card = deck.cards[state.currentCardIndex];

  questionElement.textContent = card.question;
  // Detect and format code nicely
if (card.answer.includes('<') || card.answer.includes('`') || card.answer.includes('\n')) {
  const escaped = card.answer
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  answerElement.innerHTML = `
    <pre class="code-block"><code>${escaped}</code></pre>
  `;
} else {
  answerElement.textContent = card.answer;
}

  answerElement.classList.add('hidden');

  currentCardElement.textContent = state.currentCardIndex + 1;
  totalCardsElement.textContent = deck.cards.length;
  deckTitle.textContent = deck.name;
}


// ======================
// FLASHCARD GENERATION (GEMINI API)
// ======================

async function generateNewDeck(topic, count) {
  showLoading(true);

  try {
    const deckName = `${topic.charAt(0).toUpperCase() + topic.slice(1)} Fundamentals`;
    
    // Construct Gemini prompt for flashcard generation
    const prompt = `Generate exactly ${count} flashcard question-answer pairs about ${topic}
Format as perfect JSON matching this structure:
{
  "name": "${deckName}",
  "cards": [
    {"question": "What is X?", "answer": "X is..."}
  ]
}
Rules:
1. Only return the JSON object
2. No additional text or markdown
3. Questions should test key concepts
4. Answers should be concise (1-2 sentences)`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error Details:", errorData);
      throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const responseText = data.candidates[0].content.parts[0].text;

    // Attempt to sanitize and parse the raw JSON text from Gemini
    let cleanJson;
    try {
      cleanJson = responseText.replace(/```(json)?/g, '').trim();
      const jsonStart = cleanJson.indexOf('{');
      const jsonEnd = cleanJson.lastIndexOf('}') + 1;
      cleanJson = cleanJson.slice(jsonStart, jsonEnd);

      const parsed = JSON.parse(cleanJson);

      if (!parsed.cards || !Array.isArray(parsed.cards)) {
        throw new Error("Invalid deck format - missing cards array");
      }

      const deckId = topic.toLowerCase().replace(/\s+/g, '-') + '-fundamentals';
      state.decks[deckId] = parsed;

      updateDeckSelector();
      switchToDeck(deckId);

    } catch (parseError) {
      console.error("Parsing Error. Raw Response:", responseText);
      throw new Error(`Failed to parse API response: ${parseError.message}`);
    }

  } catch (error) {
    console.error("Full Error:", error);
    alert(`Generation Failed: ${error.message}\nCheck console for details.`);
  } finally {
    showLoading(false);
  }
}


// ======================
// FLASHCARD NAVIGATION
// ======================

showAnswerButton.addEventListener('click', () => {
  answerElement.classList.toggle('hidden');
});

previousButton.addEventListener('click', () => {
  const deck = state.decks[state.currentDeckId];
  state.currentCardIndex = (state.currentCardIndex - 1 + deck.cards.length) % deck.cards.length;
  renderCard();
});

nextButton.addEventListener('click', () => {
  const deck = state.decks[state.currentDeckId];
  state.currentCardIndex = (state.currentCardIndex + 1) % deck.cards.length;
  renderCard();
});


// ======================
// FLASHCARD GENERATION EVENT
// ======================

generateBtn.addEventListener('click', () => {
  const topic = topicInput.value.trim();
  const count = Math.min(parseInt(cardCountInput.value), 20) || 5;

  if (!topic) {
    alert("Please enter a topic");
    return;
  }

  const loadingElement = document.getElementById('loading-animation');
  loadingElement.classList.remove('hidden');
  void loadingElement.offsetWidth;

  setTimeout(async () => {
    try {
      const result = generateNewDeck(topic, count);
      if (result instanceof Promise) {
        await result;
      }
    } catch (error) {
      console.error("Error generating deck:", error);
      alert("Failed to generate flashcards. Please try again.");
    } finally {
      loadingElement.classList.add('hidden');
    }
  }, 50);
});


// ======================
// INITIALIZATION
// ======================

function init() {
  cardCountInput.value = "5";
  updateDeckSelector();
  renderCard();
}

init();
