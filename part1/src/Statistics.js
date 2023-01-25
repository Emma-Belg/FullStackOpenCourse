const Statistics = (props) => {
    const voteOptions = props.voteOptions;
    const total = ([array]) => array[0] + array[1]+ array[2];
    
    const rounding = (number, decimal) => Math.round(number*decimal)/decimal;
        
    const average = ([array]) => {
        let positive = array[0] * 1;
        let neutral = array[1] * 0;
        let negative = array[2] * -1;
        let all = (positive + neutral + negative)/total([array]);
        return rounding(all, 1000);
    }

    const positiveAv = ([array]) => {
        let positive = array[0] /total([array]) *100;
        return rounding(positive, 100);
    }
    
    if (voteOptions[0] === 0 && voteOptions[1] === 0 && voteOptions[2] === 0) {
        return (
            <div>
                <p>No feedback given.</p>
            </div>
        )
    }

    return (
        <div>
            <p>Total votes: {total([voteOptions])}</p>
            <p>Vote average: {average([voteOptions])}</p>
            <p>Percentage of positive votes: {positiveAv([voteOptions])}%</p>
        </div>
    )
}

export default Statistics;