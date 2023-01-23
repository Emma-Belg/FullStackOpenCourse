import React from 'react';

const Content = (props) => {
  
  const content = props.content;

  return (
    <div>
      {content.map((content) =>
      <p>{content.part}: {content.exercises}</p>
      )}
    </div>
  )
}

export default Content;
