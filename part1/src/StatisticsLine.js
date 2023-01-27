const StatisticsLine = (props) => {
    const stat = props.stat;
    const text = props.text;

    return (
        <tr>
            <td>{text} </td>
            <td>{stat} </td>
        </tr>
    )
}

export default StatisticsLine;