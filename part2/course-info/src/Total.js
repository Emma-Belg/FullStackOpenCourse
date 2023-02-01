const Total = (props) => {
  const courses = props.courses;
  const courseParts = courses.map((course) => course.parts)
    const sum = (array) => array.reduce((current, next) => current + next);

    const arraysOfPartExercises = [];
    for (let i = 0; i < courseParts.length; i++) {
        const arrayLoop = [];
        courseParts[i].map((part) => arrayLoop.push(part.exercises))
        arraysOfPartExercises.push(arrayLoop)
    }

  return (
    courses.map((course) => {
      return (
        <p key={course.id} ><b>Total of {sum(arraysOfPartExercises[course.id-1])} exercises.</b></p>
      )})
  )
}
export default Total;