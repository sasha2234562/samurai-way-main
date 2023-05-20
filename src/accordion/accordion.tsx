type  titleProps = {
    title : string,
    collapted : boolean
}

function Accordion(props: titleProps) {
    if(props.collapted) {
        return  <div>
            <span>{props.title}</span>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
        </div>
    }
    return (
        <div>{props.title}</div>
    )
}

export default Accordion;