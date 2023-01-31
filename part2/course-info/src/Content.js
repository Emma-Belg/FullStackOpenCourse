import Total from "./Total";

const Content = (props) => {
    const course = props.course;
    const courseItems = course.map((course) =>
        <p key={course.id}>{course.name}: {course.exercises} </p>
    )

    return (
        <div>
            {courseItems}
            <Total course={course}/>
        </div>
    )
}
export default Content;