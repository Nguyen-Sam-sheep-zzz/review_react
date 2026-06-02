
function Alert(props) {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
            {props.text}
        </div>
    );
}

export default Alert;