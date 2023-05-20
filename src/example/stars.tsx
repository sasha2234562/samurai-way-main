type  RatingProps = {
    value : number
}


function Stars(props: RatingProps) {
    if (props.value === 1) {
        return <div>
            <span><b>star</b></span>
        </div>
    } else if (props.value === 2) {
        return <div>
            <span><b>star star</b></span>
        </div>
    } else if (props.value === 3) {
        return <div>
            <span><b>star star star</b></span>
        </div>
    } else if (props.value === 4) {
        return <div>
            <span><b>star star star star</b></span>
        </div>
    } else if (props.value === 5) {
        return <div>
            <span><b>star star star star star</b></span>
        </div>
    }
    return (
        <div>star</div>
    )
}

export default Stars;