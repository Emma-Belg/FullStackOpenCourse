const Content = (props) => {

    const course = props.course;
    const courseParts = course.map((part) => part);
    const courseItems = courseParts.map((course) =>
        <p key={course.id}>{course.name}: {course.exercises} </p>
    )

    return (
        <div>
            {courseItems}
        </div>
    )
}
export default Content;