import { useEffect, useState } from "react";
import "./pokemon.css";
import { Fa0, FaL } from "react-icons/fa6";

export const PokemonProject = () => {
  const [pokemon, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  // const FetchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };

  const FetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPokemon();
  }, []);

  console.log(pokemon);

  if (loading) {
    return (
      <>
        <div>
          <h1>Loading. . .</h1>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>
          <h1>Error : {error.message}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
            </figure>
            <h1>{pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height <span>{pokemon.height}</span>
              </p>

              <p className="pokemon-info">
                Weight <span>{pokemon.weight}</span>
              </p>

              <p className="pokemon-info">
                Speed <span>{pokemon.stats[4].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
