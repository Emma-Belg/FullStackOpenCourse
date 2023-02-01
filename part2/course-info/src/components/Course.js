import Content from "../Content";
import Note from "./Note";

const Course = (props) => {
    const { courses } = props

    return (
        <div>
            <Content courses={courses} />
        </div>
    )
}

export default Course;