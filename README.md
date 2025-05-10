Flashcard Generator App
Overview
This is a simple web app that helps you generate flashcards on any topic. You input a topic and the number of cards you want, and the app fetches question-answer pairs from the Gemini API. You can easily navigate through the cards and view answers when needed.

Features
Generate flashcards for any topic.

Navigation controls for browsing through the flashcards.

Show answer feature to reveal the answer to a question.

Getting Started
To get started with the app, follow these steps:

Prerequisites
A modern web browser (e.g., Chrome, Firefox, or Edge).

Internet connection to fetch flashcard data.

Installation
Clone or download the repository:

bash
Copy
Edit
git clone <repo-url>
Open the index.html file in your browser to run the app.

Usage
Input a topic in the "Topic" input field.

Choose the number of flashcards you want to generate (up to 20).

Click Generate Flashcards to fetch the questions.

Use the Next and Previous buttons to navigate through the cards.

Click Show Answer to view the answers for each question.

Security Considerations
Currently, the app includes an exposed API key in the source code for Gemini API integration. Before deploying to production, it’s essential to secure the API key by moving it to an environment variable or using server-side functions to prevent unauthorized access.

License
This project is licensed under the MIT License.

Acknowledgements
Gemini API
my cat Ziigy
