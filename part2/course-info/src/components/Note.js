const Note = ({ note, toggleImportance }) => {
  const lable = note.important
    ? 'make not important' : 'make important'

    console.log("id", note.id)
  return (
    <li>
      {note.content} &nbsp;
      <button onClick={toggleImportance}>{lable}</button>
    </li>
  )
}

export default Note