import { useState } from 'react'

import Header from './Header'
import Button from './Button';
import Statistics from './Statistics';

//Part 1.9
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const voteOptions = [good, neutral, bad];


  const handleGoodClick = () => {setGood(good + 1)}
  const handleNeutralClick = () => {setNeutral(neutral + 1)}
  const handleBadClick = () => {setBad(bad + 1)}

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
     
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <Header text="Statistics"/>
      <Statistics voteOptions={voteOptions}/>
    </div>
  )
}

export default App;
