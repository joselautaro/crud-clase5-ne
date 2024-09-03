import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import './ListaDatos.css'

export const ListaDatos = ({ datos, eliminarDato, editarDato }) => {
  return (
    <>
    <h2>Datos enviados:</h2>
      <div>
        {datos.map((dato, index) =>(
          <div className='div-container' key={index}>
            <p>Nombre: {dato.nombre}</p>
            <p>Apellido: {dato.apellido}</p>
            <p>Email: {dato.email}</p>
            <FaPencilAlt className='pencil' onClick={() => editarDato(index)}/>
            <FaRegTrashAlt className='trash' onClick={() => eliminarDato(index)} />
          </div>
          ))}
      </div>
    </>
  )
}
