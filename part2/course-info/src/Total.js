const Total = (props) => {
  const courses = props.courses;
  const courseParts = courses.map((course) => course.parts);
  let int = props.int;
  const sum = (array) => array.reduce((current, next) => current + next);

  const arraysOfPartExercises = [];
  for (let i = 0; i < courseParts.length; i++) {
    const arrayLoop = [];
    courseParts[i].map((part) => arrayLoop.push(part.exercises))
    arraysOfPartExercises.push(arrayLoop)
  }

  return (
    <p><b>Total of {sum(arraysOfPartExercises[int])} exercises.</b></p>
  )
}
export default Total;