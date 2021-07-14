const Total = ({ parts }) => {
    return (
        <h4> 
            total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises 
        </h4>
    )
}

export default Total;