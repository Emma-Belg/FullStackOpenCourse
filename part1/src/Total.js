const Total = (props) => {
    
  const content = props.content;

  let sum = 0;
  for (let i=0; i < content.length; i++) {
    let a = content[i].exercises;
    sum = sum + a;
  }

  return (
    <p>
      <b>Number of exercises: </b>{sum}
    </p>
  )
}

export default Total;
