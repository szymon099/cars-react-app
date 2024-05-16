import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./AddCarForm.css";

export const AddCarForm = () => {
    let navigate = useNavigate();

    return (
        <div className="add-car-page__form">
            <input
                className="add-car-page__form-input"
                type="text"
                placeholder="Model samochodu"
            />
            <input
                className="add-car-page__form-input"
                type="text"
                placeholder="Właściciel"
            />
            <input
                className="add-car-page__form-input"
                type="number"
                placeholder="0-100 w sekundach"
            />
            <input
                className="add-car-page__form-input"
                type="number"
                placeholder="Moc w KM"
            />
            <div>
                <label
                    className="add-car-page__form-label"
                    htmlFor="gearbox-select"
                >
                    Wybierz skrzynie biegów:
                </label>
                <select
                    className="add-car-page__form-select"
                    name="gearbox-select"
                    id="gearbox-select"
                >
                    <option value=""></option>
                    <option value="Automatyczna">Automatyczna</option>
                    <option value="Manualna">Manualna</option>
                </select>
            </div>
            <div>
                <label
                    className="add-car-page__form-label"
                    htmlFor="drive-select"
                >
                    Wybierz napęd:
                </label>
                <select
                    className="add-car-page__form-select"
                    name="drive-select"
                    id="drive-select"
                >
                    <option value=""></option>
                    <option value="RWD">RWD</option>
                    <option value="FWD">FWD</option>
                    <option value="AWD">AWD</option>
                </select>
            </div>
            <Button
                class="btn btn--main btn--add-form"
                content="Dodaj samochód"
                onClick={() => {
                    navigate("/");
                }}
            />
        </div>
    );
};
