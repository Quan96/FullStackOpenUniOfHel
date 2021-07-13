import React, {useState} from 'react';
import Header from './Header';
import Button from './Button';
import Statistic from './Statistic';

const Statistics = ({data: { good, neutral, bad }}) => {
  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  var sum = good + neutral + bad;
  var average = (good - bad) / (good + neutral + bad);
  var positive = (good * 100) / (good + neutral + bad);

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={sum} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive + '%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text='statistics' />
      <Statistics data={{ good, neutral, bad }} />
    </div>
  )
}

export default App;
