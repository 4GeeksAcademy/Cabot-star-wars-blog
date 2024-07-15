import React,{useState, useEffect, useContext} from "react";
import { Context } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../../styles/descriptionCard.css";

export const StarshipsDescription = () => {
    const[starships, setStarships] = useState({});
    const {id} = useParams();
    useEffect(() => {
        async function getStarships(){
            const response = await fetch("https://www.swapi.tech/api/starships/"+id);
            const data = await response.json();
            setStarships(data.result.properties);
        }
        getStarships();
        console.log(starships);
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
                        <h1>{starships.name} </h1>
                        <div className="details">
                            <div className="size">
                                <h4>Model: {starships.model}</h4>
                                <h4>Starship Class: {starships.starship_class}</h4>
                                <h4>Hyperdrive Rating: {starships.hyperdrive_rating}</h4>
                                <h4>Length: {starships.length}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
