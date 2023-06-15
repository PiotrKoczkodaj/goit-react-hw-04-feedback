import { Section } from './Section/Section';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  let step = 1;
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const counterForGood = () => {
    return setGood(good + step);
  };
  const counterForBad = () => {
    return setBad(bad + step);
  };
  const counterForNeutral = () => {
    return setNeutral(neutral + step);
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const percentage = (good * 100) / total;
    const number = Math.round(percentage) + '%';
    if (number === 'NaN%') return 0;
    return number;
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          forGood={counterForGood}
          forBad={counterForBad}
          forNeutral={counterForNeutral}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        <Notification
          message={'There is no feedback'}
          total={countTotalFeedback()}
        />
      </Section>
    </div>
  );
};
