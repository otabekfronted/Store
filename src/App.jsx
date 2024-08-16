import { useEffect, useState } from "react";
import { axiosClient } from "./utils/axiosClient";

function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("/countries")
            .then((data) => {
                console.log(data.data.data);
                setCountries(data.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader"></div>
            </div>
        );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {countries &&
                countries.map((country) => (
                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        key={country.name}
                    >
                        <figure>
                            <img
                                src={country.imageUrl}
                                alt={country.name}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                {country.name}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                Capital: {country.capital}
                            </p>
                            <p className="text-gray-600">
                                Population: {country.population}
                            </p>
                            <div className="mt-4">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default App;
