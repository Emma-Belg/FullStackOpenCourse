const StatisticsLine = (props) => {
    const stat = props.stat;
    const text = props.text;

    return (
        <div>
            <p>{text} {stat}</p>
        </div>
    )
}

export default StatisticsLine;