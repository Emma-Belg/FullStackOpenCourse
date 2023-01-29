import { useState } from 'react'

import Header from './Header';
import Button from './Button'

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const randomInt = Math.floor(Math.random() * anecdotes.length);
    const [anecdote, setAnecdote] = useState(randomInt);
    const [votes, setVote] = useState(new Uint8Array(8));
    const [rand, setRand] = useState(0);
    console.log("first", randomInt)
    
    const handleAnecdoteClick = () => { 
        setAnecdote(randomInt) 
        setRand(randomInt);
        console.log("Handle", randomInt)
    }
    const handleVoteClick = () => { 
        votes[rand] += 1;
        const votesCopy = [...votes];
        setVote(votesCopy)
        console.log("Rand", rand)
    }
    
    return (
        <div>
            <Header text="Anecdotes" />
            <Button handleClick={handleAnecdoteClick} text='Get anecdote' />
            <br />
            <p>{anecdotes[anecdote]}</p>
            <Button handleClick={handleVoteClick} text='Vote' />
            <p>Votes: {votes[rand]}</p>
            <br />
            
        </div>
    )
}

export default Anecdotes