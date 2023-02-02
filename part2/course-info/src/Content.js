import Total from "./Total";

const Content = (props) => {
    const courses = props.courses;

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
                        <Total courses={courses} int={course.id-1} />
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default Content;