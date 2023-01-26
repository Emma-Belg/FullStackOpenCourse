import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
    const voteOptions = props.voteOptions;
    const total = ([array]) => array[0] + array[1] + array[2];

    const rounding = (number, decimal) => Math.round(number * decimal) / decimal;

    const average = ([array]) => {
        let positive = array[0] * 1;
        let neutral = array[1] * 0;
        let negative = array[2] * -1;
        let all = (positive + neutral + negative) / total([array]);
        return rounding(all, 1000);
    }

    const positiveAv = ([array]) => {
        let positive = array[0] / total([array]) * 100;
        return rounding(positive, 100) + "%";
    }

    return (
        <div>
            <StatisticsLine text="Total votes:" stat={total([voteOptions])} />
            <StatisticsLine text="Average Score:" stat={average([voteOptions])} />
            <StatisticsLine text="Percentage of positive votes:" stat={positiveAv([voteOptions])} />
        </div>
    )
}

export default Statistics;