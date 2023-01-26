import { useState } from 'react'

import Header from './Header'
import Button from './Button';
import Statistics from './Statistics';
import StatisticsLine from './StatisticsLine';

//Part 1.10
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const voteOptions = [good, neutral, bad];

  //Handle Clicks
  const handleGoodClick = () => { setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => { setBad(bad + 1) }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Header text="Statistics" />
      {
        voteOptions[0] === 0 ?
          <div>
            <p>No feedback given.</p>
          </div>
          :
          <div>
            <StatisticsLine text="Good:" stat={good} />
            <StatisticsLine text="Neutral:" stat={neutral} />
            <StatisticsLine text="Bad:" stat={bad} />
            <Statistics voteOptions={voteOptions} />
          </div>
      }
    </div>
  )
}

export default App;
