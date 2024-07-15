import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipCard = () => {
    const[starships, setStarships] = useState([]);
    const{store, actions} = useContext(Context);

    useEffect(() => {
        async function getStarships(){
            const response = await fetch("https://www.swapi.tech/api/starships/");
            const data = await response.json();
            setStarships(data.results);
        }    
        getStarships()
    },[])

    const handleFavorite = (starship) => {
        if (store.favorite.includes(starship)) {
            actions.deleteFavorite(starship)
        }
         else {
            actions.addFavorite(starship)
        
    }
}

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {starships ?.map ((starship,index)=> (
                <div className="card bg-dark" style={{minWidth:"22rem", paddingRight:"10px"}} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">{starship.name}</h5>
                    </div>
                    <div className="Cardbtn">
                    <Link className="secondpagebutton text-warning p-5" to={"/starship-description/" + starship.uid}>About</Link>
                        <button  className="secondpagebutton text-warning p-5 bg-dark" onClick={() => { handleFavorite(starship.name) }}>Favorite</button>
                    </div>
                </div>
            ))}
            
        </div>
        //input card
    )
};