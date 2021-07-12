const Total = (props) => {
    return (
        <p>
            Number of exercises: {props.exercises.reduce((sum, exercise) => sum + exercise)}
        </p>
    )
}

export default Total;