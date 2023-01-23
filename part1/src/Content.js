import React from 'react';

const Content = (props) => {
  
  const course = props.course;

  return (
    <div>
      {course.map((course) =>
      <p>{course.part}: {course.exercises}</p>
      )}
    </div>
  )
}

export default Content;
