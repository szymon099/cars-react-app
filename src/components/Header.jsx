import "./Header.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    let navigate = useNavigate();

    return (
        <div className="header">
            <h1
                className="header__title"
                onClick={() => {
                    navigate("/");
                }}
            >
                CutCars.
            </h1>
            <div>
                {location.pathname === "/" && (
                    <Button
                        class="btn btn--outline .btn--no-margin"
                        content="Dodaj"
                        onClick={() => {
                            navigate("/AddCarPage");
                        }}
                    />
                )}{" "}
                {location.pathname !== "/" && (
                    <Button
                        class="btn btn--main .btn--no-margin"
                        content="Strona główna"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                )}
            </div>
        </div>
    );
};
