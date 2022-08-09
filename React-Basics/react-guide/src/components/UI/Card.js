import './Card.css'

function Card(props){
    // className becomes itself + child className so both css classes are applied to the card component
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card