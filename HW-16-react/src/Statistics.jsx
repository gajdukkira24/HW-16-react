import { useState } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setFeedback(prev => ({
      ...prev,
      good: prev.good + 1,
    }));
  };

  const handleNeutral = () => {
    setFeedback(prev => ({
      ...prev,
      neutral: prev.neutral + 1,
    }));
  };

  const handleBad = () => {
    setFeedback(prev => ({
      ...prev,
      bad: prev.bad + 1,
    }));
  };

 
  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((feedback.good / total) * 100);
  };

  return (
    <>
    

      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      <h2>Statistics</h2>

      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>

      <p>Total: {countTotalFeedback()}</p>

      <p>
        Positive feedback: {countPositiveFeedbackPercentage()}%
      </p>
    </>
  );
}