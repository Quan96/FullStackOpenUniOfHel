import React, {useState} from 'react';
import Header from './Header'
import Button from './Button'
import Total from './Total';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = [good, neutral, bad]
  
  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text='statistics' />
      <Total statistics={statistics} />
    </div>
  )
}

export default App;
