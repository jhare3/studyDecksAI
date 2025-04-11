document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
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

  // App State
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

  // Core Functions
  function renderCard() {
    const deck = state.decks[state.currentDeckId];
    const card = deck.cards[state.currentCardIndex];
    
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    answerElement.classList.add('hidden');
    
    currentCardElement.textContent = state.currentCardIndex + 1;
    totalCardsElement.textContent = deck.cards.length;
    deckTitle.textContent = deck.name;
  }

  async function generateDeck(topic, count) {
    try {
      showLoading(true);
      
      // Simulate API call (replace with actual DeepSeek integration)
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newCards = mockAPICall(topic, count);
      
      const deckId = `custom-${Date.now()}`;
      state.decks[deckId] = {
        name: topic,
        cards: newCards
      };
      
      addDeckOption(deckId, topic);
      switchToDeck(deckId);
      
    } catch (error) {
      console.error("Generation failed:", error);
      alert("Using default deck instead");
      switchToDeck('js-fundamentals');
    } finally {
      showLoading(false);
    }
  }

  function mockAPICall(topic, count) {
    // Simulated API response - replace with real DeepSeek call
    return Array.from({ length: count }, (_, i) => ({
      question: `${topic} Question ${i + 1}`,
      answer: `Detailed answer about ${topic} (Card ${i + 1})`
    }));
  }

  function addDeckOption(deckId, deckName) {
    const option = document.createElement('option');
    option.value = deckId;
    option.textContent = deckName;
    deckSelect.appendChild(option);
  }

  function switchToDeck(deckId) {
    state.currentDeckId = deckId;
    state.currentCardIndex = 0;
    deckSelect.value = deckId;
    renderCard();
  }

  function showLoading(show) {
    loadingElement.classList.toggle('hidden', !show);
  }

  // Event Listeners
  generateBtn.addEventListener('click', () => {
    const topic = topicInput.value.trim();
    const count = Math.min(parseInt(cardCountInput.value), 20);
    
    if (topic && count > 0) {
      generateDeck(topic, count);
    } else {
      alert("Please enter valid topic and card count (1-20)");
    }
  });

  deckSelect.addEventListener('change', () => {
    switchToDeck(deckSelect.value);
  });

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

  // Initialize
  function init() {
    cardCountInput.value = "10";
    renderCard();
  }

  init();
});