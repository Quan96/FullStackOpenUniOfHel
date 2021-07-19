const Filter = ( {text, keyword, onChange} ) => {
    return (
        <form>
            <div>
                {text} 
                <input
                    value={keyword}
                    onChange={onChange}>
                </input> 
            </div>
        </form>
    )
}

export default Filter;