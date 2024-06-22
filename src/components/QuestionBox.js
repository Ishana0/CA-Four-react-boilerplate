import React, { useState } from 'react';
import img from "../assets/brain.png";
import questions from '../questions.js';
import Result from './Result';
import './QuestionBox.css';
import './Result.css';

export default function QuestionBox() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlightText, setHighlightText] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = question + 1;
    if (nextQuestion < questions.length) {
      setQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`main_container ${darkMode ? 'dark' : 'light'}`}>
      <div className="header">
        <img src={img} alt='Quiz logo' />
        <h1 className="heading">Quiz Game</h1>
      </div>

      <div className='toggle-mode'>
        <button onClick={toggleMode} className={`${darkMode ? 'dark' : 'light'}`}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>

      {showResult ? (
        <Result score={score} />
      ) : (
        <div className='question-section'>
          <h3>
            Question: {question + 1} out of {questions.length}
          </h3>
          <h2 className={`question-text ${highlightText ? 'highlight' : ''}`}>
            {questions[question].text}
          </h2>

          <div className='options-container'>
            {questions[question].options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option.isCorrect)}>
                {option.text}
              </button>
            ))}
          </div>

          <div className='highlight-buttons'>
            <button onClick={() => setHighlightText(true)}>Highlight</button>
            <button onClick={() => setHighlightText(false)}>Remove Highlight</button>
          </div>
        </div>
      )}

      <div className={`background ${darkMode ? 'dark' : ''}`}></div>
    </div>
  );
}