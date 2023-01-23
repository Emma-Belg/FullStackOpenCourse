import Header from './Header'
import { useState } from 'react'
import Content from './Content'
import Total from './Total'

const App = () => {

  const [content, setContent] = useState([
    {course: 'Half Stack application development', part: 'Fundamentals of React', exercises: 10},
    {course: 'Half Stack application development', part: 'Using props to pass data', exercises: 7},
    {course: 'Half Stack application development', part: 'State of a component', exercises: 14}
  ]) 

  return (
    <div>
      <Header content={content}/>
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App;
