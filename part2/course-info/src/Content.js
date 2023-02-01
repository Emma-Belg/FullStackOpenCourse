const Content = (props) => {
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
        <div>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <h2>{course.name}</h2>
                        {course.parts.map((part) => {
                            return (
                                <div key={part.id}>
                                    <p>{part.name}: {part.exercises}</p>
                                </div>
                            )
                        })}
                        <p><b>Total of {sum(arraysOfPartExercises[course.id-1])} exercises.</b></p>
                        <hr />
                    </div>
                )
            })} 
        </div>
    )
}
export default Content;