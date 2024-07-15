import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{ store, actions } = useContext(Context);
    return (
		<nav className="navbar navbar-dark bg-dark mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1 text-warning">StarWars</span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorite?.map((x,index)=>(
                        <li key={index} onClick={()=>{actions.deleteFavorite(x)}}><a className="dropdown-item" href="#">{x}</a>x</li>
                    ))}
                    </ul>
                </div>
            </div>
        </nav>
	);
};
