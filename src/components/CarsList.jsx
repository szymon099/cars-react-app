import { CarListItem } from "./CarListItem";
import "./CarList.css";

export const CarsList = () => {
    const cars = [
        {
            id: 1,
            name: "BMW E36 323i",
            owner: "Szymek",
            acceleration: 8.0,
            gearbox: "Manualna",
            power: 170,
            drive: "RWD",
            image: "src/assets/cars-image/bmw-e36-323i.JPG",
        },
        {
            id: 2,
            name: "BMW F11 530d",
            owner: "Rudy",
            acceleration: 6.8,
            gearbox: "Automatyczna",
            power: 258,
            drive: "RWD",
            image: "src/assets/cars-image/bmw-f11-530d.jpg",
        },
        {
            id: 3,
            name: "Lexus GS300",
            owner: "Filip",
            acceleration: 9,
            gearbox: "Automatyczna",
            power: 223,
            drive: "RWD",
            image: "src/assets/cars-image/lexus-gs300.jpg",
        },
        {
            id: 4,
            name: "Honda Civic MK7",
            owner: "Tomeczek",
            acceleration: 10.2,
            gearbox: "Manualna",
            power: 110,
            drive: "FWD",
            image: "src/assets/cars-image/honda-tomek.jpg",
        },
        {
            id: 5,
            name: "Honda Civic MK5 Sedan",
            owner: "Pysia",
            acceleration: 10.2,
            gearbox: "Manualna",
            power: 90,
            drive: "FWD",
            image: "src/assets/cars-image/honda-pysia.jpg",
        },
    ];

    return (
        <div className="cars-container">
            {cars.map((car) => (
                <CarListItem
                    key={car.id}
                    name={car.name}
                    owner={car.owner}
                    acceleration={car.acceleration}
                    gearbox={car.gearbox}
                    power={car.power}
                    drive={car.drive}
                    image={car.image}
                />
            ))}
        </div>
    );
};
