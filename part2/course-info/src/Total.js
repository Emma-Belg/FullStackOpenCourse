const Total = (props) => {
  const course = props.course;
  const courseExercises = course.map((exercise) => exercise.exercises);
  let sum = () => courseExercises.reduce((current, next) => current + next);

  return (
    <p>
      <b>Total of {sum()} exercises.</b>
    </p>
  )
}
export default Total;