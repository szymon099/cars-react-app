import "./Icon.css";
import PropTypes from "prop-types";

export const Icon = (props) => {
    return <img src={props.src} alt={props.alt} className="icon" />;
};

Icon.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};
