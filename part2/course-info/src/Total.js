const Total = (props) => {
    const course = props.course;
    const courseParts = course.parts;
    //console.log("Hey", courseParts);
  
    let sum = 0;
    for (let i=0; i < courseParts.length; i++) {
      let a = courseParts[i].exercises;
      sum = sum + a;
    }
  
    return (
      <p>
        <b>Number of exercises: </b>{sum}
      </p>
    )
  }
  export default Total;