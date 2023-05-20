import Stars from "./stars";
import i from "../stars/example.module.css"

function Ex() {
    return (
        <div className={i.example}>
            <Stars value={1}/>
            <Stars value={2}/>
            <Stars value={3}/>
            <Stars value={4}/>
            <Stars value={5}/>
        </div>

    )
}

export default Ex;