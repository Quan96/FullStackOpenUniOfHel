import React, { useState } from 'react';
import Button from './Button';
import Header from './Header';
import Anecdote from './Anecdote';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length-1))
  const maxIdx = points.findIndex(point => point === Math.max(...points))
  console.log(maxIdx) 

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function toNextAnecdotes() {
    setSelected(randomNumber(0, anecdotes.length - 1))
  }

  function addVote() {
    const copy = [...points] 
    copy[selected] += 1
    setPoints(copy)
  }
  
  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={toNextAnecdotes} text='next anecdote' />    
      <Header text='Anecdote with most votes' />
      <Anecdote text={anecdotes[maxIdx]} votes={points[maxIdx]} />
    </div>
  )

}

export default App;
