import React from "react";
import {CharacterCard} from "../component/characterCard";
import {PlanetCard} from "../component/planetCard";
import StarshipsCard from "../component/starshipsCard";
import "../../styles/home.css";
import "../../styles/descriptioncard.css";

export const Connection = () => (
    <div className="text-center mt-5">
        <CharacterCard />
        <PlanetCard />
        <StarshipsCard />
    </div>
);