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

    let randomInt = Math.floor(Math.random() * anecdotes.length);
    const [votes, setVote] = useState(new Uint8Array(8));
    //initiate rand State with randomInt, otherwise votes are not given to correct anecdote
    const [rand, setRand] = useState(randomInt);
    //ensure that the anecdote matches rand, not a different randomInt
    const [anecdote, setAnecdote] = useState(rand);

    const handleAnecdoteClick = () => { 
        setAnecdote(randomInt) 
        //update rand State to === (this iteration of) randomInt. 
        //This way the vote(handleVoteClick below) is given to correct anecdote, not a new random one.
        setRand(randomInt);
        //randomising randomInt again in order to stop unchanging/stuck loop if randomInt & rand happen to be the same on one iteration
        randomInt = Math.floor(Math.random() * anecdotes.length);
    }

    const handleVoteClick = () => { 
        votes[rand] += 1;
        const votesCopy = [...votes];
        setVote(votesCopy)
    }

    const getMax = (a, b) => Math.max(a, b);
    const getHighest = votes.reduce(getMax);

    let high = "No votes yet made"
    for(let i =0; i < votes.length; i++) {
        if(votes[i] === getHighest) {
            high = anecdotes[i] 
        }
        if( getHighest === 0) {
            high = "No votes yet made"
        }
    }
    
    return (
        <div>
            <Header text="Anecdote of the day" />
            <Button handleClick={handleAnecdoteClick} text='Get anecdote' />
            <br />
            <p>{anecdotes[anecdote]}</p>
            <Button handleClick={handleVoteClick} text='Vote' />
            <p>Votes: {votes[rand]}</p>
            <Header text="Anecdote with most votes" />
            <p>Highest Vote: {high}</p>
            <br />
            
        </div>
    )
}

export default Anecdotes