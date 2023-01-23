import Header from './Header'
import { useState } from 'react'
import Content from './Content'
import Total from './Total'

const App = () => {
  
  const course = {
    name:'Half Stack application development',
    parts: [
      {part: 'Fundamentals of React', exercises: 10},
      {part: 'Using props to pass data', exercises: 7},
      {part: 'State of a component', exercises: 14}
    ]
  } 

  console.log(course.parts, course.parts[0].exercises)
  return (
    <div>
      <Header course={course}/>
      <Content course={course.parts} />
      <Total course={course} />
    </div>
  )
}

export default App;
