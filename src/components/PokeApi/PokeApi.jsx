import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa la biblioteca Axios para hacer solicitudes HTTP
import './PokeApi.css'; // Importa los estilos desde el archivo CSS

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null); // Declara el estado 'pokemon' para almacenar los datos del Pokémon
  const [id, setId] = useState(1); // Declara el estado 'id' para almacenar el ID del Pokémon actual
  const [busqueda, setBusqueda] = useState(""); // Declara el estado 'busqueda' para almacenar el texto ingresado por el usuario en el input

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); // Realiza una solicitud HTTP GET a la API de Pokémon para obtener los datos del Pokémon con el ID actual
        setPokemon({
          numero: response.data.id, // Asigna el ID del Pokémon al estado 'pokemon'
          nombre: response.data.name, // Asigna el nombre del Pokémon al estado 'pokemon'
          img: response.data.sprites.front_default, // Asigna la URL de la imagen del Pokémon al estado 'pokemon'
        });
      } catch (error) {
        console.error("Error fetching Pokemon:", error); // Muestra un mensaje de error en caso de que la solicitud falle
      }
    };

    fetchPokemon(); // Llama a la función para obtener los datos del Pokémon
  }, [id]); // Ejecuta el efecto cada vez que cambia el valor de 'id'

  const handleAnterior = () => {
    if (id > 1) setId(id - 1); // Si el ID es mayor que 1, decrementa el valor del ID en 1
  };

  const handleSiguiente = () => {
    setId(id + 1); // Incrementa el valor del ID en 1
  };




  return (
    <div className='card'>
      {pokemon ? (
        <> {/* Si 'pokemon' tiene un valor, muestra los datos */}
          <h3 className='pika'>{pokemon.numero}</h3> {/* Muestra el número del Pokémon */}
          <h3 className='pika'>{pokemon.nombre}</h3> {/* Muestra el nombre del Pokémon */}
          <img src={pokemon.img} alt={pokemon.nombre} className='pokemon-img'/> {/* Muestra la imagen del Pokémon */}
        </>
      ) : (
        <h3 className='loading'>Cargando...</h3> // Si 'pokemon' no tiene un valor, muestra un mensaje de "Cargando..."
      )}
      <div>
        <button className='btn' onClick={handleAnterior}>Anterior</button> {/* Botón para obtener el Pokémon anterior */}
        <button className='btn' onClick={handleSiguiente}>Siguiente</button> {/* Botón para obtener el siguiente Pokémon */}
      </div>
    </div>
  );
};
