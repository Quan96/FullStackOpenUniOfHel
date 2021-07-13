const Total = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{props.statistics[0]}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{props.statistics[1]}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{props.statistics[2]}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{props.statistics[0] + props.statistics[1] + props.statistics[2]}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>
                        {((props.statistics[0] * 100) / (props.statistics[0] + props.statistics[1] + props.statistics[2])).toFixed(1)}%
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Total