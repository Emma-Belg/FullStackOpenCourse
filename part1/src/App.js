import { useState } from 'react'

import Header from './Header';
import Button from './Button';
import UniCafe from './UniCafe';
import Anecdotes from './Anecdotes';

//Part 1.12
const App = () => {
  const [selection, setSelection] = useState("")
  //Handle Clicks
  const handleUniCafeClick = () => { setSelection("UniCafe") }
  const handleAnecdotesClick = () => { setSelection("Anecdotes") }

  return (
    <div>
      <Header text="Choose App" />
      <p>Which app would you like see?</p>
      <Button handleClick={handleUniCafeClick} text='Uni Cafe' />
      <Button handleClick={handleAnecdotesClick} text='Anecdotes' />

      {
          selection ===  "UniCafe" ?
            <div>
              <UniCafe />
            </div>
            :
            selection ===  "Anecdotes" ?
            <div>
              <Anecdotes />
  
            </div>
            :
            <div>
              <p>Click on a button to make a selection</p>
  
            </div>
        }
    </div>
  )
}

export default App;
