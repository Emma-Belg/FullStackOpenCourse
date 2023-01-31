import Header from "../Header";
import Content from "../Content";
import Note from "./Note";

const Course = (props) => {
    console.log(props)
    const { course } = props
    const content = props.course
    return (
        <div>
            <Header course={course} />
            <Content course={course.parts} />
        </div>
    )
}

export default Course;