const Content = (props) => {
    console.log(props)
    return (
        props.parts.map(object => <p> {object.name} {object.exercises} </p>)
    )
}

export default Content;