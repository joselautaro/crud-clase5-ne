import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import './ListaDatos.css';

export const ListaDatos = ({ datos, eliminarDato, editarDato }) => {
  return (
    <>
      <h2>Datos enviados:</h2>
      <table className='datos-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.nombre}</td>
              <td>{dato.apellido}</td>
              <td>{dato.email}</td>
              <td>
                <FaPencilAlt className='pencil' onClick={() => editarDato(index)} />
                <FaRegTrashAlt className='trash' onClick={() => eliminarDato(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

