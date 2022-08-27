import { useEffect, useState} from "react"

import { Layout } from "../../components/layouts"
import { FavoritesPokemons } from "../../components/pokemon";
import {  NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils";

const Fovorites = () => {

    const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

    useEffect(() => {      
        setFavoritePokemon(localFavorites.pokemons());
    }, [])    

    return (
        <Layout title="Pokémons - Favoritos">
            { 
                favoritePokemon.length === 0
                    ? <NoFavorites />
                    : <FavoritesPokemons pokemons={favoritePokemon} /> 
            }
        </Layout>
    )
}

export default Fovorites