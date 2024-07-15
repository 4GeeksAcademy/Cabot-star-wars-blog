import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterCard = () => {
    const[characters, setCharacters] = useState([])
    const{store, actions} = useContext(Context)

    useEffect(() => {
        async function getCharacters(){
            const response = await fetch("https://www.swapi.tech/api/people/")
            const data = await response.json()
            setCharacters(data.results)
        }    
        getCharacters()
    },[])

    const handleFavorite = (character) => {
        if (store.favorite.includes(character)) {
            actions.deleteFavorite(character)
        }
         else {
            actions.addFavorite(character)
        
    }
}

    return (
        <div className="cardbg d-flex col-10 overflow-auto mt-5 mx-auto">
            {characters ?.map ((character,index)=> (
                <div className="card bg-dark" style={{minWidth:"22rem", paddingRight:"10px"}} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}/>
                    <div className="card-body">
                        <h5 className="card-title text-warning">{character.name}</h5>
                    </div>
                    <div className="Cardbtn">
                    <Link className="secondpagebutton text-warning p-5" to={"/character-description/" + character.uid}>About</Link>
                        <button  className="secondpagebutton text-warning p-5 bg-dark" onClick={() => { handleFavorite(character.name) }}>Favorite</button>
                    </div>
                </div>
            ))}
            
        </div>
        //input card
    )
};