import React from 'react';

export default function Result({ score }) {
  const totalQuestions = 5;
  const percentage = `${(score / totalQuestions) * 100}%`;

  return (
    <div className='score-container'>
      <h1>SCORE</h1>
      <h2>{score} out of {totalQuestions} correct - ({percentage})</h2>
      <button onClick={() => window.location.reload()}>RESTART QUIZ</button>
    </div>
  );
}
