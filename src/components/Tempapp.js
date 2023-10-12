import React, { useEffect, useState } from 'react';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=864ec74c9d748d65b86355e72e94cdb0`
            const response = await fetch(url);
            // console.log(response)
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">



                <div id="weathercon">
                    <i className="fas fa-sun" style={{ color: '#eccc68' }} />
                    <input className="IP" type="search"  value={search}
                    placeholder='Enter the name of city' onChange={(event) => {
                        setSearch(event.target.value)

                    }} />
                   
                </div>


                {!city ? (
                    <h1 className='h'>No Data Found :)</h1>
                ) :
                    (
                        <div className="info">
                            <h1 className="location" style={{ color: 'black' }}><i className="fas fa-street-view" />{search}</h1>

                            <h1 className="temp">{city.temp}°C</h1>
                            <h3 className="tempmin_max"> {city.temp_min}°C |  {city.temp_max}°C</h3>
                        </div>
                    )

                }
            </div>
        </>
    )
}
export default Tempapp;