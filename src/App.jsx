import { useEffect, useState } from "react";
import { axiosClient } from "./utils/axiosClient";

function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient("/countries")
            .then((data) => {
                console.log(data.data.data);
                setCountries(data.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <div className="wrapper-loader">
                <div className="loader"></div>
            </div>
        );
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            {countries &&
                countries.map((country) => (
                    <div className="card" key={country.name}>
                        <img
                            className="card-img-top"
                            src={country.imageUrl}
                            alt={country.name}
                        />
                        <div className="card-body">
                            <h1 className="card-title">{country.name}</h1>
                            <p className="card-text">
                                Capital: {country.capital}
                            </p>
                            <p>
                                Population:{" "}
                                {country.population.toLocaleString()}
                            </p>
                            <p>Area: {country.area.toLocaleString()} km²</p>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default App;
