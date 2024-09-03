import React, { useState } from 'react'
import { ListaDatos } from '../ListaDatos/ListaDatos'
import './FormularioPadre.css'

export const FormularioPadre = () => {


    // Declaramos los estados para almacenar los valores de nombre, apellido, email, y lista de datos
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('')
    const [datos, setDatos] = useState([])
    const [editIndex, setEditIndex] = useState(null) //Estado para almacenar el indice del datos que se está editando

    // Funcion que se ejecuta la momento de enviar
    const manejarSubmit = (e) =>{
        e.preventDefault();
        // Creamos un objeto con los valores actuales de nombre apellido y email
        const nuevoDato = {nombre, apellido, email};
        if(editIndex !== null){//Verifica si se está en modo edicion (editIndex no seria null)
            const datosActualizados = datos.map((dato, index) => 
                // Si se está editando, se actualiza el dato en la lista de datos
                index === editIndex ? nuevoDato : dato
            );
            setDatos(datosActualizados) //Actualiza el estado con la lista de datos modificada
            setEditIndex(null) //Reestablece el indice de edicion a null, volviendo al modo de inserción
        }else{
            setDatos([...datos, nuevoDato])
        }
        setNombre('');
        setApellido('');
        setEmail('')
    }

    // Funcion para eliminar el dato basado en su indice
    const eliminarDato = (index) =>{
        const datosFiltrados = datos.filter((_, i) => i !== index ); //Creamos una nueva lista, excluyendo el dato a eliminar
        setDatos(datosFiltrados) //Actualiza el estado con la lista filtrada
    }


    // Función de edicion de un datos
    const editarDato = (index) =>{
        const dato = datos[index]; //Obtiene el dato seleccionado para editar
        setNombre(dato.nombre)
        setApellido(dato.apellido)
        setEmail(dato.email)
        setEditIndex(index)
        // Cambia todos los campos al modo de edicion
    }
 

    return (
        <>
            <div>
                <form onSubmit={manejarSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input 
                            type="text"
                            value={nombre}
                            onChange={(e) =>  setNombre(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label>Apellido:</label>
                        <input 
                             type="text"
                             value={apellido}
                             onChange={(e) =>  setApellido(e.target.value)}
                             required 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" //Asocia el estado email con el valor input
                            value={email}
                            onChange={(e) =>  setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <button type='submit'> {editIndex !== null ? 'Actualizar' : 'Enviar'} </button>
                    {/* Botón de enviar que muestra 'Actualizar' si se está editando o 'Enviar' si se está agregando un nuevo dato */}
                </form>
            </div>
            <ListaDatos datos={datos} eliminarDato={eliminarDato} editarDato={editarDato}/>
            </>
           
    )
}
