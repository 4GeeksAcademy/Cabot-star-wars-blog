import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = () => {
    const[planets, setPlanets] = useState([])
    const{store, actions} = useContext(Context)

    useEffect(() => {
        async function getPlanets(){
            const response = await fetch("https://www.swapi.tech/api/planets/")
            const data = await response.json()
            setPlanets(data.results)
        }    
        getPlanets()
    },[])

    const handleFavorite = (planet) => {
        if (store.favorite.includes(planet)) {
            actions.deleteFavorite(planet)
        }
         else {
            actions.addFavorite(planet)
        
    }
}

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {planets ?.map ((planet,index)=> (
                <div className="card bg-dark" style={{minWidth:"22rem", paddingRight:"10px"}} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}/>
                    <div className="card-body">
                        <h5 className="card-title text-warning p-auto">{planet.name}</h5>
                    </div>
                    <div className="Cardbtn">
                    <Link className="secondpagebutton text-warning mx-auto p-5" to={"/planet-description/" + planet.uid}>About</Link>
                        <button  className="secondpagebutton text-warning mx-auto p-5 bg-dark" onClick={() => { handleFavorite(planet.name) }}>Favorite</button>
                    </div>
                </div>
            ))}
            
        </div>
        //input card
    )
};