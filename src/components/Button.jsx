import PropTypes from "prop-types";
import "./Button.css";

export const Button = (props) => {
    return (
        <button className={props.class} onClick={props.onClick}>
            {props.content}
        </button>
    );
};

Button.propTypes = {
    class: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func,
};
