import "./CarListItem.css";
import PropTypes from "prop-types";
import { Icon } from "./Icon";

export const CarListItem = (props) => {
    return (
        <div className="car">
            <img className="car__image" src={props.image} alt="" />
            <div className="car__detail">
                <div className="car__title">
                    <h2 className="car__name">{props.name}</h2>
                    <span className="car__owner">by {props.owner}</span>
                </div>
                <div className="car__info-box">
                    <div className="car__info-item">
                        <Icon
                            src="src/assets/icon/speed.png"
                            alt="acceleration icon"
                        />
                        <span>{props.acceleration}s do 100km/h</span>
                    </div>
                    <div className="car__info-item">
                        <Icon
                            src="src/assets/icon/gearbox.png"
                            alt="gearbox icon"
                        />
                        <span>{props.gearbox}</span>
                    </div>
                    <div className="car__info-item">
                        <Icon
                            src="src/assets/icon/power.png"
                            alt="power icon"
                        />
                        <span>{props.power} km</span>
                    </div>
                    <div className="car__info-item">
                        <Icon
                            src="src/assets/icon/wheel.png"
                            alt="drive icon"
                        />
                        <span>{props.drive}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

CarListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.string,
    acceleration: PropTypes.number,
    gearbox: PropTypes.string,
    power: PropTypes.number,
    drive: PropTypes.string,
    image: PropTypes.string,
};
