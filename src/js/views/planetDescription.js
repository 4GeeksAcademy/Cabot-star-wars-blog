import React,{useState, useEffect, useContext} from "react";
import {Context} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../../styles/descriptioncard.css";

export const PlanetDescription = () => {
    const[planet, setPlanet] = useState({})
    const {id} = useParams()
    useEffect(() => {
        async function getPlanet(){
            const response = await fetch("https://www.swapi.tech/api/planets/"+id)
            const data = await response.json()
            setPlanet(data.result.properties)
        }
        getPlanet()
        console.log(planet);
    },[]);
    return (
        <section>
            <div className="post">
                <div className="left">
                    <img className="wordmark"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
                </div>
                <div className="right"><img className="helmet"
                    src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png" alt="helmet" />
                    <div className="productInfo">
                        <h1>{planet.name} </h1>
                        <div className="details">
                            <div className="size">
                                <h4>Population: {planet.population}</h4>
                                <h4>Terrain: {planet.terrain}</h4>
                                <h4>Diameter: {planet.diameter}</h4>
                                <h4>Climate: {planet.climate}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
